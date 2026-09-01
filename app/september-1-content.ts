import type { BlogPost, ResearchPost } from './data';

const published = '2026-09-01';
const image = '/images/remote-onboarding.jpg';

const sba = { name: 'U.S. Small Business Administration', url: 'https://www.sba.gov/business-guide/manage-your-business/hire-manage-employees', note: 'small-business guidance for hiring and managing a team' };
const nist = { name: 'NIST Small Business Cybersecurity Corner', url: 'https://www.nist.gov/itl/smallbusinesscyber', note: 'cybersecurity resources for small businesses' };
const cisa = { name: 'CISA Secure Our World', url: 'https://www.cisa.gov/secure-our-world', note: 'practical guidance for account security and phishing resistance' };
const ftc = { name: 'FTC Start with Security', url: 'https://www.ftc.gov/business-guidance/resources/start-security-guide-business', note: 'business guidance on access, data minimization, and security practices' };

type BlogSpec = Omit<BlogPost, 'minutes' | 'updated' | 'sources' | 'image' | 'internalLinks' | 'cta'>;

const blogSpecs: BlogSpec[] = [
  {
    slug: 'daily-article-opening-checklist-for-virtual-assistants',
    title: 'A daily article opening checklist for virtual assistants',
    excerpt: 'Start each publishing day by confirming the queue, brief, sources, ownership, and review window before drafting begins.',
    takeaways: ['Open the day from one approved queue.', 'Resolve missing inputs before writing.', 'Reserve the reviewer before promising a release.'],
    sections: [
      { heading: 'Confirm the release queue', body: 'Begin with the approved list of articles for the day. Each row should show its working title, intended reader, target route, owner, stage, and deadline. The assistant should not substitute an appealing new topic when the approved queue is incomplete.' },
      { heading: 'Check the brief for usable inputs', body: 'Open every brief and confirm that the reader question, required evidence, exclusions, internal links, and call to action are present. Mark a missing decision as a blocker instead of filling the gap with an assumption.' },
      { heading: 'Test source access early', body: 'Open the named sources before drafting. A paywall, expired page, or ambiguous document is easier to resolve at the start of a shift than during final review. Record the access problem beside the affected claim.' },
      { heading: 'Match work to review capacity', body: 'Confirm who will review each draft and when. If review capacity is smaller than the writing queue, reorder the day around the highest-priority releases and keep overflow work in a clearly labeled prepared state.' },
    ],
    faqs: [{ question: 'How long should the opening check take?', answer: 'It should be brief but complete enough to expose missing briefs, inaccessible sources, and unavailable reviewers before drafting starts.' }, { question: 'Can the assistant reorder the queue?', answer: 'Only within an approved priority rule. Material changes to promised publication order should go to the release owner.' }],
  },
  {
    slug: 'virtual-assistant-article-definition-of-ready',
    title: 'Define “ready” before a virtual assistant drafts an article',
    excerpt: 'Use a visible readiness standard so incomplete ideas do not enter the daily writing queue and create avoidable rework.',
    takeaways: ['Separate an idea from a ready assignment.', 'Require evidence and decision boundaries.', 'Return incomplete briefs to a named owner.'],
    sections: [
      { heading: 'Turn readiness into observable fields', body: 'A ready article has a defined reader, question, outcome, source expectation, content boundary, route family, and approver. A topic name alone is inventory, not a drafting instruction.' },
      { heading: 'Add a claim-risk check', body: 'The brief should flag claims involving law, finance, health, employment, privacy, security, prices, or current product behavior. Those flags determine which sources and reviewers are required before the article can move forward.' },
      { heading: 'Name the missing-input path', body: 'When a brief fails readiness, the assistant records the missing field, the decision owner, and the latest useful response time. This keeps the item visible without encouraging the writer to invent an answer.' },
      { heading: 'Audit rejected briefs', body: 'Review recurring readiness failures each week. If the same field is repeatedly absent, improve the intake template or assign ownership rather than coaching writers to compensate downstream.' },
    ],
    faqs: [{ question: 'Is a keyword enough to start research?', answer: 'No. It needs a reader question and a boundary so research can distinguish useful evidence from general background.' }, { question: 'Who owns readiness?', answer: 'The person assigning the work owns the business decision; the assistant can run and document the readiness check.' }],
  },
  {
    slug: 'daily-source-capture-routine-for-va-writers',
    title: 'A daily source-capture routine for VA writers',
    excerpt: 'Keep article claims traceable with a lightweight source record captured during research rather than reconstructed after drafting.',
    takeaways: ['Capture evidence while the page is open.', 'Record what each source actually supports.', 'Keep uncertainty visible in the handoff.'],
    sections: [
      { heading: 'Create one row per material claim', body: 'The record should pair a proposed claim with its source URL, publisher, publication or update date, relevant section, and a short scope note. A list of links without claim mapping is not enough for efficient review.' },
      { heading: 'Distinguish authority from relevance', body: 'An authoritative source may still fail to support the sentence being drafted. The assistant should check both who is responsible for the information and whether the cited passage answers the exact question.' },
      { heading: 'Preserve conflicts and limitations', body: 'If credible sources disagree, record both positions and the dates or definitions behind the difference. Route the decision to the editor instead of silently choosing the version that is easier to write.' },
      { heading: 'Attach the record to the draft', body: 'The source record travels with the article through factual review and corrections. After publishing, retain it with the canonical URL so a future refresh starts from known evidence rather than a fresh search.' },
    ],
    faqs: [{ question: 'Should every sentence have a source row?', answer: 'No. Focus on factual claims that a reader could verify and claims whose accuracy affects a decision.' }, { question: 'Are search snippets acceptable evidence?', answer: 'No. Open the underlying source and verify its publisher, date, context, and exact support.' }],
  },
  {
    slug: 'virtual-assistant-draft-handoff-packet',
    title: 'Build a complete draft handoff packet for a virtual assistant',
    excerpt: 'Give editors the draft, evidence, open questions, metadata, and release details in one predictable handoff.',
    takeaways: ['Send decisions with the document.', 'Separate open questions from completed work.', 'Include metadata before editorial review ends.'],
    sections: [
      { heading: 'Lead with the handoff summary', body: 'State the article title, brief link, current version, requested review, due time, and any changed scope. The editor should understand the state of the work without reading a chain of messages.' },
      { heading: 'Bundle evidence and exceptions', body: 'Link the claim ledger and identify unresolved conflicts, weak sources, prohibited claims removed, and owner decisions still needed. Do not hide uncertainty inside document comments that may be missed.' },
      { heading: 'Prepare release fields', body: 'Include the proposed slug, description, canonical route, visible date, image selection from approved assets, alt text, internal links, and call to action. Early metadata review prevents an approved draft from waiting in production.' },
      { heading: 'Record acceptance', body: 'The reviewer should return an explicit outcome: approved, approved with named changes, or returned with checklist failures. Capture the reviewer and time so the publishing owner can rely on the packet.' },
    ],
    faqs: [{ question: 'Should a handoff include every research note?', answer: 'It should link the source of truth and surface the evidence needed for review, without duplicating uncontrolled copies.' }, { question: 'What counts as accepted?', answer: 'A named reviewer records a clear decision against the current version and resolves or assigns every material exception.' }],
  },
  {
    slug: 'article-review-queue-rules-for-remote-va-teams',
    title: 'Article review queue rules for remote VA teams',
    excerpt: 'Keep daily editorial review moving with priority rules, ownership, service windows, and a visible exception lane.',
    takeaways: ['Order review by risk and commitment.', 'Limit work waiting for approval.', 'Escalate aging items with context.'],
    sections: [
      { heading: 'Use a declared queue order', body: 'Sort drafts by promised publication time, business importance, factual risk, and dependency. A declared order prevents the most vocal requester from displacing a nearly ready release without a recorded tradeoff.' },
      { heading: 'Set a work-in-progress limit', body: 'Cap the number of drafts awaiting substantial review. When the cap is reached, finish corrections or prepare briefs instead of producing more documents that will age before anyone reads them.' },
      { heading: 'Create an exception lane', body: 'Sensitive claims, broken dependencies, and disputed evidence need a separate status with a named decision owner. Mixing them into the normal queue makes ordinary progress and genuine risk difficult to see.' },
      { heading: 'Close each review cycle', body: 'A review ends with accepted changes, a new owner and due time, or a release decision. Comments without an outcome leave the draft in an ambiguous state and weaken the next handoff.' },
    ],
    faqs: [{ question: 'Should reviews always be first-in, first-out?', answer: 'No. Publication commitments and claim risk may justify a different order, but the reason should be visible.' }, { question: 'What happens at the queue limit?', answer: 'The team stops adding review inventory and works on corrections, readiness, or an approved fallback lane.' }],
  },
  {
    slug: 'virtual-assistant-article-correction-window',
    title: 'Set an article correction window for virtual assistant publishing',
    excerpt: 'Define how post-review fixes are received, verified, versioned, and returned for release without losing accountability.',
    takeaways: ['Group feedback into one controlled pass.', 'Verify material fixes against evidence.', 'Freeze the accepted release version.'],
    sections: [
      { heading: 'Open one correction cycle', body: 'The editor returns a consolidated list tied to headings or quoted passages. The assistant acknowledges the list and flags any instruction that conflicts with the brief or source record before editing begins.' },
      { heading: 'Classify the requested changes', body: 'Separate factual corrections, structural revisions, voice edits, metadata changes, and optional suggestions. The classification tells the assistant which checks must be repeated after the change.' },
      { heading: 'Recheck affected evidence', body: 'A factual rewrite requires another source comparison, while a moved section requires a flow and link check. Do not assume that accepting tracked changes proves the revised claim remains accurate in context.' },
      { heading: 'Freeze and identify the release copy', body: 'After acceptance, record the version, approver, time, intended slug, and publication date. Further edits reopen the appropriate check rather than silently changing a file already cleared for release.' },
    ],
    faqs: [{ question: 'How many correction rounds should be allowed?', answer: 'Use as many as accuracy requires, while treating repeated avoidable rounds as evidence that the brief or review process needs repair.' }, { question: 'Can copy edits happen after approval?', answer: 'Only under a defined rule; any edit that could change meaning should reopen review.' }],
  },
  {
    slug: 'prepublish-link-check-for-daily-va-articles',
    title: 'A prepublish link check for daily VA articles',
    excerpt: 'Verify internal destinations, external evidence, anchors, canonical routes, and sitemap inclusion before an article goes live.',
    takeaways: ['Test rendered destinations, not copied text.', 'Use anchors that describe the next step.', 'Treat the canonical route as a release field.'],
    sections: [
      { heading: 'Inventory links by purpose', body: 'Mark each link as evidence, supporting explanation, next step, or navigation. This makes irrelevant additions visible and helps the reviewer identify a missing source or service path.' },
      { heading: 'Open every destination', body: 'Confirm that each destination loads, matches the anchor, and does not unexpectedly redirect to a generic page. External links also need a publisher and context check because a working URL can still be weak evidence.' },
      { heading: 'Verify the article identity', body: 'Compare the intended slug, canonical value, internal index link, and sitemap entry. They should all point to the same unique route rather than an alias or another article template.' },
      { heading: 'Repeat the check after release', body: 'Open the public canonical page and sample its links from the rendered output. Record failures immediately and route corrections through the release owner so the live state remains traceable.' },
    ],
    faqs: [{ question: 'Are redirected links always wrong?', answer: 'Not always, but a new article should use the final intended destination and its canonical route must not depend on a redirect.' }, { question: 'Who checks the sitemap?', answer: 'Assign it to the release checklist owner and verify the generated output rather than assuming the content system included the route.' }],
  },
  {
    slug: 'daily-article-metadata-handoff-for-virtual-assistants',
    title: 'A daily article metadata handoff for virtual assistants',
    excerpt: 'Prepare titles, descriptions, slugs, dates, canonicals, schema fields, and approved asset notes alongside the article.',
    takeaways: ['Treat metadata as editorial content.', 'Keep visible and structured dates aligned.', 'Reject reused slugs and vague descriptions.'],
    sections: [
      { heading: 'Write metadata from the final promise', body: 'The page title and description should reflect what the accepted article actually answers. Drafting them from an early outline can preserve a promise the body no longer makes.' },
      { heading: 'Assign a unique route', body: 'Compare the proposed slug against existing Blog and Research routes. The canonical URL should be self-referential, use the correct family, and identify only this body of content.' },
      { heading: 'Align the publication date', body: 'The human-readable date, HTML time value, structured datePublished field, and release record must agree. A copied prior date creates conflicting evidence even when the article itself is new.' },
      { heading: 'Document the approved asset', body: 'Reference an existing approved site asset and provide useful alt text for its role on the page. Do not substitute a newly generated or downloaded image during upload.' },
    ],
    faqs: [{ question: 'Can two articles share a description?', answer: 'They should not. Each description should express the distinct question and value of its page.' }, { question: 'Is dateModified enough for a new article?', answer: 'No. A new article should expose the correct datePublished, with visible and structured values aligned.' }],
  },
  {
    slug: 'virtual-assistant-live-page-verification-log',
    title: 'Create a live-page verification log for VA publishing',
    excerpt: 'Record objective proof that every daily article route, date, canonical, index link, and essential page element works after build.',
    takeaways: ['Verify the public-shaped build output.', 'Log exact routes and results.', 'Keep failures open until retested.'],
    sections: [
      { heading: 'List the expected manifest first', body: 'Before testing, freeze the article family, title, slug, and canonical route for every release. The verifier compares output with this manifest instead of discovering what was built after the fact.' },
      { heading: 'Capture route and identity checks', body: 'For each canonical, record the HTTP result, rendered heading, visible date, canonical tag, and structured datePublished value. A successful response alone does not prove the correct article rendered.' },
      { heading: 'Confirm discovery paths', body: 'Open the correct landing page and generated sitemap, then locate the exact canonical route. This catches articles that build successfully but remain absent from site navigation or discovery files.' },
      { heading: 'Retest corrections explicitly', body: 'A failed row stays open with an owner and resolution note. After the change, rerun that route plus any shared output affected by the fix and record the new result.' },
    ],
    faqs: [{ question: 'Is a build success enough evidence?', answer: 'No. Inspect the generated or served route because metadata, content lookup, and index wiring can still be wrong.' }, { question: 'What should the log retain?', answer: 'Keep the tested route, expected identity, result, date fields, canonical, discovery checks, and final verifier.' }],
  },
  {
    slug: 'end-of-day-editorial-handoff-for-philippines-vas',
    title: 'An end-of-day editorial handoff for Philippines VAs',
    excerpt: 'Close a content shift with concise status, review-ready links, unresolved decisions, and a safe next action for each article.',
    takeaways: ['Report state by article and gate.', 'Surface blocked decisions with owners.', 'Leave the next shift an executable action.'],
    sections: [
      { heading: 'Summarize completed releases', body: 'List each published canonical route with its final title and verification result. Keep released work separate from drafts so the next owner does not mistake writing completion for public completion.' },
      { heading: 'Describe work in progress', body: 'For every open article, name the current gate, source-of-truth link, last completed check, and next action. Avoid percentages that do not tell the next person what remains.' },
      { heading: 'Escalate decisions, not vague blockers', body: 'State the question, supporting context, recommended options if requested, named owner, and response deadline. A note that simply says waiting gives the next shift no useful recovery path.' },
      { heading: 'Protect the next start', body: 'Identify the first approved action for the next working window and any access or reviewer dependency. This turns an asynchronous handoff into continuity rather than a retrospective status report.' },
    ],
    faqs: [{ question: 'Should the handoff repeat the full article history?', answer: 'No. Link the control record and summarize only the current state, important decisions, risks, and next action.' }, { question: 'How should time zones be shown?', answer: 'Use explicit dates, times, and zones for deadlines or review windows rather than relative phrases such as tomorrow morning.' }],
  },
  {
    slug: 'daily-content-backup-lane-for-remote-assistants',
    title: 'Build a daily content backup lane for remote assistants',
    excerpt: 'Protect the publishing routine with pre-approved evergreen briefs that can replace blocked work without bypassing editorial controls.',
    takeaways: ['Prepare fallback work before disruption.', 'Keep the same quality gates.', 'Record why the primary item moved.'],
    sections: [
      { heading: 'Define eligible backup topics', body: 'Choose evergreen questions with stable evidence, clear service relevance, and no dependency on a pending interview, announcement, price, or policy interpretation. Each backup item still needs a complete approved brief.' },
      { heading: 'Set an activation rule', body: 'Name the conditions that allow substitution, such as a missed source deadline or unavailable approver, and identify who authorizes the change. The assistant should not switch topics merely because the fallback is easier.' },
      { heading: 'Preserve normal production controls', body: 'Fallback articles pass the same research, drafting, review, metadata, asset, and live-page checks. A backup lane protects schedule resilience; it does not create a lower-quality publishing channel.' },
      { heading: 'Return displaced work deliberately', body: 'Record why the primary article was moved, what dependency remains, and whether it returns to a later queue or is retired. This prevents blocked assignments from becoming invisible backlog.' },
    ],
    faqs: [{ question: 'How many backup briefs are useful?', answer: 'Keep a small ready set sized to normal disruption risk and review capacity, then replenish it when one is used.' }, { question: 'Can a backup article use a new image?', answer: 'Only if the normal asset approval process allows it; otherwise choose from the existing approved site library.' }],
  },
  {
    slug: 'weekly-audit-of-daily-va-article-routines',
    title: 'A weekly audit of daily VA article routines',
    excerpt: 'Review a representative week of briefs, sources, corrections, metadata, routes, and handoffs to improve the publishing system.',
    takeaways: ['Audit evidence, not activity.', 'Trace misses to the nearest control.', 'Assign one measurable process change.'],
    sections: [
      { heading: 'Select a useful sample', body: 'Include new topics, corrected drafts, rushed releases, high-risk claims, and ordinary articles. A sample made only from the easiest successes will not show where the daily routine is fragile.' },
      { heading: 'Reperform the critical checks', body: 'Compare accepted briefs, source records, final bodies, visible dates, structured data, canonicals, index links, and sitemap entries. Note both escaped errors and controls that caught problems before release.' },
      { heading: 'Locate the earliest preventable cause', body: 'If a page shipped with a weak claim, determine whether the failure began in the brief, research, drafting, review, correction, or publishing gate. Improve the closest control instead of adding broad reminders everywhere.' },
      { heading: 'Close with one owned experiment', body: 'Choose a bounded change, name its owner, define the evidence of improvement, and set a review date. Preserve stable steps so the team can tell whether the experiment helped.' },
    ],
    faqs: [{ question: 'Should every article be audited weekly?', answer: 'Not necessarily. Use a risk-based representative sample while retaining full review where the workflow or claims require it.' }, { question: 'What is a useful audit outcome?', answer: 'A specific control change with an owner, success measure, and follow-up date is more useful than a general request to be careful.' }],
  },
];

