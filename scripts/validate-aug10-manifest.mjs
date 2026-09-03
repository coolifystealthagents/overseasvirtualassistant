import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const target = '2026-08-10';
const manifestPath = '.paperclip/aug10-2026/blog.json';
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const fail = (message) => { throw new Error(message); };
if (manifest.schemaVersion !== 1 || manifest.contract !== 'sites3-aug10-public-date-v6' || manifest.family !== 'blog') fail('manifest identity mismatch');
if (manifest.entries.length < manifest.minimum || manifest.entries.length < 22) fail('accepted count below minimum');
if (new Set(manifest.entries.map((entry) => entry.slug)).size !== manifest.entries.length) fail('duplicate slug');
const page = fs.readFileSync('app/blog/[slug]/page.tsx', 'utf8');
const data = fs.readFileSync('app/data.ts', 'utf8');
const research = fs.readFileSync('app/research-content.ts', 'utf8');
const sitemap = fs.readFileSync('app/sitemap.xml/route.ts', 'utf8');
if (!/datePublished:\s*post\.updated\b/.test(page) || !/Updated\s*<time\s+dateTime=\{post\.updated\}/.test(page)) fail('rendered date wiring missing');
if (!data.includes('blogPosts.sort((a, b) => b.updated.localeCompare(a.updated))')) fail('index sort missing');
if (!/researchPosts:\s*ResearchPost\[\]\s*=\s*\[.*?\]\.sort\(\(a,\s*b\)\s*=>\s*b\.published\.localeCompare\(a\.published\)(?:\s*\|\|\s*a\.slug\.localeCompare\(b\.slug\))?\)/s.test(research)) fail('research index sort missing');
if (!sitemap.includes('blogPosts.map(p=>`/blog/${p.slug}`')) fail('sitemap eligibility wiring missing');
for (const entry of manifest.entries) {
  if (!/^\/blog\/[a-z0-9-]+$/.test(entry.route) || entry.route !== `/blog/${entry.slug}`) fail(`bad route: ${entry.slug}`);
  if (entry.sourceDate !== target || entry.renderedDate !== target) fail(`bad date: ${entry.slug}`);
  if (entry.sourcePath !== 'app/daily-content.ts' || entry.sourceDateField !== 'updated') fail(`bad source record: ${entry.slug}`);
  if (!entry.renderedDateFields.includes('datePublished')) fail(`missing JSON-LD date: ${entry.slug}`);
  const source = fs.readFileSync(entry.sourcePath, 'utf8');
  if (!source.includes(`'${entry.slug}',`) || !source.includes("updated: '2026-08-10'")) fail(`source record/date missing: ${entry.slug}`);
  const before = execFileSync('git', ['show', `${entry.introducedByCommit}^:${entry.sourcePath}`], { encoding: 'utf8' });
  const after = execFileSync('git', ['show', `${entry.introducedByCommit}:${entry.sourcePath}`], { encoding: 'utf8' });
  if (before.includes(`'${entry.slug}'`)) fail(`slug existed before introducing commit: ${entry.slug}`);
  if (!after.includes(`'${entry.slug}'`) || !after.includes(`updated: '${target}'`)) fail(`slug/date absent at introducing commit: ${entry.slug}`);
  const builtArticle = `.next/server/app/blog/${entry.slug}.html`;
  if (!fs.existsSync(builtArticle)) fail(`built route missing: ${entry.slug}`);
  const html = fs.readFileSync(builtArticle, 'utf8');
  if (!html.includes(`datePublished":"${target}"`)) fail(`rendered JSON-LD date missing: ${entry.slug}`);
  if (!html.includes('Updated ') || !html.includes(target) || !html.includes(`canonical\" href=\"https://overseasvirtualassistant.com${entry.route}`)) fail(`rendered visible/canonical date missing: ${entry.slug}`);
}
console.log(`PASS ${manifest.entries.length} manifest entries; source, rendered, canonical, sitemap, and index-order checks passed`);
