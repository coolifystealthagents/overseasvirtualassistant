export const site = {
  domain: 'OverseasVirtualAssistant.com',
  url: 'https://overseasvirtualassistant.com',
  slug: 'overseasvirtualassistant',
  brand: 'Overseas Virtual Assistant',
  primary: 'overseas virtual assistant',
  audience: 'companies hiring Filipino virtual assistants based in the Philippines for clearly scoped remote work',
  angle: 'Philippines-based VA hiring with clear role scope, time-zone planning, and quality controls',
  color: '#16a34a',
  accent: '#1d4ed8',
} as const;

export const roles = [
  { name: 'Executive assistant', fit: 'Calendar, inbox, travel, meeting notes, and daily admin follow-up.', guardrail: 'Keep money moves, legal calls, and final approvals with the owner.' },
  { name: 'Customer support assistant', fit: 'Ticket replies, order updates, simple refunds for review, and FAQ responses.', guardrail: 'Give clear rules for refunds, angry customers, and private customer data.' },
  { name: 'Lead follow-up assistant', fit: 'CRM updates, warm lead reminders, appointment booking, and quote follow-up.', guardrail: 'Use approved scripts. Do not promise pricing, delivery dates, or results without owner approval.' },
  { name: 'Operations assistant', fit: 'Reports, vendor updates, task tracking, SOP cleanup, and project reminders.', guardrail: 'Use weekly scorecards so small misses do not become quiet drift.' },
  { name: 'Bookkeeping support assistant', fit: 'Receipt sorting, invoice drafts, data entry, and report prep.', guardrail: 'Keep bank access, payments, tax advice, and final books review with a qualified owner.' },
  { name: 'CRM assistant', fit: 'Contact cleanup, pipeline notes, list hygiene, tagging, and simple dashboard prep.', guardrail: 'Limit export access and review records before campaigns go out.' },
] as const;

export const industries = ['real estate', 'healthcare offices', 'legal teams', 'ecommerce stores', 'coaches and agencies', 'home services'] as const;

export const stats = [
  { label: 'Role plan', value: 'Scope first', note: 'List the tasks, shift, tools, and owner-only decisions before recruiting.' },
  { label: 'First review', value: 'Use real work', note: 'Check examples from the first task lane before adding more work.' },
  { label: 'Access plan', value: 'Start small', note: 'Give each Filipino assistant only the accounts needed for the first tasks.' },
] as const;

export const timeZoneWindows = [
  { region: 'Philippines', window: 'US business-day coverage', use: 'Live calls, support, scheduling, and CRM follow-up', handoff: 'Use a planned night shift with clear breaks and escalation rules.' },
  { region: 'Philippines', window: 'US evening / early morning', use: 'Inbox cleanup, customer replies, admin, and ecommerce updates', handoff: 'Send work at day end. Review it the next morning.' },
  { region: 'Philippines', window: 'UK/EU business-day coverage', use: 'Research, operations support, and technical admin', handoff: 'Use a scheduled afternoon or evening shift in the Philippines.' },
  { region: 'Philippines', window: 'Asynchronous coverage', use: 'Reports, data cleanup, content prep, and back-office work', handoff: 'Batch the work with written notes and review it on your next workday.' },
] as const;

export const countryFits = [
  { country: 'Philippines only', overlap: 'Flexible shifts for US, UK, EU, or async work', bestFor: 'Customer support, admin, sales follow-up, operations, and specialist support', note: 'Every staffing plan uses Philippines-based talent. Choose the shift around the role and customer coverage needs.' },
] as const;

export const qaChecks = [
  'Give the assistant three good examples and one bad example for each task.',
  'Use a daily done list for week one, then move to a weekly scorecard.',
  'Review five real work samples before adding more tasks.',
  'Keep an escalation list for refunds, legal issues, angry customers, and money questions.',
  'Record a short screen-share for any task that takes more than two tries to explain.',
] as const;

export const securityBasics = [
  'Use a password manager instead of sending passwords in chat.',
  'Start with least-access permissions and add access only when needed.',
  'Turn on two-factor authentication for email, CRM, store, and finance tools.',
  'Use shared inboxes or role accounts where possible so access can be removed fast.',
  'Review access each month and remove tools the assistant no longer needs.',
] as const;

