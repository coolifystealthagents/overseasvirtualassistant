import type { BlogPost } from './data';

const source = { name: 'U.S. Small Business Administration', url: 'https://www.sba.gov/business-guide/manage-your-business/hire-manage-employees', note: 'planning and managing a small-business team' };
const securitySource = { name: 'National Institute of Standards and Technology', url: 'https://www.nist.gov/itl/smallbusinesscyber', note: 'small-business cybersecurity practices' };

const specs = [
  { slug: 'virtual-assistant-inbox-triage', title: 'How a virtual assistant can triage a busy inbox', excerpt: 'A practical delegation guide for sorting messages, drafting safe replies, and sending owner-only decisions back for review.', updated: '2026-08-12' },
  { slug: 'philippines-virtual-assistant-customer-service-handoff', title: 'Customer service handoffs with a Philippines virtual assistant', excerpt: 'Set clear reply permissions, customer context, escalation triggers, and follow-up ownership before support work moves offshore.', updated: '2026-08-12' },
  { slug: 'virtual-assistant-calendar-boundaries', title: 'Calendar boundaries to set before delegating scheduling', excerpt: 'Give an assistant useful scheduling rules without handing over decisions that need your judgment.', updated: '2026-08-12' },
  { slug: 'philippines-virtual-assistant-real-estate-follow-up', title: 'Real-estate follow-up tasks for a Philippines virtual assistant', excerpt: 'Separate CRM updates, reminders, and appointment coordination from licensed advice and negotiation.', updated: '2026-08-12' },
  { slug: 'virtual-assistant-ecommerce-order-support', title: 'Ecommerce order support you can delegate safely', excerpt: 'Map order questions, approved responses, exception handling, and refund approvals for a remote assistant.', updated: '2026-08-12' },
  { slug: 'philippines-virtual-assistant-lead-qualification', title: 'Lead qualification with a Philippines virtual assistant', excerpt: 'Create a respectful first-pass process for gathering fit information while keeping promises and commercial decisions with the owner.', updated: '2026-08-12' },
  { slug: 'virtual-assistant-meeting-notes-to-actions', title: 'Turning meeting notes into tracked actions', excerpt: 'Use a virtual assistant to capture owners, due dates, open questions, and follow-ups without losing decision context.', updated: '2026-08-12' },
  { slug: 'philippines-virtual-assistant-vendor-coordination', title: 'Vendor coordination for a Philippines virtual assistant', excerpt: 'Delegate status checks and document collection while protecting approvals, commitments, and payment authority.', updated: '2026-08-12' },
  { slug: 'virtual-assistant-document-organization', title: 'Document organization for a virtual assistant', excerpt: 'Set practical naming, folder, permission, and retention rules before sharing business files.', updated: '2026-08-12' },
  { slug: 'philippines-virtual-assistant-travel-planning', title: 'Travel planning support from a Philippines virtual assistant', excerpt: 'Define research, itinerary, calendar, and confirmation tasks while keeping final bookings under the right approval.', updated: '2026-08-12' },
  { slug: 'virtual-assistant-social-media-admin-boundaries', title: 'Social media administration with clear boundaries', excerpt: 'Delegate scheduling preparation, comment triage, and reporting without allowing an assistant to make sensitive public statements.', updated: '2026-08-12' },
  { slug: 'philippines-virtual-assistant-healthcare-office-admin', title: 'Administrative support for a healthcare office', excerpt: 'Identify safe scheduling and records tasks while protecting patient privacy and professional decisions.', updated: '2026-08-12' },
  { slug: 'virtual-assistant-legal-admin-support', title: 'Legal administrative support without crossing the line', excerpt: 'Use a virtual assistant for organization and preparation while reserving legal judgment and client advice for qualified professionals.', updated: '2026-08-12' },
  { slug: 'philippines-virtual-assistant-coach-client-admin', title: 'Client administration for coaches and agencies', excerpt: 'Build a clean handoff for intake, scheduling, reminders, and notes while keeping strategy and promises with the service owner.', updated: '2026-08-12' },
  { slug: 'virtual-assistant-data-entry-quality-checks', title: 'Making delegated data entry easier to review', excerpt: 'Choose examples, fields, exception rules, and sample checks that help a manager spot errors early.', updated: '2026-08-12' },
  { slug: 'philippines-virtual-assistant-appointment-reminders', title: 'Appointment reminders for a Philippines virtual assistant', excerpt: 'Coordinate confirmations and reschedules with approved language, privacy limits, and a clear escalation path.', updated: '2026-08-12' },
  { slug: 'virtual-assistant-shared-inbox-permissions', title: 'Choosing shared-inbox permissions for a virtual assistant', excerpt: 'Start with the least access needed for replies, labels, drafts, and handoffs, then review it as the role grows.', updated: '2026-08-12' },
  { slug: 'philippines-virtual-assistant-time-zone-handoff', title: 'Time-zone handoffs with a Philippines virtual assistant', excerpt: 'Plan overlap and asynchronous work around response needs, ownership, and the next person who must act.', updated: '2026-08-12' },
  { slug: 'virtual-assistant-operations-reporting', title: 'Operations reporting a virtual assistant can prepare', excerpt: 'Delegate data gathering and clear summaries while keeping interpretation, targets, and corrective decisions with the manager.', updated: '2026-08-12' },
  { slug: 'philippines-virtual-assistant-onboarding-conversation', title: 'A useful first week with a Philippines virtual assistant', excerpt: 'Set expectations through examples, supervised work, access limits, and short feedback conversations.', updated: '2026-08-12' },
  { slug: 'virtual-assistant-offboarding-access-review', title: 'Offboarding a virtual assistant cleanly', excerpt: 'Protect business records by reviewing accounts, shared files, open work, and ownership when a role ends or changes.', updated: '2026-08-12' },
  { slug: 'philippines-virtual-assistant-performance-conversation', title: 'A fair performance conversation for a virtual assistant', excerpt: 'Review actual work, communication, quality, and scope changes without reducing the discussion to hours online.', updated: '2026-08-12' },
] as const;

