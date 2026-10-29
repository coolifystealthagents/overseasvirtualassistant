import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url);
const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

function applicationSource(dir = new URL('../app', import.meta.url)) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir.pathname, entry.name);
    if (entry.isDirectory()) return applicationSource(new URL(`${path}/`, 'file:'));
    return /\.(?:ts|tsx)$/.test(entry.name) ? [readFileSync(path, 'utf8')] : [];
  }).join('\n');
}

function markdownSource(dir = new URL('../content', import.meta.url)) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir.pathname, entry.name);
    if (entry.isDirectory()) return markdownSource(new URL(`${path}/`, 'file:'));
    return entry.name.endsWith('.md') ? [readFileSync(path, 'utf8')] : [];
  }).join('\n');
}

test('customer support is a published shared service with operational depth', () => {
  const fleet = read('app/fleet-content.ts');
  assert.match(fleet, /"slug": "customer-support"/);
  const start = fleet.indexOf('"slug": "customer-support"');
  const end = fleet.indexOf('\n  },\n  {', start);
  const customerSupport = fleet.slice(start, end);
  for (const field of ['"title"', '"summary"', '"tasks"', '"controls"', '"launch"']) {
    assert.ok(customerSupport.includes(field), `${field} missing from customer support registry entry`);
  }
});

test('contact identity uses the approved official team photograph at a sharp rendered size', () => {
  const contact = read('app/contact-us/page.tsx');
  const styles = read('app/v3.css');
  assert.match(contact, /images:\['\/thank-you-hero\.png'\]/);
  assert.match(contact, /className="official-photo" src="\/thank-you-hero\.png" width="619" height="402"/);
  assert.doesNotMatch(contact, /stealth-agents-team\.webp/);
  assert.match(styles, /grid-template-columns:minmax\(0,400px\) 1fr/);
  assert.match(styles, /\.official-photo\{width:100%;max-width:400px;height:auto;object-fit:cover;align-self:center;justify-self:center\}/);
  assert.doesNotMatch(styles, /\.official-photo\{height:\d+px\}/);
});

test('provider comparison discloses affiliation without unsupported proof claims or decorative steps', () => {
  const page = read('app/blog/top-30-overseas-virtual-assistant-companies/page.tsx');
  assert.match(page, /powered by StealthAgents/i);
  assert.match(page, /does not independently verify provider reviews/i);
  for (const unsupported of [
    'stealth-agents-ranked-first',
    '35+ industries',
    '10–15+ year management range',
    'Google and Trustpilot',
    'best-hire-or-money-back',
    '<b>01</b>',
    '<b>02</b>',
    '<b>03</b>',
    '<b>04</b>',
  ]) {
    assert.ok(!page.includes(unsupported), `comparison must not include ${unsupported}`);
  }
  assert.match(page, /href="\/contact-us"/);
});

test('September duplicate aliases permanently redirect and stay out of indexes', () => {
  const config = read('next.config.mjs');
  assert.match(config, /source: '\/blog\/sep14-:slug', destination: '\/blog\/:slug', permanent: true/);
  assert.match(config, /source: '\/research\/sep14-:slug', destination: '\/research\/:slug', permanent: true/);
  assert.doesNotMatch(read('app/blog/blog-listing.tsx'), /september14BlogPosts/);
  assert.doesNotMatch(read('app/fleet-content.ts'), /september14ResearchPosts/);
  assert.doesNotMatch(read('app/sitemap.xml/route.ts'), /september14BlogPosts/);
});

test('sitemap includes the October 28 batch and filters retired aliases', () => {
  const sitemap = read('app/sitemap.xml/route.ts');
  assert.match(sitemap, /october28BlogPosts/);
  assert.match(sitemap, /!p\.slug\.startsWith\("sep14-"\)/);
});

test('confirmed stale internal destinations are absent from application source', () => {
  const source = applicationSource();
  const retired = [
    '/services/legal-assistance',
    '/research/source-quality-in-virtual-assistant-research',
    '/research/travel-expense-documentation-evidence-study',
    '/research/content-quality-sampling-for-remote-va-teams',
    '/research/exception-routing-in-delegated-operations',
    '/research/recruiting-coordination-evidence-study',
    '/research/review-consistency-in-remote-assistant-teams',
    '/research/social-media-publishing-approval-study',
    '/research/source-independence-in-virtual-assistant-research',
  ];
  for (const path of retired) assert.ok(!source.includes(path), `stale destination remains: ${path}`);
});

test('conversion pages keep action before supporting proof in source order', () => {
  const contact = read('app/contact-us/page.tsx');
  assert.ok(contact.indexOf('<StandardContactForm') < contact.indexOf('<TestimonialsRail contact'));
  const booking = read('app/thank-you/page.tsx');
  assert.ok(booking.indexOf('className="sa-booking-calendar"') < booking.indexOf('className="sa-booking-proof"'));
  assert.doesNotMatch(contact, /oncehub/i);
  assert.match(booking, /https:\/\/go\.oncehub\.com\/StealthAgentsTeam/);
});

test('testimonial display avoids unsupported verification and rating claims', () => {
  const component = read('app/booking-components.tsx');
  assert.doesNotMatch(component, /Verified first-party collection|5 out of 5 stars|★★★★★/);
  assert.match(component, /Client feedback/);
});

test('editorial renderers sanitize visible punctuation without changing internal paths', () => {
  const sanitizer = read('app/content-sanitizer.ts');
  const blogRoute = read('app/blog/[slug]/page.tsx');
  const researchRoute = read('app/research/[slug]/page.tsx');
  assert.match(sanitizer, /INTERNAL_STRING_KEYS/);
  for (const key of ['slug', 'url', 'href', 'src', 'id']) assert.match(sanitizer, new RegExp(`'${key}'`));
  assert.match(blogRoute, /sanitizeVisibleContent/);
  assert.match(researchRoute, /sanitizeVisibleContent/);
});

test('Markdown content contains no visible dash punctuation', () => {
  assert.doesNotMatch(markdownSource(), /[—–]|\s--\s/);
});

test('repaired research images are distinct scalable assets', () => {
  const assets = [
    'research-aug23/research-handoff-completeness.svg',
    'research-aug23/research-revision-log-evidence.svg',
    'research-aug23/source-diversity-daily-research.svg',
    'research-aug23/uncertain-claim-escalation.svg',
    'research-aug23/working-time-context-research.svg',
    'research-sep3/context-loss-in-asynchronous-va-research-questions.svg',
    'research-sep3/least-privilege-evidence-collection-for-va-research.svg',
    'research-sep3/resolving-conflicting-sources-in-va-article-research.svg',
    'research-sep3/sampling-bias-in-virtual-assistant-research-review.svg',
    'research-sep3/source-change-sensitivity-in-daily-va-research.svg',
  ];
  assert.equal(new Set(assets).size, assets.length);
  for (const asset of assets) assert.ok(existsSync(join(root.pathname, 'public/images', asset)), `${asset} missing`);
});
