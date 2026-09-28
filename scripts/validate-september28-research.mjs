import fs from 'node:fs';
import crypto from 'node:crypto';
import Module from 'node:module';
import ts from 'typescript';

const fail = (message) => { throw new Error(message); };
const manifest = JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-09-28/research.json', 'utf8'));
const source = fs.readFileSync('app/september-28-research.ts', 'utf8');
const baselineFiles = fs.readdirSync('app').filter((name) => name.includes('research') && name.endsWith('.ts') && name !== 'september-28-research.ts');
const baseline = baselineFiles.map((name) => fs.readFileSync(`app/${name}`, 'utf8')).join('\n');
const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
const module = new Module('september-28-research');
module.filename = 'september-28-research.js';
module.paths = Module._nodeModulePaths(process.cwd());
module._compile(js, module.filename);
const posts = module.exports.september28ResearchPosts;
const words = (text) => text.match(/[A-Za-z0-9][A-Za-z0-9’'\-]*/g) || [];
const shingles = (text) => { const tokens = words(text.toLowerCase()); const set = new Set(); for (let i = 0; i + 4 < tokens.length; i += 1) set.add(tokens.slice(i, i + 5).join(' ')); return set; };

if (manifest.requiredCount !== 5 || posts.length !== 5 || manifest.entries.length !== 5) fail('expected exactly five Research entries');
if (manifest.baseSha !== 'b5b37dd2ac97ecd49cecbfea6869dc5871c51a1b' || manifest.timezone !== 'Asia/Jakarta') fail('release identity mismatch');
if (!source.includes("const published = '2026-09-28'") || !source.includes('September 28, 2026')) fail('planned date mismatch');
if (!fs.readFileSync('app/fleet-content.ts', 'utf8').includes('...september28ResearchPosts')) fail('Research index integration missing');
if (!fs.existsSync('public/images/remote-onboarding.jpg')) fail('shared image missing');
const sets = [];
for (const post of posts) {
  const entry = manifest.entries.find((item) => item.slug === post.slug);
  if (!entry) fail(`manifest missing ${post.slug}`);
  if (baseline.includes(`slug: '${post.slug}'`) || baseline.includes(`slug:'${post.slug}'`)) fail(`slug already exists: ${post.slug}`);
  const body = post.sections.map((section) => section.body).join(' ');
  const count = words(body).length;
  if (count < 1200 || entry.bodyWords !== count) fail(`body depth mismatch ${post.slug}: ${count}`);
  const hash = crypto.createHash('sha256').update(JSON.stringify(post)).digest('hex');
  if (hash !== entry.contentHash) fail(`content hash mismatch ${post.slug}`);
  if (post.published !== '2026-09-28' || post.sources.length < 4) fail(`date/source failure ${post.slug}`);
  sets.push({ slug: post.slug, set: shingles(body) });
}
let maximum = 0;
for (let i = 0; i < sets.length; i += 1) for (let j = i + 1; j < sets.length; j += 1) {
  let intersection = 0;
  for (const shingle of sets[i].set) if (sets[j].set.has(shingle)) intersection += 1;
  const score = intersection / (sets[i].set.size + sets[j].set.size - intersection);
  maximum = Math.max(maximum, score);
  if (score >= 0.5) fail(`originality failure ${sets[i].slug} / ${sets[j].slug}: ${score}`);
}
console.log(`PASS September 28 Research: exact 5; body words ${posts.map((post) => words(post.sections.map((section) => section.body).join(' ')).length).join(', ')}; maximum five-word-shingle Jaccard ${maximum.toFixed(4)}.`);
