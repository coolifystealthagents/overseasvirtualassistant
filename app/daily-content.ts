import type { BlogPost } from './data';

const image = 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80';
const source = { name: 'U.S. Small Business Administration', url: 'https://www.sba.gov/business-guide/manage-your-business/hire-manage-employees', note: 'planning and managing a small-business team' };

const blogTopics = [
  ['philippines-virtual-assistant-role-scope', 'How to scope a Philippines virtual assistant role', 'Turn a broad request for help into a clear task lane, handoff rule, schedule, and quality check.'],
  ['filipino-virtual-assistant-first-week-plan', 'A first-week plan for a Filipino virtual assistant', 'A practical seven-day launch sequence for examples, supervised work, access controls, and feedback.'],
  ['philippines-virtual-assistant-time-zone-overlap', 'Planning time-zone overlap with a Philippines virtual assistant', 'Choose live coverage, asynchronous work, and handoff windows without creating avoidable night-shift confusion.'],
  ['virtual-assistant-daily-scorecard', 'A daily scorecard for a virtual assistant', 'Measure completed work, accuracy, response time, exceptions, and follow-through with a lightweight scorecard.'],
  ['philippines-virtual-assistant-customer-support', 'Using a Philippines virtual assistant for customer support', 'Build a safe support queue with approved replies, escalation rules, privacy controls, and review samples.'],
  ['virtual-assistant-inbox-management-sop', 'An inbox-management SOP for remote assistants', 'Define triage labels, draft rules, response targets, and owner-only decisions before inbox access is granted.'],
  ['philippines-virtual-assistant-real-estate-admin', 'Real-estate admin tasks for a Philippines virtual assistant', 'Separate repeatable listing, CRM, appointment, and document work from licensed or owner-only decisions.'],
  ['virtual-assistant-lead-follow-up-workflow', 'A lead follow-up workflow for a virtual assistant', 'Create a repeatable CRM workflow for reminders, notes, booking, and respectful escalation.'],
  ['philippines-virtual-assistant-ecommerce-operations', 'Ecommerce operations support from the Philippines', 'Organize catalog, order, customer, and reporting tasks with clear refund and payment boundaries.'],
  ['virtual-assistant-calendar-delegation-guide', 'How to delegate calendar management safely', 'Set scheduling preferences, buffers, meeting rules, and approval gates for an assistant.'],
  ['philippines-virtual-assistant-research-brief', 'How to request a useful research brief', 'Give a remote assistant a source standard, question structure, citation format, and decision-ready output.'],
  ['virtual-assistant-bookkeeping-support-boundaries', 'Bookkeeping support boundaries for a virtual assistant', 'Use assistants for preparation and organization while protecting payment, tax, and final-review decisions.'],
  ['philippines-virtual-assistant-quality-review', 'Quality review for Philippines-based assistant work', 'Use examples, sampling, error logs, and coaching loops to improve quality without micromanaging.'],
  ['virtual-assistant-secure-file-sharing', 'Secure file sharing with a virtual assistant', 'Plan folders, permissions, naming, retention, and offboarding before sharing business documents.'],
  ['philippines-virtual-assistant-appointment-setting', 'Appointment setting with a Philippines virtual assistant', 'Combine an approved script, qualification fields, calendar rules, and an escalation path.'],
  ['virtual-assistant-sop-documentation', 'How to document an SOP for a remote assistant', 'Capture triggers, inputs, steps, exceptions, examples, and the definition of done.'],
  ['philippines-virtual-assistant-night-shift-wellbeing', 'Designing a sustainable Philippines night shift', 'Balance customer coverage with predictable schedules, breaks, handoffs, and manager visibility.'],
  ['virtual-assistant-onboarding-access-checklist', 'A virtual assistant onboarding and access checklist', 'Sequence identity, tools, examples, supervised work, and access review so delegation stays controlled.'],
  ['philippines-virtual-assistant-manager-handoff', 'The manager handoff for a Philippines virtual assistant', 'Make ownership visible with daily notes, blocked-work reporting, and an agreed escalation window.'],
  ['virtual-assistant-monthly-performance-review', 'A monthly performance review for a virtual assistant', 'Turn work evidence into a fair review covering output, quality, communication, and next-step scope.'],
] as const;

const paragraphs = (title: string, purpose: string) => [
  `A Philippines-based virtual assistant can create reliable capacity when the work is defined as an operating system rather than a vague request. This guide focuses on ${title.toLowerCase()} and keeps decisions, examples, tools, and review ownership visible.`,
  `${purpose} Start with one lane, give the assistant representative examples, and agree what must come back to the owner before the first live batch begins.`,
];

