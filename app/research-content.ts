import type { ResearchPost } from './data';

const sources = [
  { name: 'U.S. Small Business Administration — Hire and manage employees', url: 'https://www.sba.gov/business-guide/manage-your-business/hire-manage-employees', note: 'role definition, supervision, and management planning' },
  { name: 'NIST — Small Business Cybersecurity Corner', url: 'https://www.nist.gov/itl/smallbusinesscyber', note: 'small-business security controls and risk management' },
  { name: 'CISA — Cyber Guidance for Small Businesses', url: 'https://www.cisa.gov/stopransomware', note: 'ransomware prevention and response practices' },
  { name: 'FTC — Start with Security', url: 'https://www.ftc.gov/business-guidance/resources/start-security-guide-business', note: 'data minimization, access, and incident response guidance' },
  { name: 'NIST — Privacy Framework', url: 'https://www.nist.gov/privacy-framework', note: 'privacy risk identification and governance' },
  { name: 'NIST — Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework', note: 'identify, protect, detect, respond, and recover functions' },
  { name: 'U.S. Department of Labor — Hours Worked', url: 'https://www.dol.gov/general/topic/workhours', note: 'working-time planning reference' },
  { name: 'ILO — Working time and work-life balance', url: 'https://www.ilo.org/topics/working-time', note: 'sustainable scheduling and working-time research' },
  { name: 'NIST — Digital Identity Guidelines', url: 'https://pages.nist.gov/800-63-3/', note: 'identity proofing and authentication concepts' },
  { name: 'CISA — Secure Our World', url: 'https://www.cisa.gov/secure-our-world', note: 'strong passwords, MFA, updates, and phishing awareness' },
];

const topicSpecs = [
  ['role-design-for-philippines-remote-staffing', 'Role design for Philippines-based remote staffing', 'Role design', 'A bounded role makes output, ownership, access, and escalation inspectable before volume increases.'],
  ['quality-controls-for-remote-assistant-work', 'Quality controls for remote assistant work', 'Quality control', 'A small evidence-based review loop catches repeat errors before they become process debt.'],
  ['access-governance-for-delegated-operations', 'Access governance for delegated operations', 'Access governance', 'Least-privilege access and scheduled reviews reduce avoidable exposure in delegated workflows.'],
  ['shift-planning-for-philippines-based-assistants', 'Shift planning for Philippines-based assistants', 'Shift planning', 'A documented overlap and handoff window is more useful than treating time zones as a staffing strategy.'],
  ['handoff-reliability-in-distributed-teams', 'Handoff reliability in distributed teams', 'Handoff reliability', 'A handoff is reliable when the next owner can act without reconstructing context.'],
  ['evidence-based-assistant-onboarding', 'Evidence-based assistant onboarding', 'Onboarding evidence', 'Observed examples and supervised work provide stronger launch evidence than attendance alone.'],
  ['remote-operations-for-small-businesses', 'Remote operations for small businesses', 'Remote operations', 'Small teams can scale repeatable operations by pairing clear routines with explicit decision boundaries.'],
  ['manager-scorecards-for-assistant-teams', 'Manager scorecards for assistant teams', 'Manager scorecards', 'A balanced scorecard makes output, quality, blocked work, and escalation quality visible together.'],
  ['source-quality-in-assistant-prepared-briefs', 'Source quality in assistant-prepared briefs', 'Source quality', 'A brief is decision-ready when claims, dates, methods, and source links can be checked quickly.'],
  ['risk-review-before-expanding-delegated-work', 'Risk review before expanding delegated work', 'Delegation risk', 'Expansion should follow evidence from a pilot and a documented review of impact, access, and reversibility.'],
  ['customer-support-queue-controls-for-remote-teams', 'Customer-support queue controls for remote teams', 'Support queues', 'Approved response patterns and owner-only exceptions keep support helpful without creating unauthorized commitments.'],
  ['secure-file-sharing-for-virtual-assistant-work', 'Secure file sharing for virtual assistant work', 'File sharing', 'A file-sharing routine needs ownership, permissions, retention, and offboarding—not just a shared folder.'],
  ['research-workflow-design-for-virtual-assistants', 'Research workflow design for virtual assistants', 'Research workflows', 'Research work improves when the question, source standard, citation format, and stop rule are explicit.'],
  ['calendar-delegation-controls-for-remote-assistants', 'Calendar delegation controls for remote assistants', 'Calendar controls', 'Calendar delegation is safer when preferences, buffers, approvals, and exceptions are written down.'],
  ['sop-maturity-for-distributed-assistant-teams', 'SOP maturity for distributed assistant teams', 'SOP maturity', 'An SOP earns expansion when another trained person can follow it and produce a reviewable result.'],
] as const;