export const september1BlogPosts: BlogPost[] = blogSpecs.map((post, index) => ({
  ...post,
  minutes: 8 + (index % 4),
  updated: published,
  sources: index % 3 === 0 ? [sba, nist] : index % 3 === 1 ? [sba, ftc] : [nist, cisa],
  image: { src: image, alt: `Remote editorial team applying ${post.title.toLowerCase()}` },
  internalLinks: ['/blog', '/research', '/services', '/contact'],
  cta: 'Need a Philippines-based assistant for a documented daily publishing routine? Share your workflow with our staffing team.',
}));

type ResearchSpec = { slug: string; title: string; excerpt: string; question: string; finding: string; application: string; limitation: string; sources: ResearchPost['sources'] };

const researchSpecs: ResearchSpec[] = [
  {
    slug: 'research-daily-article-queue-stability',
    title: 'Research note: stability in a daily article queue',
    excerpt: 'An operational analysis of how readiness rules and work-in-progress limits protect daily publishing quality.',
    question: 'Which queue controls help a small remote editorial team sustain daily output without allowing incomplete briefs to crowd out review?',
    finding: 'A stable queue separates ready work from ideas, limits drafts waiting for review, and gives blocked decisions a named owner. These controls make capacity visible at the point where work enters the system.',
    application: 'For a Philippines-based content assistant, the manager can define required brief fields and a maximum review queue. When either control fails, the assistant prepares the next approved item rather than producing unreviewed inventory.',
    limitation: 'This is an operating model, not a measured productivity benchmark. Appropriate queue limits depend on article risk, research depth, reviewer availability, and the team’s actual correction rate.',
    sources: [sba, nist],
  },
  {
    slug: 'research-claim-ledgers-in-remote-editorial-work',
    title: 'Research note: claim ledgers in remote editorial work',
    excerpt: 'Why claim-to-source mapping can improve review handoffs without turning research into an unstructured link collection.',
    question: 'What information must travel with a factual claim so a remote editor can evaluate it without repeating the entire search?',
    finding: 'A useful claim ledger records the proposed statement, source authority, relevant location, date, scope, and uncertainty. It distinguishes finding a source from proving that the source supports the sentence.',
    application: 'The assistant can capture the record while researching and attach it to the draft handoff. Editors then focus on claim fit and judgment, while conflicts remain visible for an accountable owner.',
    limitation: 'A ledger supports review but does not replace subject-matter expertise or qualified advice. It can also create false confidence if the cited material is misunderstood or the record is not rechecked after revision.',
    sources: [nist, ftc],
  },
  {
    slug: 'research-editorial-handoff-completeness',
    title: 'Research note: completeness in editorial handoffs',
    excerpt: 'A bounded framework for evaluating whether an asynchronous article handoff contains enough context for the next owner to act.',
    question: 'Which fields distinguish an actionable editorial handoff from a status message that merely reports activity?',
    finding: 'Actionable handoffs identify the current version, completed gate, evidence location, open decision, next owner, and due time. Completeness is about decision context, not the length of the update.',
    application: 'A Philippines-based assistant can end a shift with one row per article and explicit escalation questions. The receiving editor can approve, return, or reassign the work without reconstructing earlier conversations.',
    limitation: 'The framework does not guarantee response availability across time zones. Teams still need realistic overlap, coverage, and escalation expectations for urgent or sensitive publishing decisions.',
    sources: [sba, cisa],
  },
  {
    slug: 'research-live-route-evidence-for-content-releases',
    title: 'Research note: live-route evidence for content releases',
    excerpt: 'Why route, canonical, date, index, and sitemap checks belong in the evidence for a completed article release.',
    question: 'What minimum evidence demonstrates that a newly built article is uniquely reachable and represented correctly by the site?',
    finding: 'A release record needs more than a successful build: the expected canonical route should return the intended body, self-canonicalize, expose the correct visible and structured dates, and appear in its family index and sitemap.',
    application: 'The release owner can test each manifest row against generated or locally served output. Comparing headings and content identity alongside HTTP status reduces the risk of soft fallbacks or duplicate route rendering.',
    limitation: 'Local verification proves the artifact prepared for deployment, not the state of a later production deployment. The deployment operator should repeat environment-specific checks after release.',
    sources: [nist, cisa],
  },
  {
    slug: 'research-correction-loop-learning-for-va-content',
    title: 'Research note: correction-loop learning for VA content',
    excerpt: 'An operational approach to using article corrections as evidence for improving briefs, research, review, and release controls.',
    question: 'How can a team learn from recurring article corrections without treating every miss as an individual performance problem?',
    finding: 'Corrections become process evidence when they are classified, traced to the earliest preventable gate, and reviewed for recurrence. This connects the observed error to a brief, source, review, or publishing control.',
    application: 'Managers can sample the weekly correction log, select one bounded workflow change, and define how the next batch will show whether it worked. Coaching remains specific to evidence rather than general admonitions.',
    limitation: 'Classification involves judgment and should not be used as surveillance or a stand-alone worker score. Complex errors may have multiple causes and require qualified technical or editorial review.',
    sources: [sba, ftc],
  },
];

