import fs from 'node:fs';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';

const fail=(message)=>{throw new Error(message)};
const extract=(file,start,end)=>{const source=fs.readFileSync(file,'utf8');const from=source.indexOf(start)+start.length;const to=source.indexOf(end,from);if(from<start.length||to<0)fail(`extract ${file}`);return JSON.parse(source.slice(from,to));};
const words=(value)=>value.match(/[A-Za-z0-9][A-Za-z0-9'-]*/g)||[];
const shingles=(value)=>{const tokens=words(value.toLowerCase());const out=new Set();for(let i=0;i+4<tokens.length;i++)out.add(tokens.slice(i,i+5).join(' '));return out;};
const maximumOverlap=(rows)=>{let best={score:0,pair:[]};for(let i=0;i<rows.length;i++)for(let j=i+1;j<rows.length;j++){const a=shingles(rows[i].text),b=shingles(rows[j].text);let n=0;for(const x of a)if(b.has(x))n++;const score=n/Math.min(a.size,b.size);if(score>best.score)best={score,pair:[rows[i].slug,rows[j].slug]};}return best;};
const blog=extract('app/october-8-blog.tsx','export const october8BlogPosts=',' as const;\nexport type');
const research=extract('app/october-8-research.ts','export const october8ResearchPosts = ',' satisfies ResearchPost[];');
const blogManifest=JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-10-08/blog.json','utf8'));
const researchManifest=JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-10-08/research.json','utf8'));
if(blog.length!==12||blogManifest.actualCount!==12||blogManifest.requiredCount!==12)fail('blog exact count');
if(research.length!==5||researchManifest.actualCount!==5||researchManifest.requiredCount!==5)fail('research exact count');
for(const manifest of [blogManifest,researchManifest])if(manifest.publicationDate!=='2026-10-08'||manifest.cycleLabel!=='2026-10-08')fail('manifest date');
const slugs=[...blog,...research].map(x=>x.slug);if(new Set(slugs).size!==17)fail('duplicate batch slug');
const blogRows=[];
for(const p of blog){const text=[...p.introduction,...p.sections.flatMap(s=>s.paragraphs)].join(' ');const count=words(text).length;if(p.published!=='2026-10-08'||count<900)fail(`blog date/words ${p.slug} ${count}`);if(!p.source.startsWith('https://')||!p.service.startsWith('/services'))fail(`blog links ${p.slug}`);blogRows.push({slug:p.slug,text});}
const researchRows=[];
for(const p of research){const text=p.sections.map(s=>s.body).join(' ');const count=words(text).length;if(p.published!=='2026-10-08'||count<1200)fail(`research date/words ${p.slug} ${count}`);if(p.sources.length<4||p.sources.some(s=>!s.url.startsWith('https://')))fail(`research sources ${p.slug}`);if(p.internalLinks.length<3||p.image.src[0]!=='/')fail(`research links/image ${p.slug}`);researchRows.push({slug:p.slug,text});}
const blogOverlap=maximumOverlap(blogRows),researchOverlap=maximumOverlap(researchRows);if(blogOverlap.score>=0.5)fail('blog originality');if(researchOverlap.score>=0.5)fail('research originality');
for(const image of new Set([...blog.map(p=>p.image.src),...research.map(p=>p.image.src)])){try{execFileSync('git',['cat-file','-e',`HEAD:public${image}`]);}catch{fail(`missing tracked image ${image}`)}}
const route=fs.readFileSync('app/blog/[slug]/page.tsx','utf8'),listing=fs.readFileSync('app/blog/blog-listing.tsx','utf8'),fleet=fs.readFileSync('app/fleet-content.ts','utf8'),researchRoute=fs.readFileSync('app/research/[slug]/page.tsx','utf8'),researchIndex=fs.readFileSync('app/research/page.tsx','utf8'),sitemap=fs.readFileSync('app/sitemap.xml/route.ts','utf8');
for(const token of ['october8BlogPosts','october8BlogMetadata','October8BlogArticle'])if(!route.includes(token))fail(`blog route ${token}`);
if(!listing.includes('...october8BlogPosts.map')||!listing.includes('Published ${new Intl.DateTimeFormat'))fail('blog listing registry/date');
if(!fleet.includes('...october8ResearchPosts')||!sitemap.includes('...october8BlogPosts.map'))fail('research/sitemap registry');
if(!researchRoute.includes('formatPublicDate(post.published)')||!researchIndex.includes('Published {p.published}'))fail('research visible date');
let tree='';try{tree=execFileSync('git',['grep','-n','-E',slugs.join('|'),'HEAD','--','app'],{encoding:'utf8'}).trim();}catch(error){if(error.status!==1)throw error;}if(tree)fail('historical slug collision');
const report={status:'PASS',date:'2026-10-08',blog:{count:12,minimumWords:Math.min(...blogManifest.entries.map(e=>e.bodyWords)),maximumOverlap:blogOverlap},research:{count:5,minimumWords:Math.min(...researchManifest.entries.map(e=>e.bodyWords)),maximumOverlap:researchOverlap},visibleDates:{blogDetail:true,blogListing:true,researchDetail:true,researchListing:true},sha256:crypto.createHash('sha256').update(JSON.stringify({blog,research})).digest('hex')};
fs.writeFileSync('.paperclip/daily-content/2026-10-08/validation.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(report,null,2));
