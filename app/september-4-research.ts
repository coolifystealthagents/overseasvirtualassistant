import type { ResearchPost } from './data';

const published = '2026-09-04';
const image = { src: '/images/remote-onboarding.jpg', alt: 'Remote research team reviewing evidence and workflow records' };
const nist = { name: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework', note: 'governance and risk context' };
const privacy = { name: 'NIST Privacy Framework', url: 'https://www.nist.gov/privacy-framework', note: 'privacy risk management' };
const ftc = { name: 'FTC Start with Security', url: 'https://www.ftc.gov/business-guidance/resources/start-security-guide-business', note: 'data inventory, access, and disposal guidance' };
const cisa = { name: 'CISA Secure Our World', url: 'https://www.cisa.gov/secure-our-world', note: 'account-security guidance' };
const gao = { name: 'U.S. GAO Yellow Book', url: 'https://www.gao.gov/yellowbook', note: 'evidence sufficiency and appropriateness principles' };
const sba = { name: 'U.S. Small Business Administration', url: 'https://www.sba.gov/business-guide/manage-your-business/hire-manage-employees', note: 'expectations and management responsibilities' };
const fdlp = { name: 'Federal Depository Library Program', url: 'https://www.fdlp.gov/', note: 'public-document access and provenance context' };

type Spec = {
  slug: string; title: string; excerpt: string; question: string; method: string; finding: string;
  fields: string[][]; risks: string[][]; application: string; limitation: string;
  sources: typeof nist[]; related: string[];
};

const specs: Spec[] = [
  {
    slug: 'brief-completeness-signals-in-daily-va-article-research',
    title: 'Which brief-completeness signals reduce avoidable returns in daily VA article research?',
    excerpt: 'A bounded framework for testing whether a research brief has enough context to begin without transferring editorial decisions to the assistant.',
    question: 'Which observable fields make an article-research request usable by a Philippines-based virtual assistant?',
    method: 'The unit is one approved article request. The analysis compares the reader question, claim boundary, source standard, route identity, decision owner, and return rule. GAO evidence principles inform evidence fit, while NIST and SBA guidance inform governance and clear responsibilities. None of the authorities prescribes this editorial template.',
    finding: 'A topic alone is not a ready brief. The request becomes inspectable when another reviewer can identify the reader decision, permitted claims, acceptable sources, intended route, accountable owner, and response to missing information without replaying an intake conversation.',
    fields: [['Field', 'Pass condition'], ['Reader question', 'One answerable decision'], ['Claim boundary', 'Included and excluded claims'], ['Source standard', 'Permitted evidence roles'], ['Route identity', 'Family and proposed slug'], ['Decision owner', 'Named approval path'], ['Return rule', 'Action for a missing input']],
    risks: [['Observed gap', 'Safe response'], ['Several reader questions', 'Split or narrow the request'], ['No primary evidence', 'Return the source gap'], ['Sensitive conclusion', 'Route to a qualified owner'], ['Occupied route', 'Review overlap before drafting']],
    application: 'OverseasVirtualAssistant.com can use an independent restart test: give the brief to someone who missed intake and ask them to state the question, evidence boundary, route, and escalation path. Disagreement reveals a field to repair. The assistant can prepare the record; the editor decides whether incomplete work proceeds.',
    limitation: 'The model has not been tested as a causal productivity intervention. A complete brief cannot guarantee accurate research, useful prose, or a successful release. Complex assignments may require discussion that no form can capture. The supported conclusion is limited to making starting assumptions and missing decisions visible.',
    sources: [gao, nist, sba], related: ['/research/context-loss-in-asynchronous-va-research-questions'],
  },
  {
    slug: 'handoff-delay-measurement-for-philippines-content-operations',
    title: 'How should handoff delay be measured in Philippines content operations?',
    excerpt: 'A workflow study that separates active article work from waiting for evidence, review, access, and release decisions.',
    question: 'What context is required before elapsed handoff time can support a content-operations decision?',
    method: 'The unit is one timestamped handoff between named owners. The proposed model records prepared time, ready time, receipt, acceptance, blocker type, and disposition. SBA management guidance supports explicit expectations, NIST supports governance context, and GAO evidence principles support keeping conclusions within the evidence.',
    finding: 'Elapsed time is ambiguous until the record shows when the artifact met its handoff definition and why the next step waited. A twelve-hour interval may reflect scheduled time-zone separation, missing access, active review, a source problem, or an unowned exception. Those conditions call for different responses.',
    fields: [['Event', 'Meaning'], ['Prepared', 'Authorized work ended'], ['Ready', 'Required handoff fields exist'], ['Received', 'Next owner confirms access'], ['Accepted', 'Next owner accepts the artifact'], ['Returned', 'A reason and new owner are recorded']],
    risks: [['Delay class', 'Evidence needed'], ['Scheduled wait', 'Approved coverage window'], ['Access wait', 'Permission request and owner'], ['Evidence wait', 'Named missing source'], ['Decision wait', 'Question sent to owner'], ['Correction loop', 'Return reason and new ready event']],
    application: 'A Philippines-based assistant can maintain the timestamp and blocker record. The manager should compare similar lanes rather than rank people from mixed assignments. Repeated access waits suggest an access-control problem; repeated decision waits may show missing approval coverage. Neither finding proves individual productivity.',
    limitation: 'System clocks can differ, work can occur outside the record, and faster acceptance does not prove better quality. The sources do not provide a universal content-team service level. The bounded result is that readiness, ownership, blocker type, and disposition make elapsed time more useful for queue design.',
    sources: [sba, nist, gao], related: ['/research/context-loss-in-asynchronous-va-research-questions'],
  },
  {
    slug: 'editorial-sampling-coverage-for-daily-virtual-assistant-drafts',
    title: 'What should editorial sampling cover in daily virtual assistant drafts?',
    excerpt: 'A risk-stratified review model that avoids mistaking a convenient draft sample for the whole queue.',
    question: 'How can editors select daily drafts for review while keeping selection limits explicit?',
    method: 'The unit is one eligible article version. The proposed design compares random, risk-stratified, exception, and change-triggered selection. GAO evidence principles inform the relationship between evidence and conclusion. NIST supplies governance context, and FTC guidance informs data minimization. No source specifies an editorial sample size.',
    finding: 'Each selection lane answers a different question. Random selection offers a less selective view only when the frame is complete. Risk-stratified review ensures sensitive claim classes appear. Exception review studies known failures but cannot estimate prevalence. Change-triggered review focuses on new uncertainty.',
    fields: [['Lane', 'Useful question'], ['Random', 'What appears in the eligible routine queue?'], ['Risk-stratified', 'How do controls work across consequence classes?'], ['Exception', 'How did selected failures occur?'], ['Change-triggered', 'What happened after a workflow change?']],
    risks: [['Frame problem', 'Effect'], ['Unknown eligibility', 'No valid denominator'], ['Mixed version states', 'Unlike artifacts are compared'], ['Missing difficult cases', 'Results look cleaner than the queue'], ['Exception-only set', 'Failure frequency is overstated']],
    application: 'Define the date range, family, version state, risk class, and exclusions before viewing results. Use only article and review evidence needed for the question, not unrelated private messages or personal activity. The assistant can assemble the frame while the editor sets full-review rules for sensitive claims.',
    limitation: 'Sampling can miss rare defects, and risk classification can be inconsistent. This model does not establish statistical validity, causal effects, or worker rankings. It supports an inspectable selection rule and a conclusion no broader than the selected evidence permits.',
    sources: [gao, nist, ftc], related: ['/research/sampling-bias-in-virtual-assistant-research-review'],
  },
  {
    slug: 'source-provenance-loss-in-remote-article-revisions',
    title: 'When does source provenance get lost during remote article revisions?',
    excerpt: 'A claim-level study of how paraphrasing, copy moves, link replacement, and version changes weaken traceability.',
    question: 'Which revision events break the visible relationship between a material claim and its evidence?',
    method: 'The unit is one material claim across article versions. The model records the publisher, URL, supporting passage, qualification, editor change, and final disposition. GAO evidence principles inform evidence fit, FDLP provides public-document provenance context, and NIST informs proportionate governance.',
    finding: 'A citation can remain on the page after its reason for being there has disappeared. Broadening a paraphrase, moving text away from a citation, merging claims, or replacing a link can alter evidence fit even when the revised paragraph reads smoothly. The claim history should preserve the qualification, not only the URL.',
    fields: [['Field', 'Question'], ['Publisher', 'Who owns the source statement?'], ['Passage', 'What text supports the claim?'], ['Qualification', 'What narrows the statement?'], ['Revision', 'How did the public claim change?'], ['Disposition', 'Was it retained, narrowed, replaced, or removed?']],
    risks: [['Revision event', 'Provenance risk'], ['Broader paraphrase', 'Claim exceeds the passage'], ['Paragraph move', 'Citation loses context'], ['Claim merge', 'One source appears to support two facts'], ['Link replacement', 'New source has different authority']],
    application: 'Before release, sample material claims from the final version and follow each to the current passage and approval. Focus on reader decisions, company commitments, sensitive interpretations, quantitative facts, and central conclusions. The assistant can flag drift; the final editor owns publication fitness.',
    limitation: 'A provenance record cannot prove that a source is true, complete, or legally controlling. Web pages change and primary authorities can be ambiguous. The bounded conclusion is that passage, qualification, revision, and disposition fields make scope drift easier to locate and correct.',
    sources: [gao, fdlp, nist], related: ['/research/source-change-sensitivity-in-daily-va-research'],
  },
  {
    slug: 'access-revocation-evidence-after-article-research-handoffs',
    title: 'What evidence shows research access was closed after an article handoff?',
    excerpt: 'A least-privilege study of outputs, temporary copies, permissions, exceptions, and owner confirmation at research close.',
    question: 'What should a close record contain after a time-bounded article research assignment?',
    method: 'The unit is one completed research assignment with approved, time-bounded access. The proposed model reviews final output location, temporary-copy disposition, permission status, exceptions, and owner confirmation. FTC, NIST Privacy Framework, and CISA guidance inform data lifecycle and account security. The study does not test a technical control.',
    finding: 'A finished draft does not show whether source files returned to the approved system, local copies were handled, shared links remain active, or account roles were removed. Logging out ends a session but may not revoke an account, token, link, or inherited group permission.',
    fields: [['Close field', 'Evidence'], ['Output', 'Approved location and version'], ['Copies', 'Disposition under company policy'], ['Permissions', 'Owner-confirmed current status'], ['Exceptions', 'Condition, containment, and next action'], ['Confirmation', 'Named system or security owner']],
    risks: [['Unknown state', 'Safe handling'], ['Copy cannot be verified', 'Report instead of certifying deletion'], ['Permission persists', 'Name the system owner and review time'], ['Unexpected exposure', 'Use the security escalation path'], ['Retention is unclear', 'Ask the responsible legal or privacy owner']],
    application: 'A Philippines-based assistant can inventory the work output and report what remains accessible. The system owner confirms revocation and retention under company policy. The close record should never contain passwords, recovery codes, or private data that is unnecessary for the verification task.',
    limitation: 'A checklist is not proof of deletion, revocation, or compliance. Logs can be incomplete, inherited permissions can be hard to see, and retention duties vary. The model supports a reviewable claimed state and named verification owner, not a security certification.',
    sources: [ftc, privacy, cisa], related: ['/research/least-privilege-evidence-collection-for-va-research'],
  },
];

export const september4ResearchPosts: ResearchPost[] = specs.map(spec => ({
  slug: spec.slug, title: spec.title, excerpt: spec.excerpt, published,
  methodology: `Research question: ${spec.question} ${spec.method} This is operational research for OverseasVirtualAssistant.com, not a measurement of an individual worker.`,
  headlineStat: { value: String(spec.fields.length - 1), label: 'defined analysis fields', source: 'Article methodology' },
  keyStats: [{ value: String(spec.sources.length), label: 'reputable public sources consulted' }, { value: '1', label: 'bounded unit of analysis' }, { value: '0', label: 'worker rankings produced' }],
  takeaways: [spec.finding, spec.application, spec.limitation],
  sections: [
    { heading: 'Research question and evidence scope', body: `${spec.question} ${spec.method}`, table: [['Scope', 'Recorded value'], ['Article family', 'Research'], ['Publication date', published], ['Evidence type', 'Public guidance plus stated operational analysis']] },
    { heading: 'Finding', body: spec.finding, table: spec.fields },
    { heading: 'Failure modes and boundaries', body: 'The same visible outcome can have different causes, so the record needs the context shown below. The assistant should surface an unresolved condition rather than select a convenient explanation.', table: spec.risks },
    { heading: 'Application to daily article operations', body: spec.application, table: [['Role', 'Authority'], ['Virtual assistant', 'Prepare and maintain the evidence record'], ['Editor', 'Accept article claims and publication wording'], ['Business or specialist owner', 'Decide sensitive exceptions']] },
    { heading: 'Limitations and evidence-led conclusion', body: spec.limitation, table: [['Interpretation rule', 'Conclusion stays within the described unit, method, and public-source scope']] },
  ],
  sourceNotes: `Sources consulted: ${spec.sources.map(source => source.url).join('; ')}. The workflow model is original operational analysis; the cited authorities do not endorse OverseasVirtualAssistant.com or prescribe this article routine.`,
  sources: spec.sources, internalLinks: ['/research', '/blog', '/services/research-and-data-support'],
  faqs: [{ question: 'Does this study measure an individual virtual assistant?', answer: 'No. It examines one bounded workflow unit and does not infer individual performance.' }, { question: 'Who approves a change based on the finding?', answer: 'The named editor, business owner, or qualified specialist retains that decision.' }],
  relatedResearch: spec.related, image, cta: 'Use this study to define a bounded, reviewable lane for Philippines-based article support.',
}));
