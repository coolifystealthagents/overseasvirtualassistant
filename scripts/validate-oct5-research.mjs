import fs from 'node:fs';
import crypto from 'node:crypto';
import Module from 'node:module';
import ts from 'typescript';

const fail = (message) => { throw new Error(message); };
const manifest = JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-10-05/research.json', 'utf8'));
const source = fs.readFileSync('app/october-5-research.ts', 'utf8');
const output = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
const module = new Module('oct5');
module.filename = 'oct5.js';
module.paths = Module._nodeModulePaths(process.cwd());
module._compile(output, module.filename);
const posts = module.exports.october5ResearchPosts;
const words = (text) => text.toLowerCase().match(/[a-z0-9][a-z0-9'-]*/g) || [];
const shingles = (text) => { const tokens = words(text); const set = new Set(); for (let i = 0; i + 4 < tokens.length; i += 1) set.add(tokens.slice(i, i + 5).join(' ')); return set; };

if (posts.length !== 5 || manifest.entries.length !== 5 || manifest.requiredCount !== 5 || manifest.handoffCount !== 5) fail('exact-count gate failed');
if (manifest.baseSha !== '621947f84a4ec633e259e2c408009542cf5ab66c' || manifest.status !== 'local-handoff-only' || manifest.deployment.submitted !== false) fail('handoff boundary failed');
if (manifest.timezone !== 'Asia/Jakarta' || manifest.publicationDateStatus !== 'provisional-integrator-must-reconcile-to-actual-first-publication-date') fail('date reconciliation gate failed');
if (!fs.existsSync('public/images/remote-onboarding.jpg')) fail('shared existing image missing');
const priorFiles = fs.readdirSync('app').filter((name) => name.includes('research') && name.endsWith('.ts') && name !== 'october-5-research.ts');
const prior = priorFiles.map((name) => fs.readFileSync(`app/${name}`, 'utf8')).join('\n');
const seenTitles = new Set();
const seenParagraphs = new Set();
const sets = [];
for (const post of posts) {
  const entry = manifest.entries.find((candidate) => candidate.slug === post.slug);
  if (!entry || prior.includes(`'${post.slug}'`) || prior.includes(`"${post.slug}"`)) fail(`missing or duplicate slug: ${post.slug}`);
  if (seenTitles.has(post.title)) fail(`duplicate title: ${post.title}`);
  seenTitles.add(post.title);
  const body = post.sections.map((section) => section.body).join(' ');
  const count = words(body).length;
  if (count < 1200 || count !== entry.bodyWords) fail(`body word gate: ${post.slug}`);
  if (crypto.createHash('sha256').update(JSON.stringify(post)).digest('hex') !== entry.contentHash) fail(`content hash gate: ${post.slug}`);
  if (post.sources.length < 4 || post.internalLinks.some((link) => !link.startsWith('/'))) fail(`source/internal-link gate: ${post.slug}`);
  if (post.published !== manifest.publicationDate) fail(`provisional date mismatch: ${post.slug}`);
  if (post.sections.length < 6 || new Set(post.sections.map((section) => section.heading)).size !== post.sections.length) fail(`topic structure gate: ${post.slug}`);
  for (const section of post.sections) {
    const normalized = section.body.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
    if (seenParagraphs.has(normalized)) fail(`repeated substantive paragraph: ${post.slug}`);
    seenParagraphs.add(normalized);
  }
  sets.push([post.slug, shingles(body)]);
}
let maximum = 0;
let maximumPair = '';
for (let i = 0; i < sets.length; i += 1) for (let j = i + 1; j < sets.length; j += 1) {
  let intersection = 0;
  for (const shingle of sets[i][1]) if (sets[j][1].has(shingle)) intersection += 1;
  const overlap = intersection / Math.min(sets[i][1].size, sets[j][1].size);
  if (overlap > maximum) { maximum = overlap; maximumPair = `${sets[i][0]} / ${sets[j][0]}`; }
}
if (maximum >= 0.5) fail(`five-word-shingle overlap gate: ${maximum}`);
console.log(`PASS exact 5; body words ${manifest.entries.map((entry) => entry.bodyWords).join(', ')}; maximum pairwise five-word-shingle overlap ${maximum.toFixed(4)} (${maximumPair}); unique paragraphs and section sequences; prior-slug, source, internal-link, content-hash, image, and provisional-date gates passed.`);