export const dailyBlogPosts: BlogPost[] = blogTopics.map(([slug, title, excerpt], index) => ({
  slug, title, excerpt, minutes: 10 + (index % 6), updated: '2026-08-07',
  takeaways: [
    'Define the finished output and the evidence that proves it is complete.',
    'Use least-access permissions and keep exceptions with the named owner.',
    'Review real samples daily at launch, then move to a weekly scorecard.',
  ],
  sections: [
    { heading: 'Start with the work lane', body: paragraphs(title, excerpt)[0], bullets: ['List the trigger, inputs, steps, output, and deadline.', 'Separate repeatable preparation from approvals or professional advice.', 'Choose one owner for questions and exceptions.'] },
    { heading: 'Give the assistant a usable handoff', body: paragraphs(title, excerpt)[1], bullets: ['Provide three good examples and one example that needs correction.', 'Name the source of truth for records, templates, and status.', 'State when to stop and ask rather than guess.'] },
    { heading: 'Build quality into the routine', body: 'Use a small sample review at the start of every day. Record the miss, update the relevant instruction, and check the next batch for the same failure. A scorecard should show completed items, accuracy, turnaround time, blocked items, and escalations—not just hours online.' },
    { heading: 'Keep access and decisions controlled', body: 'Begin with the minimum accounts and permissions needed for the first task lane. Keep payments, legal commitments, refunds outside policy, sensitive exports, and final customer promises with the owner or an authorized manager. Review access whenever the scope changes.' },
    { heading: 'Make the next step easy', body: 'At the end of each shift, the assistant should send completed work, open questions, exceptions, and the next handoff. Owners who want help turning this plan into a Philippines-based staffing role can use the staffing team’s consultation path below.' },
  ],
  faqs: [
    { question: 'What should be delegated first?', answer: 'Start with repeatable, reviewable work that has a clear output and low downside when an item is paused for approval.' },
    { question: 'How often should work be reviewed?', answer: 'Review representative work daily during the first week, then use a weekly scorecard once quality is stable.' },
  ],
  sources: [source, { name: 'National Institute of Standards and Technology', url: 'https://www.nist.gov/itl/smallbusinesscyber', note: 'small-business cybersecurity practices' }],
  image: { src: image, alt: `Remote team planning ${title.toLowerCase()}` },
  internalLinks: ['/services', '/contact', '/research'],
  cta: 'Need a role plan? Share the task lane, tools, schedule, and owner rules with our staffing team.',
}));

const researchTopics = [
  ['philippines-remote-staffing-role-design', 'Research note: role design for Philippines-based remote staffing'],
  ['remote-assistant-quality-controls', 'Research note: quality controls for remote assistant work'],
  ['virtual-assistant-access-governance', 'Research note: access governance for delegated operations'],
  ['philippines-assistant-shift-planning', 'Research note: shift planning for Philippines-based assistants'],
  ['remote-team-handoff-reliability', 'Research note: reliable handoffs in distributed teams'],
  ['assistant-onboarding-evidence', 'Research note: evidence-based assistant onboarding'],
  ['small-business-remote-operations', 'Research note: remote operations for small businesses'],
  ['virtual-assistant-manager-scorecards', 'Research note: manager scorecards for assistant teams'],
  ['research-brief-source-quality', 'Research note: source quality in assistant-prepared briefs'],
  ['delegation-risk-review', 'Research note: reviewing risk before expanding delegated work'],
] as const;

export const dailyResearchPosts = researchTopics.map(([slug, title], index) => ({
  slug, title, excerpt: `Evidence-led planning note on ${title.replace('Research note: ', '').toLowerCase()} for teams hiring Philippines-based support.`, published: '2026-08-07',
  body: [
    `This research note examines ${title.replace('Research note: ', '').toLowerCase()} as an operating question. The practical test is whether a manager can explain the work, inspect the result, and intervene when an exception appears.`,
    'The strongest baseline is a bounded task lane: a named owner, a written definition of done, examples of acceptable work, a source of truth, and a scheduled review. That baseline supports both local and Philippines-based teams without relying on assumptions about geography.',
    `For implementation, begin with a small batch and record completion, accuracy, turnaround, blocked work, and escalation quality. After ${index % 3 + 1} review cycles, use the evidence to decide whether the lane is ready for more volume or needs a clearer SOP.`,
    'This note is operational guidance, not legal, tax, employment, privacy, or security advice. A qualified adviser should review requirements that apply to the company, worker relationship, data, and customer commitments.',
  ],
  image: { src: image, alt: `Research planning for ${title}` },
  sources: [source, { name: 'NIST Small Business Cybersecurity Corner', url: 'https://www.nist.gov/itl/smallbusinesscyber', note: 'risk and security planning reference' }],
  internalLinks: ['/blog', '/services', '/contact'],
  cta: 'Want this research translated into a scoped staffing routine? Contact our staffing team.',
}));