export const september1ResearchPosts: ResearchPost[] = researchSpecs.map((post, index) => ({
  slug: post.slug,
  title: post.title,
  excerpt: post.excerpt,
  published,
  methodology: 'This operational research note reviews the named public guidance and applies it to one bounded daily-publishing question. It separates sourced principles from the editorial interpretation offered for OverseasVirtualAssistant.com.',
  headlineStat: { value: '1', label: 'bounded editorial control question', source: 'Article methodology' },
  keyStats: [{ value: String(post.sources.length), label: 'named public sources reviewed' }, { value: '4', label: 'analysis fields documented' }],
  takeaways: [post.finding, post.application, post.limitation],
  sections: [
    { heading: 'Research question', body: `Published September 1, 2026. ${post.question}`, table: [['Field', 'Recorded scope'], ['Article family', 'Research'], ['Publication date', published], ['Question type', 'Bounded operational analysis']] },
    { heading: 'Finding', body: post.finding, table: [] },
    { heading: 'Application to a daily VA routine', body: post.application, table: [] },
    { heading: 'Limitations', body: post.limitation, table: [] },
  ],
  sourceNotes: `Sources consulted: ${post.sources.map(source => source.url).join('; ')}. Recommendations are operational analysis and do not claim measured worker outcomes.`,
  sources: post.sources,
  internalLinks: ['/research', '/blog', '/services', '/contact'],
  faqs: [{ question: 'Does this note measure an individual assistant’s performance?', answer: 'No. It evaluates a bounded workflow control and does not infer individual outcomes.' }, { question: 'How should a manager apply the finding?', answer: 'Test the control in a limited article lane, preserve decision ownership, and review actual release evidence before expanding it.' }],
  relatedResearch: researchSpecs.filter((_, relatedIndex) => relatedIndex !== index).slice(0, 3).map(related => `/research/${related.slug}`),
  image: { src: image, alt: `Remote team reviewing ${post.title.toLowerCase()}` },
  cta: 'Ask our staffing team to translate this finding into a scoped Philippines-based content-support routine.',
  serviceHandoff: undefined,
}));