const related = (index: number) => [
  `/research/${topicSpecs[(index + 1) % topicSpecs.length][0]}`,
  `/research/${topicSpecs[(index + 2) % topicSpecs.length][0]}`,
  `/research/${topicSpecs[(index + 3) % topicSpecs.length][0]}`,
];

export const researchPosts: ResearchPost[] = topicSpecs.map(([slug, title, cluster, thesis], index) => ({
  slug,
  title: `Research note: ${title}`,
  excerpt: `Evidence-led planning note on ${title.toLowerCase()} for teams building dependable Philippines-based support routines.`,
  published: '2026-08-08',
  methodology: `This note uses a structured review of ${sources.length} public primary and government sources, then translates the evidence into an operational pilot. The headline measure is a proposed acceptance criterion, not a claim about the workforce. Recheck source dates and applicable local requirements before implementation.`,
  headlineStat: { value: '100%', label: 'of pilot work items should have an owner disposition before the lane expands', source: 'Operational acceptance criterion defined for this research note' },
  keyStats: [
    { value: '10', label: 'authoritative sources reviewed' },
    { value: '3', label: 'review checkpoints in the pilot' },
    { value: '1', label: 'named owner for exceptions' },
  ],
  takeaways: [
    `Define ${cluster.toLowerCase()} as a visible routine with a trigger, inputs, output, and review owner.`,
    'Start with a reversible pilot and record completed, correct, blocked, and escalated work separately.',
    'Keep approvals, sensitive access, legal or financial commitments, and unusual exceptions with the authorized owner.',
  ],
  sections: [
    { heading: 'What the evidence supports', body: `${thesis} Across the source set, the common control is not a particular tool or geography; it is a clear owner, a bounded task, and a way to detect and correct exceptions.`, table: [['Evidence question', 'Practical answer'], ['Who decides?', 'Name the owner before work starts.'], ['What proves completion?', 'Define a reviewable output and acceptance rule.'], ['When should work stop?', 'Document the exception and escalation path.']] },
    { heading: 'A defensible pilot design', body: 'Use representative examples, minimum required access, a fixed review window, and a short batch size. Capture the input, action, result, reviewer decision, and any correction needed. Do not infer quality from hours online or activity counts alone.', table: [['Pilot field', 'Record'], ['Scope', 'One task lane and explicit exclusions'], ['Quality', 'Accepted, corrected, rejected, or pending'], ['Risk', 'Access used and exceptions escalated'], ['Decision', 'Continue, revise, or pause with rationale']] },
    { heading: 'How to operationalize the result', body: 'At the end of each review checkpoint, update the SOP only when the evidence shows a repeatable improvement. Preserve the previous instruction until the new version is tested. If the work touches personal data, payments, regulated advice, or customer commitments, obtain the appropriate owner or professional review before expanding the scope.', table: [['Checkpoint', 'Decision'], ['Launch', 'Can the worker explain the finish line?'], ['Review', 'Can the manager inspect representative output?'], ['Expand', 'Are exceptions understood and controlled?']] },
  ],
  sourceNotes: 'Source notes: government and standards-body guidance is used for control concepts; the operational thresholds above are proposed acceptance criteria for a local pilot and should not be presented as externally measured workforce statistics.',
  sources,
  internalLinks: ['/blog', '/services', '/contact'],
  faqs: [
    { question: 'Is this a staffing performance claim?', answer: 'No. The percentage and counts are proposed pilot controls unless a source is explicitly identified; they are not claims about an individual or a workforce.' },
    { question: 'What should happen when a source or requirement conflicts?', answer: 'Pause the affected item, record the conflict, and escalate it to the named owner or qualified adviser.' },
    { question: 'When is the routine ready to expand?', answer: 'Only after representative work is reviewable, exceptions have an owner, and the updated SOP has been tested.' },
  ],
  relatedResearch: related(index),
  image: { src: `/images/thumbnails/generated/${slug}.webp`, alt: `Research illustration for ${title}` },
  cta: 'Want this research translated into a scoped staffing routine? Share the task lane, tools, schedule, and owner rules with our staffing team.',
}));
