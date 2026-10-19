import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('global navigation is exactly Home, Services, Contact Us plus the required attribution', () => {
  const header = read('app/site-header.tsx');
  assert.match(header, /const links = \[\['Home','\/'\],\['Services','\/services'\],\['Contact Us','\/contact-us'\]\]/);
  assert.match(header, /Powered by <a[^>]+>StealthAgents<\/a>/);
  assert.match(read('app/components.tsx'), /Powered by <a[^>]+>StealthAgents<\/a>/);
});

test('contact page preserves the mandated visible label sequence and trust evidence', () => {
  const form = read('app/contact-us/StandardContactForm.tsx');
  const ordered = ['First Name *', 'Last Name *', 'Email *', 'Phone Number *', 'Website *', 'Company *', 'How many virtual assistants do you need? *', 'What industry is your business in? *'];
  let cursor = -1;
  for (const label of ordered) { const next = form.indexOf(label); assert.ok(next > cursor, `${label} must appear in sequence`); cursor = next; }
  assert.match(form, /Start Today With Stealth Agents/);
  assert.match(form, /data-acr-managed="react"/);
  const page = read('app/contact-us/page.tsx');
  assert.match(page, /<TestimonialsRail contact/);
  assert.match(page, /Official team, Bacolod/);
  assert.match(page, /stealth-agents-team\.webp/);
  assert.match(page, /stealth-agents-logo-black\.png/);
  const provenance = JSON.parse(read('app/review-provenance.json'));
  assert.equal(provenance.records.length, 10);
  assert.equal(new Set(provenance.records.map((record) => record.name)).size, 10);
  assert.ok(provenance.records.every((record) => record.body && record.detail && record.headline));
});

test('lead endpoint validates, rate limits, rejects spam, and forwards to the configured backend', () => {
  const route = read('app/api/contact/route.ts');
  for (const gate of ['sameOrigin', 'rateLimited', 'website_url', 'LEAD_INGEST_URL', 'LEAD_AUTH_TOKEN', 'application/x-www-form-urlencoded', 'EMAIL.test', 'PHONE.test']) assert.ok(route.includes(gate), `${gate} missing`);
  assert.match(route, /result\?\.ok!==true/);
  assert.match(route, /sendLeadFallbackToMattermost/);
  assert.match(read('app/acr-client.tsx'), /acrManaged==='react'/);
});

test('conversion sequence, services, and long-form editorial controls remain explicit', () => {
  assert.match(read('app/thank-you/page.tsx'), /Next, choose a time for your consultation/);
  assert.match(read('app/thanks-whats-next/page.tsx'), /What happens next/);
  assert.match(read('app/services/[slug]/page.tsx'), /A visible route from request to review/);
  assert.match(read('app/services/[slug]/page.tsx'), /Boundaries and quality controls/);
  assert.match(read('app/services/[slug]/page.tsx'), /Adjacent service field guides/);
  const enhancer = read('app/article-enhancer.tsx');
  assert.match(enhancer, /\^\\\/\(blog\|research\)/);
  assert.doesNotMatch(enhancer, /querySelector<HTMLElement>\('main article,/);
  assert.match(enhancer, /editorial-layout/);
  assert.match(enhancer, /On this page/);
  assert.match(enhancer, /Related service field guides/);
  assert.match(read('app/v3.css'), /position:sticky/);
});

test('metadata, redirects, sitemap, security, and assets meet release contracts', () => {
  const layout = read('app/layout.tsx');
  assert.match(layout, /metadataBase/);
  assert.match(layout, /manifest: '\/manifest\.webmanifest'/);
  assert.match(layout, /\.\/v3\.css/);
  const config = read('next.config.mjs');
  for (const header of ['Strict-Transport-Security', 'Content-Security-Policy', 'Permissions-Policy', 'X-Content-Type-Options', 'Referrer-Policy']) assert.match(config, new RegExp(header));
  assert.match(config, /source: '\/contact', destination: '\/contact-us', permanent: true/);
  const middleware = read('middleware.ts');
  assert.match(middleware, /canonicalHost = 'overseasvirtualassistant\.com'/);
  assert.match(middleware, /cf-visitor/);
  assert.match(middleware, /NextResponse\.redirect\(destination, 308\)/);
  const sitemap = read('app/sitemap.xml/route.ts');
  assert.match(sitemap, /"\/about"/);
  assert.match(sitemap, /"\/contact-us"/);
  assert.ok(!sitemap.includes('"/contact",'));
  for (const asset of ['public/images/stealth-agents-team.webp', 'public/images/stealth-agents-logo-black.png']) assert.ok(existsSync(new URL(`../${asset}`, import.meta.url)), `${asset} missing`);
});

test('visible application source contains no em dash or spaced double hyphen', () => {
  const files = ['app/site-header.tsx','app/components.tsx','app/contact-us/page.tsx','app/contact-us/StandardContactForm.tsx','app/services/page.tsx','app/services/[slug]/page.tsx','app/about/page.tsx','app/thank-you/page.tsx','app/thanks-whats-next/page.tsx'];
  for (const file of files) { const source = read(file); assert.doesNotMatch(source, /[—–]|\s--\s/, file); }
});
