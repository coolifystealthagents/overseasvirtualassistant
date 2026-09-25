import fs from 'node:fs';
const fail=(m)=>{throw new Error(m)};
const manifest=JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-09-26/combined.json','utf8'));
const blog=fs.readFileSync('app/september-26-blog.tsx','utf8');
const research=fs.readFileSync('app/september-26-research.ts','utf8');
const route=fs.readFileSync('app/blog/[slug]/page.tsx','utf8');
const listing=fs.readFileSync('app/blog/blog-listing.tsx','utf8');
const sitemap=fs.readFileSync('app/sitemap.xml/route.ts','utf8');
if(manifest.branch!=='main'||manifest.timezone!=='Asia/Jakarta'||manifest.publicationDate!=='2026-09-26')fail('release identity mismatch');
if(manifest.entries.filter(e=>e.family==='blog').length!==12||manifest.entries.filter(e=>e.family==='research').length!==5)fail('expected exact 12+5');
if(new Set(manifest.entries.map(e=>`${e.family}/${e.slug}`)).size!==17)fail('duplicate manifest route');
for(const e of manifest.entries){const source=e.family==='blog'?blog:research;if(!source.includes(e.slug))fail(`missing source ${e.slug}`);if(!/^[a-f0-9]{64}$/.test(e.contentHash))fail(`bad hash ${e.slug}`)}
for(const e of manifest.entries.filter(e=>e.family==='blog')){if(!route.includes('september26BlogPosts')||!listing.includes('september26BlogPosts')||!sitemap.includes('september26BlogPosts'))fail('blog route integration missing')}
if(!blog.includes("datePublished:published")||!blog.includes('September 26, 2026'))fail('blog publication date mismatch');
if(!research.includes("published = '2026-09-26'"))fail('research publication date mismatch');
console.log('PASS combined manifest: 12 Blog + 5 Research; source, date, route, listing, sitemap, and hash fields verified');
