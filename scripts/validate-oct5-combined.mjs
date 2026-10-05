import fs from 'node:fs';
import crypto from 'node:crypto';
import sharp from 'sharp';

const fail = (message) => { throw new Error(message); };
const root = '.paperclip/daily-content/2026-10-05';
const blogManifest = JSON.parse(fs.readFileSync(`${root}/blog.json`, 'utf8'));
const researchManifest = JSON.parse(fs.readFileSync(`${root}/research.json`, 'utf8'));
const inventory = JSON.parse(fs.readFileSync(`${root}/blog-draft-inventory.json`, 'utf8'));
const extract = (file, start, end) => {
  const source = fs.readFileSync(file, 'utf8');
  const from = source.indexOf(start) + start.length;
  const to = source.indexOf(end, from);
  if (from < start.length || to < 0) fail(`generated-data extraction failed: ${file}`);
  return JSON.parse(source.slice(from, to));
};
const blogPosts = extract('app/october-5-blog.tsx', 'export const october5BlogPosts=', ';\nexport type');
const researchPosts = extract('app/october-5-research.ts', 'export const october5ResearchPosts = ', ' satisfies ResearchPost[];');
const normalize = (value) => value.replace(/\s+/g, ' ').trim();
const visible = (value) => normalize(value).replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1');
const words = (value) => visible(value).match(/[A-Za-z0-9][A-Za-z0-9'-]*/g) || [];
const hash = (value) => crypto.createHash('sha256').update(JSON.stringify(value)).digest('hex');
const shingleSet = (value) => { const tokens = words(value); const set = new Set(); for (let i = 0; i + 4 < tokens.length; i += 1) set.add(tokens.slice(i, i + 5).join(' ')); return set; };

if (blogPosts.length !== 12 || blogManifest.actualCount !== 12 || blogManifest.entries.length !== 12) fail('blog exact-count gate');
if (researchPosts.length !== 5 || researchManifest.entries.length !== 5) fail('research exact-count gate');
for (const manifest of [blogManifest, researchManifest]) {
  if (manifest.cycleLabel !== '2026-10-05' || manifest.timezone !== 'Asia/Jakarta' || manifest.publicationDate !== '2026-10-06') fail('date identity gate');
  if (manifest.deployment.submitted !== false || manifest.deployment.resourceUuid !== 'u3337glzo8zr4zjth9fapcpw') fail('deployment boundary gate');
}

const blogRoute = fs.readFileSync('app/blog/[slug]/page.tsx', 'utf8');
const blogIndex = fs.readFileSync('app/blog/blog-listing.tsx', 'utf8');
const sitemap = fs.readFileSync('app/sitemap.xml/route.ts', 'utf8');
if (!blogRoute.includes('october5BlogPosts') || !blogRoute.includes('october5BlogMetadata') || !blogRoute.includes('October5BlogArticle')) fail('blog route registry gate');
if (!blogIndex.includes('...october5BlogPosts.map')) fail('blog index registry gate');
if (!sitemap.includes('...october5BlogPosts.map')) fail('sitemap registry gate');

const exactParagraphs = new Set();
const blogSets = [];
for (const topic of inventory.topics) {
  const post = blogPosts.find((candidate) => candidate.slug === topic.slug);
  const entry = blogManifest.entries.find((candidate) => candidate.slug === topic.slug);
  if (!post || !entry) fail(`missing blog record: ${topic.slug}`);
  const markdown = fs.readFileSync(topic.sourcePath, 'utf8').trim();
  const chunks = markdown.split(/^## /m);
  const opening = chunks.shift().trim().split(/\n\s*\n/);
  const title = opening.shift().replace(/^# /, '').trim();
  const sourceIntroduction = opening.map(normalize).filter(Boolean);
  const sourceSections = chunks.map((chunk) => { const [heading, ...rest] = chunk.split('\n'); return { heading: heading.trim(), paragraphs: rest.join('\n').trim().split(/\n\s*\n/).map(normalize).filter(Boolean) }; });
  const sourceParagraphs = [...sourceIntroduction, ...sourceSections.flatMap((section) => section.paragraphs)];
  const renderedParagraphs = [...post.introduction, ...post.sections.flatMap((section) => section.paragraphs)];
  if (title !== post.title || JSON.stringify(sourceSections.map((section) => section.heading)) !== JSON.stringify(post.sections.map((section) => section.heading))) fail(`blog title/section parity: ${post.slug}`);
  if (JSON.stringify(sourceParagraphs) !== JSON.stringify(renderedParagraphs)) fail(`ordered paragraph parity: ${post.slug}`);
  const visibleParagraphs = sourceParagraphs.map(visible);
  if (hash(visibleParagraphs) !== entry.orderedParagraphHash) fail(`ordered paragraph hash: ${post.slug}`);
  const count = words(sourceParagraphs.join(' ')).length;
  if (count < 900 || count !== entry.bodyWords || post.published !== '2026-10-06') fail(`blog body/date gate: ${post.slug}`);
  if (!post.service.startsWith('/services/') || !post.source.startsWith('https://') || !post.image.src.startsWith('/images/')) fail(`blog link/image gate: ${post.slug}`);
  for (const paragraph of visibleParagraphs) { const normalized = paragraph.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim(); if (exactParagraphs.has(normalized)) fail(`repeated blog paragraph: ${post.slug}`); exactParagraphs.add(normalized); }
  blogSets.push([post.slug, shingleSet(visibleParagraphs.join(' '))]);
}

let blogMaximum = 0;
let blogPair = '';
for (let i = 0; i < blogSets.length; i += 1) for (let j = i + 1; j < blogSets.length; j += 1) {
  let intersection = 0;
  for (const value of blogSets[i][1]) if (blogSets[j][1].has(value)) intersection += 1;
  const overlap = intersection / Math.min(blogSets[i][1].size, blogSets[j][1].size);
  if (overlap > blogMaximum) { blogMaximum = overlap; blogPair = `${blogSets[i][0]} / ${blogSets[j][0]}`; }
}
if (blogMaximum >= 0.5) fail('blog originality threshold');

for (const post of researchPosts) {
  const entry = researchManifest.entries.find((candidate) => candidate.slug === post.slug);
  const draft = fs.readFileSync(`${root}/drafts/${post.slug}.md`, 'utf8');
  const [main] = draft.split('## Sources checked');
  const chunks = main.split(/^## /m);
  const title = chunks.shift().replace(/^# /, '').trim();
  const bodies = chunks.map((chunk) => chunk.slice(chunk.indexOf('\n')).trim().replace(/\n+/g, ' '));
  if (!entry || title !== post.title || JSON.stringify(bodies) !== JSON.stringify(post.sections.map((section) => section.body))) fail(`research ordered body parity: ${post.slug}`);
  if (words(bodies.join(' ')).length !== entry.bodyWords || post.published !== '2026-10-06') fail(`research body/date gate: ${post.slug}`);
}

const imagePaths = new Set([...blogPosts.map((post) => post.image.src), ...researchPosts.map((post) => post.image.src)]);
for (const source of imagePaths) {
  const file = `public${source}`;
  if (!fs.existsSync(file)) fail(`missing image: ${source}`);
  const buffer = fs.readFileSync(file);
  const metadata = await sharp(buffer).metadata();
  if (!metadata.format || !metadata.width || !metadata.height) fail(`image decode gate: ${source}`);
}

console.log(`PASS combined source/render gate: blog 12, research 5; Blog max five-word overlap ${blogMaximum.toFixed(4)} (${blogPair}); ordered paragraph parity, titles, dates, registries, hashes, links, and ${imagePaths.size} decoded images passed.`);
