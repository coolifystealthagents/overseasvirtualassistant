import crypto from 'node:crypto';

const origin = process.env.VALIDATION_ORIGIN || 'http://127.0.0.1:31045';
const expectedDate = '2026-09-02';
const visibleDate = 'September 2, 2026';
const entries = [
  ['blog', 'morning-editorial-capacity-check-for-virtual-assistants'],
  ['blog', 'reader-question-test-for-daily-va-articles'],
  ['blog', 'approved-source-refresh-check-for-va-content'],
  ['blog', 'article-claim-risk-labels-for-remote-va-writers'],
  ['blog', 'virtual-assistant-draft-self-review-routine'],
  ['blog', 'editor-feedback-resolution-log-for-va-articles'],
  ['blog', 'daily-blog-image-selection-from-approved-assets'],
  ['blog', 'virtual-assistant-internal-link-opportunity-review'],
  ['blog', 'daily-article-publish-approval-record'],
  ['blog', 'remote-va-publishing-exception-aging-review'],
  ['blog', 'end-of-shift-content-access-check-for-philippines-vas'],
  ['blog', 'daily-content-routine-improvement-note'],
  ['research', 'research-editorial-capacity-signals-for-daily-publishing'],
  ['research', 'research-claim-risk-routing-in-remote-content-teams'],
  ['research', 'research-version-specific-approval-for-article-releases'],
  ['research', 'research-aging-exceptions-in-article-workflows'],
  ['research', 'research-approved-asset-reuse-in-daily-articles'],
];

const fail = message => { throw new Error(message); };
if (entries.filter(([family]) => family === 'blog').length !== 12) fail('manifest must contain exactly 12 Blog entries');
if (entries.filter(([family]) => family === 'research').length !== 5) fail('manifest must contain exactly 5 Research entries');
if (new Set(entries.map(entry => entry.join('/'))).size !== 17) fail('manifest routes are not unique');

const [blogIndex, researchIndex, sitemap] = await Promise.all(['/blog', '/research', '/sitemap.xml'].map(async path => {
  const response = await fetch(origin + path);
  if (response.status !== 200) fail(`${path} returned ${response.status}`);
  return response.text();
}));

const bodyHashes = new Set();
for (const [family, slug] of entries) {
  const path = `/${family}/${slug}`;
  const canonical = `https://overseasvirtualassistant.com${path}`;
  const response = await fetch(origin + path, { redirect: 'manual' });
  if (response.status !== 200) fail(`${path} returned ${response.status}`);
  const html = await response.text();
  if (!html.includes(visibleDate)) fail(`${path} missing visible date`);
  if (!html.includes(`datePublished\\\":\\\"${expectedDate}`) && !html.includes(`datePublished":"${expectedDate}`)) fail(`${path} missing structured datePublished`);
  if (!html.includes(`rel="canonical" href="${canonical}"`)) fail(`${path} is not self-canonical`);
  if (!(family === 'blog' ? blogIndex : researchIndex).includes(`href="${path}"`)) fail(`${path} missing from family index`);
  if (!sitemap.includes(`<loc>${canonical}</loc>`)) fail(`${path} missing from sitemap`);
  const article = html.match(/<article[\s\S]*?<\/article>/)?.[0];
  if (!article) fail(`${path} missing article body`);
  const hash = crypto.createHash('sha256').update(article).digest('hex');
  if (bodyHashes.has(hash)) fail(`${path} duplicates another rendered article body`);
  bodyHashes.add(hash);
}

console.log(`PASS: ${entries.length} routes (12 Blog + 5 Research); HTTP, visible date, datePublished, canonical, index, sitemap, and unique-body checks passed.`);
