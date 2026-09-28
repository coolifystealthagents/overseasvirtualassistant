import fs from 'node:fs';
import crypto from 'node:crypto';
const source=fs.readFileSync('app/september-28-blog.tsx','utf8');
const start=source.indexOf('const rows:Post[]=[')+'const rows:Post[]='.length;
const end=source.indexOf('\n];',start)+2;
const rows=Function(`return (${source.slice(start,end)})`)();
const oldFiles=fs.readdirSync('app').filter(x=>/^september-.*-blog\.tsx$/.test(x)&&x!=='september-28-blog.tsx');
const oldText=oldFiles.map(x=>fs.readFileSync(`app/${x}`,'utf8')).join('\n');
const clean=s=>s.toLowerCase().replace(/[^a-z0-9\s]/g,' ').split(/\s+/).filter(Boolean);
const followStart=source.indexOf('const follow=[')+'const follow='.length;
const followEnd=source.indexOf('\n ][i];',followStart)+3;
const follow=Function(`return (${source.slice(followStart,followEnd)})`)();
const keys=['goal','scenario','records','rules','exceptions','review','measure','handoff','access','expansion'];
const lead=['For this lane, the practical objective is to','Test the workflow with','The working record should contain','Document','Pause and route any case involving','Quality control should','Track','At the end of the shift, return','Configure access around','The next safe growth step is to'];
const render=p=>{
 const primary=keys.map((key,i)=>`${lead[i]} ${p[key]}. ${follow[i]}`).join(' ');
 const walkthrough=`Consider a concrete ${p.role} shift built around this result: ${p.goal}. The practice packet uses ${p.scenario}. For the first item, the assistant records ${p.records}. The assistant then applies only these written controls: ${p.rules}. If the item instead involves ${p.exceptions}, work stops at a documented escalation. The reviewer will ${p.review}. The shift report therefore measures ${p.measure}. Before signing off, the assistant produces ${p.handoff}. The technical setup is limited to ${p.access}. After the owner has reviewed the evidence, the team may ${p.expansion}. This sequence connects intake, processing, review, and growth to one visible example rather than treating the role description as proof that the system works.`;
 const firstWeek=`On day one, explain why the lane exists: ${p.goal}. On day two, process part of ${p.scenario}, pausing after each record so the owner can compare source and return. On day three, require the full evidence set ${p.records} and correct the instructions, not just the latest output. On day four, test the boundary by inserting cases about ${p.exceptions}; a prompt, supported escalation is the intended result. On day five, the owner should ${p.review}. The retrospective uses ${p.measure}, with counts and categories stated plainly. Preserve continuity across Philippines and owner working hours through ${p.handoff}. Confirm that permissions still match ${p.access}. Only then should the owner consider whether to ${p.expansion}. A week structured this way gives both people specific evidence about readiness, workload, ambiguity, and the next smallest improvement.`;
 return `${p.description} ${primary} ${walkthrough} ${firstWeek}`;
};
const results=rows.map(p=>{const words=clean(render(p));return {slug:p.slug,wordCount:words.length,words,contentHash:crypto.createHash('sha256').update(JSON.stringify(p)).digest('hex')};});
const shingles=words=>new Set(words.slice(0,-4).map((_,i)=>words.slice(i,i+5).join(' ')));
let max={score:0,pair:[]};
for(let i=0;i<results.length;i++)for(let j=i+1;j<results.length;j++){const a=shingles(results[i].words),b=shingles(results[j].words);let both=0;for(const x of a)if(b.has(x))both++;const score=both/(a.size+b.size-both);if(score>max.score)max={score,pair:[results[i].slug,results[j].slug]};}
const errors=[];
if(rows.length!==12)errors.push(`expected 12 posts, got ${rows.length}`);
if(new Set(rows.map(x=>x.slug)).size!==12)errors.push('new batch contains duplicate slugs');
for(const p of rows){if(oldText.includes(`'${p.slug}'`)||oldText.includes(`"${p.slug}"`))errors.push(`historical duplicate slug: ${p.slug}`);}
for(const r of results)if(r.wordCount<900)errors.push(`${r.slug}: ${r.wordCount} words`);
if(max.score>=0.5)errors.push(`maximum five-word-shingle Jaccard ${max.score.toFixed(4)} >= 0.5`);
for(const needle of ['findSeptember28BlogPost','september28BlogPosts'])if(!fs.readFileSync('app/blog/[slug]/page.tsx','utf8').includes(needle))errors.push(`route integration missing ${needle}`);
if(!fs.readFileSync('app/sitemap.xml/route.ts','utf8').includes('september28BlogPosts'))errors.push('sitemap integration missing');
const report={family:'blog',run:'OVE-67',date:'2026-09-28',timezone:'Asia/Jakarta',required:12,actual:rows.length,wordCounts:Object.fromEntries(results.map(x=>[x.slug,x.wordCount])),maximumFiveWordShingleJaccard:{score:Number(max.score.toFixed(6)),pair:max.pair},entries:results.map(({slug,contentHash})=>({slug,contentHash,liveUrl:`https://overseasvirtualassistant.com/blog/${slug}`})),errors};
fs.mkdirSync('.paperclip/daily-content/2026-09-28',{recursive:true});
fs.writeFileSync('.paperclip/daily-content/2026-09-28/blog.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(report,null,2));
if(errors.length)process.exit(1);
