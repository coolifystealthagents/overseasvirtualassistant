import fs from 'node:fs';

const root = '.paperclip/daily-content/2026-10-05';
const blog = JSON.parse(fs.readFileSync(`${root}/blog.json`, 'utf8'));
const research = JSON.parse(fs.readFileSync(`${root}/research.json`, 'utf8'));
const validatedContentSha = process.argv[2];
if (!/^[0-9a-f]{40}$/.test(validatedContentSha || '')) throw new Error('full validated content SHA required');
const entries = [...blog.entries, ...research.entries].map((entry) => ({ ...entry, publicationDate: '2026-10-06', commitSha: validatedContentSha, deploymentEvidence: 'pending-browser-operator-exact-SHA-deployment', verificationTime: null }));
const report = {
  schemaVersion: 1,
  cycleLabel: '2026-10-05',
  status: 'ready-for-sole-push',
  repository: 'coolifystealthagents/overseasvirtualassistant',
  branch: 'ove-71-blog-2026-10-05',
  productionBranch: 'main',
  baselineSha: '621947f84a4ec633e259e2c408009542cf5ab66c',
  validatedContentSha,
  timezone: 'Asia/Jakarta',
  publicationDate: '2026-10-06',
  counts: { blog: 12, research: 5, localHttpVerified: 17, publicVerified: 0 },
  validation: { lockedInstall: 'passed', dependencyAudit: 'zero-vulnerabilities', typescript: 'passed', tests: 'no-script-configured', cleanProductionBuild: 'passed-670-pages', localRoutes: 'passed-17-of-17', orderedSourceRenderParagraphParity: 'passed-17-of-17', titlesCanonicalsDates: 'passed-17-of-17', indexesAndSitemap: 'passed-17-of-17', imageFileDecode: 'passed-2-of-2', imageHttpMimeSignature: 'passed-2-of-2', authoritativeSourceHttp: 'passed-after-one-cisa-repair', originalityQualitative: 'passed-no-repeated-paragraphs-section-sequences-or-worked-examples' },
  deployment: { resourceUuid: 'u3337glzo8zr4zjth9fapcpw', owner: 'browser operator', submitted: false },
  entries,
};
fs.writeFileSync(`${root}/combined-ready.json`, `${JSON.stringify(report, null, 2)}\n`);
