import fs from 'node:fs';
import crypto from 'node:crypto';

const root = '.paperclip/daily-content/2026-10-05';
const plan = JSON.parse(fs.readFileSync(`${root}/research-plan.json`, 'utf8'));
const words = (s) => s.match(/[A-Za-z0-9][A-Za-z0-9'-]*/g) || [];
const posts = plan.topics.map((topic) => {
  const markdown = fs.readFileSync(`${root}/drafts/${topic.slug}.md`, 'utf8');
  const [main] = markdown.split('## Sources checked');
  const chunks = main.split(/^## /m);
  const title = chunks.shift().replace(/^# /, '').trim();
  const sections = chunks.map((chunk) => {
    const newline = chunk.indexOf('\n');
    return {
      heading: chunk.slice(0, newline).trim(),
      body: chunk.slice(newline).trim().replace(/\n+/g, ' '),
      table: [['Evidence layer', 'Required record'], ['Source fact', 'Original source and timestamp'], ['Prepared action', 'Actor, scope, and status'], ['Owner decision', 'Named authority and disposition']],
    };
  });
  const sources = topic.sources.map((url) => ({
    name: new URL(url).hostname.replace(/^www\./, ''),
    url,
    note: 'Primary or authoritative guidance checked October 5, 2026; its scope and limitations are described in the article.',
  }));
  const post = {
    slug: topic.slug,
    title,
    excerpt: topic.decision,
    published: '2026-10-05',
    methodology: `Prospective documentary study of one bounded support workflow. The study reviews ${sources.length} primary or authoritative sources, separates published facts from local analysis, and proposes representative shadow cases without claiming observed company performance. October 5 is the cycle label; the Blog integrator must reconcile this provisional date to the actual first-publication date in Asia/Jakarta before the sole production push.`,
    headlineStat: { value: '1', label: 'bounded workflow examined', source: 'Declared prospective study design' },
    keyStats: [{ value: String(sources.length), label: 'authoritative sources reviewed' }, { value: String(sections.length), label: 'topic-specific analysis sections' }, { value: '0', label: 'company performance claims' }],
    takeaways: ['Delegate evidence preparation only within a named system and source boundary.', 'Keep legal, financial, safety, employment, strategic, and other consequential decisions with authorized owners.', 'Test ambiguous cases in shadow mode and preserve uncertainty before expanding access.'],
    sections,
    sourceNotes: 'Sources were checked October 5, 2026. The publishers do not endorse OverseasVirtualAssistant.com, and the sources do not supply results for this proposed local workflow.',
    sources,
    internalLinks: [topic.service, '/research', '/contact'],
    faqs: [{ question: 'Does this study report service performance?', answer: 'No. It proposes a bounded workflow and reports no observed company, assistant, or customer outcomes.' }, { question: 'Who keeps consequential decisions?', answer: 'The business and its authorized legal, finance, HR, safety, privacy, security, tax, or executive owners retain decisions within their fields.' }, { question: 'When should the support lane expand?', answer: 'Only after representative cases remain reconstructable and exceptions reach the named owner.' }],
    relatedResearch: ['/research/business-email-compromise-inbox-delegation-study', '/research/vendor-onboarding-w9-data-boundary-study'],
    image: { src: '/images/remote-onboarding.jpg', alt: 'A Philippines-based virtual assistant and business owner reviewing a documented support workflow' },
    cta: 'Define the sources, permitted actions, stop rules, and accountable owners before delegating this workflow.',
    serviceHandoff: { href: topic.service, label: 'Review the related service', copy: 'Use the service page to translate this evidence boundary into a scoped Philippines-based support role while retaining consequential decisions with authorized owners.' },
  };
  return { post, bodyWords: words(sections.map((section) => section.body).join(' ')).length };
});

const serial = posts.map(({ post }) => post);
fs.writeFileSync('app/october-5-research.ts', `import type { ResearchPost } from './data';\nexport const october5ResearchPosts = ${JSON.stringify(serial, null, 2)} satisfies ResearchPost[];\n`);
const entries = posts.map(({ post, bodyWords }, index) => ({ family: 'research', topic: plan.topics[index].decision, slug: post.slug, bodyWords, contentHash: crypto.createHash('sha256').update(JSON.stringify(post)).digest('hex'), sources: post.sources.map((source) => source.url), liveUrl: `https://overseasvirtualassistant.com/research/${post.slug}` }));
fs.writeFileSync(`${root}/research.json`, `${JSON.stringify({ schemaVersion: 4, contract: 'october-5-combined-release-research-handoff', run: plan.run, integratorRun: plan.integratorRun, repository: 'coolifystealthagents/overseasvirtualassistant', productionBranch: 'main', localBranch: 'ove-70-research-2026-10-05', timezone: plan.timezone, cycleLabel: plan.cycleLabel, publicationDate: '2026-10-05', publicationDateStatus: plan.publicationDateStatus, baseSha: plan.baselineSha, requiredCount: 5, handoffCount: 5, status: 'local-handoff-only', entries, deployment: { resourceUuid: 'u3337glzo8zr4zjth9fapcpw', submitted: false } }, null, 2)}\n`);
console.log(posts.map(({ post, bodyWords }) => `${post.slug}: ${bodyWords}`).join('\n'));
