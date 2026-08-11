import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const target = '2026-08-10';
const manifestPath = '.paperclip/aug10-2026/research.json';
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const source = fs.readFileSync('app/research-content.ts', 'utf8');
const page = fs.readFileSync('app/research/[slug]/page.tsx', 'utf8');
const index = fs.readFileSync('app/research/page.tsx', 'utf8');
const sitemap = fs.readFileSync('app/sitemap.xml/route.ts', 'utf8');
const builtIndex = fs.readFileSync('.next/server/app/research.html', 'utf8');
const fail = (message) => { throw new Error(message); };
if (manifest.schemaVersion !== 1 || manifest.contract !== 'sites3-aug10-public-date-v6' || manifest.family !== 'research') fail('manifest identity mismatch');
if (manifest.domain !== 'overseasvirtualassistant.com' || manifest.repository !== 'coolifystealthagents/overseasvirtualassistant' || manifest.branch !== 'main') fail('manifest repository mismatch');
if (manifest.targetDate !== target || manifest.entries.length !== 12 || manifest.entries.length < manifest.minimum) fail('manifest count/date mismatch');
if (new Set(manifest.entries.map((entry) => entry.slug)).size !== 12) fail('duplicate slug');
if (!page.includes('datePublished: post.published') || !page.includes('Philippines staffing research · {post.published}')) fail('rendered date wiring missing');
if (!index.includes('researchPosts.map')) fail('research index wiring missing');
if (!sitemap.includes('researchPosts.map(p=>`/research/${p.slug}`')) fail('sitemap eligibility wiring missing');
for (const entry of manifest.entries) {
  if (!/^\/research\/[a-z0-9-]+$/.test(entry.route) || entry.route !== `/research/${entry.slug}`) fail(`bad route: ${entry.slug}`);
  if (entry.sourcePath !== 'app/research-content.ts' || entry.sourceDateField !== 'topicSpecs[4]') fail(`bad source record: ${entry.slug}`);
  if (entry.sourceDate !== target || entry.renderedDate !== target || !entry.renderedDateFields.includes('datePublished')) fail(`bad date: ${entry.slug}`);
  const record = source.slice(source.indexOf(`['${entry.slug}',`), source.indexOf(`['${entry.slug}',`) + 600);
  if (!record.includes(`'${target}']`)) fail(`source date missing: ${entry.slug}`);
  if (!page.includes('alternates: { canonical: `https://overseasvirtualassistant.com/research/${slug}`')) fail('canonical wiring missing');
  const before = execFileSync('git', ['show', `${entry.introducedByCommit}^:${entry.sourcePath}`], { encoding: 'utf8' });
  const after = execFileSync('git', ['show', `${entry.introducedByCommit}:${entry.sourcePath}`], { encoding: 'utf8' });
  if (before.includes(`'${entry.slug}',`)) fail(`slug existed before introducing commit: ${entry.slug}`);
  if (!after.includes(`'${entry.slug}',`)) fail(`slug absent at introducing commit: ${entry.slug}`);
  const builtArticle = fs.readFileSync(`.next/server/app/research/${entry.slug}.html`, 'utf8');
  if (!builtArticle.includes(target) || !builtArticle.includes('datePublished')) fail(`built route date missing: ${entry.slug}`);
}
const firstOlder = builtIndex.indexOf('role-design-for-philippines-remote-staffing');
const lastAug10 = Math.max(...manifest.entries.map((entry) => builtIndex.indexOf(entry.slug)));
if (firstOlder < 0 || lastAug10 < 0 || lastAug10 > firstOlder) fail('research index is not newest-first');
if (!fs.existsSync('.next/server/app/research')) fail('production build output missing');
console.log(`PASS ${manifest.entries.length} research entries; dates, routes, provenance, canonical, sitemap, and build output verified`);