const makePost = (spec: typeof specs[number], index: number): BlogPost => ({
  slug: spec.slug,
  title: spec.title,
  excerpt: spec.excerpt,
  minutes: 8 + (index % 5),
  updated: spec.updated,
  takeaways: [
    'Define the finished handoff and the decisions that still belong to the owner.',
    'Start with representative examples and the smallest access level that fits the work.',
    'Review real results early, then widen the role only when quality is dependable.',
  ],
  sections: [
    { heading: 'Scope the first assignment', body: `${spec.title} works best when the first assignment has a named owner, a clear starting point, and a finished output. ${spec.excerpt} Write down what the assistant may complete alone and what must pause for review.`, bullets: ['Name the records, tools, and information needed.', 'Show examples of an acceptable result.', 'Set a stop rule for missing context or an unusual request.'] },
    { heading: 'Give context without giving away every decision', body: 'A useful handoff explains the customer or business context, the expected response, and the source of truth. Keep sensitive commitments, professional judgment, and exceptions with the owner or an authorized manager. This makes the role useful without making the assistant guess.', bullets: ['Use plain language for priorities and response windows.', 'List the questions that require escalation.', 'Keep approvals visible in the same place as the work.'] },
    { heading: 'Review the first real work', body: 'Look at a small set of completed items during the first week. Check accuracy, tone, completeness, and whether the handoff contains enough information for the next person to act. Correct the instruction when a recurring mistake points to an unclear rule.' },
    { heading: 'Protect access and continuity', body: 'Use individual accounts where possible, enable multi-factor authentication, and give access only to the systems needed for the assignment. Keep a simple record of open items and ownership so work can continue through a missed shift or a change in scope.' },
    { heading: 'End with a clean next step', body: 'The assistant should report completed work, unresolved questions, exceptions, and anything waiting for approval. A short, consistent handoff lets the manager decide what to release, revise, or pause without retracing the entire task.' },
  ],
  faqs: [
    { question: 'What should be delegated first?', answer: 'Start with repeatable, reviewable work that has a clear output and a safe pause point when context is missing.' },
    { question: 'Who owns the final decision?', answer: 'A named owner or authorized manager should keep sensitive commitments, exceptions, and decisions that require professional judgment.' },
  ],
  sources: [source, securitySource],
  internalLinks: ['/services', '/contact'],
  cta: 'Need help defining the role? Share the task lane, tools, schedule, and owner rules with our staffing team.',
});

export const aug11BlogPosts: BlogPost[] = specs.map(makePost);
