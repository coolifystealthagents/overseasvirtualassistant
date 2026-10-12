import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
const root=path.resolve(import.meta.dirname,'../..');
const errors=[]; const ok=(v,m)=>{if(!v)errors.push(m)};
const read=(p)=>fs.readFileSync(path.join(root,p),'utf8');
const extract=(text,start,end)=>JSON.parse(text.split(start)[1].split(end)[0]);
const blogs=extract(read('app/october-12-blog.tsx'),'export const october12BlogPosts=',' as const;');
const studies=extract(read('app/october-12-research.ts'),'export const october12ResearchPosts=',' satisfies ResearchPost[];');
const manifest=JSON.parse(read('publishing/2026-10-12/manifest.json'));
ok(blogs.length===12,`expected 12 Blog, got ${blogs.length}`); ok(studies.length===5,`expected 5 Research, got ${studies.length}`);
const all=[...blogs,...studies];
ok(new Set(all.map(x=>x.slug)).size===17,'slugs must be unique'); ok(new Set(all.map(x=>x.title)).size===17,'titles must be unique');
for(const item of all){ok(item.published==='2026-10-12',`${item.slug}: wrong date`);ok(!/2026|october\s+12|10[-/]12/i.test(item.title),`${item.slug}: date in title`);ok(item.image.alt===item.title,`${item.slug}: image alt must equal exact title`)}
for(const item of blogs){ok(item.introduction.length>=3,`${item.slug}: shallow introduction`);ok(item.sections.length>=8,`${item.slug}: fewer than 8 sections`);ok(item.faqs.length>=2,`${item.slug}: missing FAQs`);ok(item.relatedSlugs.length>=2,`${item.slug}: missing related guides`);}
for(const item of studies){ok(item.sources.length===10,`${item.slug}: expected exactly 10 sources`);ok(item.sections.length>=10,`${item.slug}: fewer than 10 analyses`);ok(item.sources.every(s=>s.url.startsWith('https://')),`${item.slug}: non-HTTPS source`);ok(item.relatedResearch.length>=2,`${item.slug}: missing related research`);}
const prose=[]; for(const b of blogs){prose.push(...b.introduction,...b.sections.flatMap(s=>s.paragraphs))} for(const r of studies)prose.push(...r.sections.map(s=>s.body));
const norm=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim(); const seen=new Set(); for(const p of prose){const n=norm(p);ok(n.split(' ').length>=35,'substantive paragraph too short');ok(!seen.has(n),'duplicate substantive paragraph');seen.add(n)}
const appFiles=[]; function walk(d){for(const e of fs.readdirSync(d,{withFileTypes:true})){const p=path.join(d,e.name);if(e.isDirectory())walk(p);else if(/\.(ts|tsx|json)$/.test(e.name)&&!p.endsWith('october-12-blog.tsx')&&!p.endsWith('october-12-research.ts'))appFiles.push(p)}} walk(path.join(root,'app'));
const existing=appFiles.map(p=>fs.readFileSync(p,'utf8')).join('\n'); for(const item of all){ok(!existing.includes(`"${item.slug}"`)&&!existing.includes(`'${item.slug}'`),`${item.slug}: existing slug collision`);ok(!existing.includes(item.title),`${item.slug}: existing title collision`)}
const route=read('app/blog/[slug]/page.tsx'), listing=read('app/blog/blog-listing.tsx'), fleet=read('app/fleet-content.ts'), sitemap=read('app/sitemap.xml/route.ts'), researchRoute=read('app/research/[slug]/page.tsx');
for(const [text,needle,label] of [[route,'october12BlogPosts','Blog static params'],[route,'october12BlogMetadata','Blog metadata'],[route,'October12BlogArticle','Blog renderer'],[listing,'october12BlogPosts','Blog index'],[sitemap,'october12BlogPosts','sitemap'],[fleet,'october12ResearchPosts','Research registry']])ok(text.includes(needle),`${label}: missing registration`);
ok(researchRoute.includes('Published: <time dateTime={post.published}>'),'Research route lacks visible Published date');ok(sitemap.includes('...researchPosts.map'),'Research sitemap missing');
function dims(buf){const i=buf.indexOf(Buffer.from([0x9d,0x01,0x2a]));if(i<0)return [];return [buf.readUInt16LE(i+3)&0x3fff,buf.readUInt16LE(i+5)&0x3fff]}
const hashes=new Set(); for(const item of all){const p=path.join(root,'public',item.image.src.slice(1));ok(fs.existsSync(p),`${item.slug}: image missing`);if(fs.existsSync(p)){const b=fs.readFileSync(p);const [w,h]=dims(b);ok(w===1200&&h===630,`${item.slug}: expected 1200x630, got ${w}x${h}`);hashes.add(crypto.createHash('sha256').update(b).digest('hex'))}}ok(hashes.size===17,`expected 17 unique images, got ${hashes.size}`);
ok(manifest.blog.length===12&&manifest.research.length===5,'manifest counts wrong');ok(manifest.publicationDate==='2026-10-12','manifest date wrong');
if(errors.length){console.error(errors.map(e=>`ERROR: ${e}`).join('\n'));process.exit(1)}
console.log(`PASS: ${blogs.length} Blog + ${studies.length} Research; ${hashes.size} unique 1200x630 WebP thumbnails; routes, indexes, sitemap, dates, sources, depth, collisions, and prose uniqueness verified.`);