export const onboardingTimeline = [
  { day: 'Day 0', title: 'Prep the handoff', detail: 'List the first task lane, tools, sample work, and the decisions the assistant must send back to you.' },
  { day: 'Day 1', title: 'Run the first live walkthrough', detail: 'Share the screen, record the call, and ask the assistant to repeat the steps in their own words.' },
  { day: 'Days 2-5', title: 'Check real work daily', detail: 'Review five work samples, fix the SOP where the miss happened, and keep risky approvals with the owner.' },
  { day: 'Day 7', title: 'Decide what can grow', detail: 'Keep tasks scoring well, pause weak ones, and add one new task family only if the first lane is stable.' },
] as const;

export const globalWorkImages = [
  {
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    alt: 'Remote team members planning overseas assistant work on laptops',
    label: 'Live handoff call',
  },
  {
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
    alt: 'Business team reviewing a weekly assistant scorecard together',
    label: 'Weekly quality review',
  },
  {
    src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    alt: 'Laptop dashboard for remote operations and overseas support work',
    label: 'Remote operations desk',
  },
] as const;

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  minutes: number;
  updated: string;
  takeaways: string[];
  sections: { heading: string; body: string; bullets?: string[] }[];
  faqs: { question: string; answer: string }[];
  sources: { name: string; url: string; note: string }[];
  image?: { src: string; alt: string };
  internalLinks?: string[];
  cta?: string;
};

export type ResearchPost = {
  slug: string; title: string; excerpt: string; published: string; methodology: string;
  headlineStat: { value: string; label: string; source: string };
  keyStats: { value: string; label: string }[];
  takeaways: string[];
  sections: { heading: string; body: string; table: string[][] }[];
  sourceNotes: string; sources: { name: string; url: string; note: string }[];
  internalLinks: string[]; faqs: { question: string; answer: string }[];
  relatedResearch: string[]; image: { src: string; alt: string }; cta: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'philippines-virtual-assistant-secure-access-handoff',
    title: 'Secure account handoff for a Philippines virtual assistant',
    excerpt: 'A practical access plan for Filipino virtual assistants, with named accounts, MFA, least-access roles, review logs, and a clean offboarding checklist.',
    minutes: 13,
    updated: '2026-07-27',
    takeaways: [],
    sections: [],
    faqs: [],
    sources: [],
  },
  {
    slug: 'philippines-virtual-assistant-night-shift-guide',
    title: 'How to manage a Philippines virtual assistant night shift',
    excerpt: 'A practical guide to overnight coverage, handoffs, fatigue controls, secure access, and morning review for a Filipino virtual assistant.',
    minutes: 12,
    updated: '2026-07-25',
    takeaways: [],
    sections: [],
    faqs: [],
    sources: [],
  },];

import { dailyBlogPosts } from './daily-content';
blogPosts.push(...dailyBlogPosts);

export const staffingOffer = {
  partner: 'our staffing team',
  promise: 'Get a Philippines staffing plan built around the work you need handled.',
  fit: [
    'business owners who want Filipino remote staff but do not want to screen alone',
    'teams that want Philippines-based support and a clear manager path',
    'companies that need help with admin, operations, customer support, calls, bookkeeping, development, or marketing work',
  ],
  included: [
    'role planning call to turn your task list into a clear staffing scope',
    'candidate matching based on skills, schedule, tools, and communication needs',
    'onboarding guidance for SOPs, scorecards, reporting, and safe tool access',
    'managed support so quality, attendance, and replacement questions do not sit only on the owner',
  ],
  proof: [
    'clear task scope before hiring',
    'weekly reporting rhythm',
    'named accountability and escalation path',
    'simple handoff plan for tools, SOPs, and quality checks',
  ],
} as const;

export const leadQuestions = [
  'What work do you want off your plate first?',
  'Which tools, inboxes, phones, CRMs, or systems will the staff member use?',
  'What hours, time zone, and response time do you need?',
  'Who checks quality during the first two weeks?',
  'What should the staff member never decide without approval?',
] as const;

export const staffingProcess = [
  { step: '1', title: 'Map the role', body: 'We turn messy tasks into one clear role with outcomes, tools, limits, and a first-week checklist.' },
  { step: '2', title: 'Match the staff', body: 'our staffing team can help match Filipino staff to the work, shift, communication needs, and skill level you need.' },
  { step: '3', title: 'Launch with control', body: 'Start with SOPs, sample work, limited access, daily review, and a simple scorecard so quality is easy to see.' },
  { step: '4', title: 'Scale what works', body: 'Once the first tasks are stable, add more work, better reporting, and stronger delegation without guessing.' },
] as const;

export const staffingFitNote = 'Every staffing plan depends on role scope, schedule, skills, tools, and management needs. Send the role details and our staffing team can guide the best fit.';
