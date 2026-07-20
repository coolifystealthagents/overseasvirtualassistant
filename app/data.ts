export const site = {
  domain: 'OverseasVirtualAssistant.com',
  url: 'https://overseasvirtualassistant.com',
  slug: 'overseasvirtualassistant',
  brand: 'Overseas Virtual Assistant',
  primary: 'overseas virtual assistant',
  audience: 'companies considering overseas VA hiring for lower cost and wider coverage',
  angle: 'overseas VA hiring with cost ranges, country fit, time-zone planning, and quality controls',
  color: '#16a34a',
  accent: '#1d4ed8',
} as const;

export const roles = [
  { name: 'Executive assistant', fit: 'Calendar, inbox, travel, meeting notes, and daily admin follow-up.', guardrail: 'Keep money moves, legal calls, and final approvals with the owner.' },
  { name: 'Customer support assistant', fit: 'Ticket replies, order updates, simple refunds for review, and FAQ responses.', guardrail: 'Give clear rules for refunds, angry customers, and private customer data.' },
  { name: 'Lead follow-up assistant', fit: 'CRM updates, warm lead reminders, appointment booking, and quote follow-up.', guardrail: 'Use approved scripts. Do not promise price, delivery, or results without owner approval.' },
  { name: 'Operations assistant', fit: 'Reports, vendor updates, task tracking, SOP cleanup, and project reminders.', guardrail: 'Use weekly scorecards so small misses do not become quiet drift.' },
  { name: 'Bookkeeping support assistant', fit: 'Receipt sorting, invoice drafts, data entry, and report prep.', guardrail: 'Keep bank access, payments, tax advice, and final books review with a qualified owner.' },
  { name: 'CRM assistant', fit: 'Contact cleanup, pipeline notes, list hygiene, tagging, and simple dashboard prep.', guardrail: 'Limit export access and review records before campaigns go out.' },
] as const;

export const industries = ['real estate', 'healthcare offices', 'legal teams', 'ecommerce stores', 'coaches and agencies', 'home services'] as const;

export const stats = [
  { label: 'Typical overseas VA range', value: '$6-$18/hr', note: 'Common planning range for admin and support roles. Specialized work may cost more.' },
  { label: 'Common ramp time', value: '7-21 days', note: 'Faster when SOPs, tools, sample replies, and first-week calls are ready.' },
  { label: 'Best first handoff', value: '5-10 tasks', note: 'Small recurring work beats a vague all-in role.' },
] as const;

export const countryFits = [
  { country: 'Philippines', overlap: 'Good US evening and early morning coverage', bestFor: 'Customer support, admin, real estate coordination, ecommerce help', note: 'Strong English fit for many buyer-facing roles. Plan clear quiet hours and backup coverage.' },
  { country: 'Latin America', overlap: 'Strong US daytime overlap', bestFor: 'Sales support, client follow-up, inbox, scheduling, operations', note: 'Often a good choice when live calls and same-day owner review matter.' },
  { country: 'Eastern Europe', overlap: 'Better for UK/EU mornings and some US overlap', bestFor: 'Technical admin, research, operations, project support', note: 'Useful when the role needs deep focus and fewer live customer calls.' },
  { country: 'South Africa', overlap: 'Good UK/EU overlap and some US morning coverage', bestFor: 'Support, admin, writing support, and client coordination', note: 'Can work well for English-first customer communication.' },
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
  'Do a 15-minute monthly access review and remove tools the assistant no longer needs.',
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
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'virtual-assistant-costs',
    title: 'How much does an overseas virtual assistant cost?',
    excerpt: 'A plain guide to hourly, monthly, local, and overseas assistant pricing before you hire.',
    minutes: 8,
    updated: '2026-07-19',
    takeaways: [
      'Plan around role, country, schedule, English needs, and management support.',
      '$6-$18 per hour is a useful first planning range for many overseas admin and support roles.',
      'The cheapest rate is not always the lowest cost if you must spend hours fixing work.',
    ],
    sections: [
      { heading: 'Use a planning range, not one magic rate', body: 'Many owners ask for one rate. That is risky. A simple admin assistant, a customer support assistant, and a bookkeeping support assistant do not carry the same risk. Use $6-$18 per hour as a first planning range, then adjust for skill, hours, country, and how much support the provider gives.' },
      { heading: 'What changes the price', body: 'Price usually moves when the work needs live calls, strong writing, software knowledge, weekend coverage, or a manager who checks quality. A solo freelancer may cost less. A managed service may cost more because screening, backup, and replacement help are included.', bullets: ['Live phone work usually costs more than back-office work.', 'Part-time help can have a higher hourly rate than full-time help.', 'Specialized tools like Shopify, HubSpot, QuickBooks, or property CRMs can raise the rate.'] },
      { heading: 'Monthly budget examples', body: 'A 20-hour-per-week assistant at $8 per hour is about $640 for four weeks before fees. A 40-hour-per-week assistant at $12 per hour is about $1,920 for four weeks before fees. These are planning examples, not quotes. Always ask what is included: recruiting, payroll, manager review, replacement, and training support.' },
      { heading: 'Do not forget owner time', body: 'A low hourly rate can become expensive if the owner must rewrite every reply or chase every task. Add a weekly review block to your plan. In week one, expect more time. By week three, the assistant should need less repeat instruction if the scope is clear.' },
    ],
    faqs: [
      { question: 'Is an overseas VA always cheaper than a local employee?', answer: 'Usually the direct labor cost is lower, but you still need training, tools, management, and quality checks.' },
      { question: 'Should I hire hourly or monthly?', answer: 'Use hourly for a pilot or uneven work. Use monthly when you have steady tasks and want a stable schedule.' },
      { question: 'What is a safe first budget?', answer: 'Many teams start with 10-20 hours per week for one clear role, then grow after two to four weeks of good results.' },
    ],
    sources: [
      { name: 'U.S. Bureau of Labor Statistics', url: 'https://www.bls.gov/oes/current/oes436014.htm', note: 'Use as a local wage comparison point for secretaries and administrative assistants.' },
      { name: 'OECD time-use and work data', url: 'https://www.oecd.org/statistics/', note: 'Useful background for work-hour and labor-market comparison.' },
    ],
  },
  {
    slug: 'tasks-to-delegate-first',
    title: 'What tasks should you delegate to an overseas VA first?',
    excerpt: 'Start with repeatable admin, follow-up, inbox, CRM, and scheduling work before sensitive decisions.',
    minutes: 7,
    updated: '2026-07-19',
    takeaways: ['Start with tasks that repeat every day or week.', 'Keep final decisions with the owner until trust is proven.', 'Give examples before you expect speed.'],
    sections: [
      { heading: 'Pick boring work first', body: 'The best first tasks are often boring. That is good. Boring work is easier to explain, measure, and improve. Start with inbox sorting, calendar cleanup, CRM updates, lead follow-up reminders, simple research, customer reply drafts, order updates, and file cleanup.' },
      { heading: 'Use a simple risk test', body: 'Ask one question before you hand off a task: what happens if this is done wrong? If the answer is lost money, legal risk, angry customers, or private data exposure, keep the final step with a manager until the assistant proves the process.', bullets: ['Low risk: tagging emails, updating fields, preparing draft replies.', 'Medium risk: sending approved replies, booking meetings, calling leads with a script.', 'High risk: refunds, legal advice, payments, medical details, final sales promises.'] },
      { heading: 'Build a 10-task starter list', body: 'Write down 10 tasks that happen again and again. Next to each task, add the tool, due time, good example, and success rule. This turns a vague job post into a real assistant role.' },
      { heading: 'Add work slowly', body: 'Do not hand over your full business in week one. Give the assistant a tight first lane. Review work daily for the first week. If quality is good, add one new task family at a time.' },
    ],
    faqs: [
      { question: 'Can an overseas VA answer customer emails?', answer: 'Yes, if you give approved reply examples, refund rules, and escalation rules.' },
      { question: 'Should a VA handle passwords?', answer: 'Use a password manager and least-access permissions. Do not send passwords in chat.' },
      { question: 'How many tasks should I start with?', answer: 'Five to 10 recurring tasks is a safer start than one vague all-purpose role.' },
    ],
    sources: [
      { name: 'NIST Cybersecurity Framework', url: 'https://www.nist.gov/cyberframework', note: 'Helpful reference for access control and security habits.' },
      { name: 'CISA secure accounts guidance', url: 'https://www.cisa.gov/secure-our-world/use-strong-passwords', note: 'Reference for password manager and MFA basics.' },
    ],
  },
  {
    slug: 'virtual-assistant-vs-employee',
    title: 'Virtual assistant vs employee: which is better?',
    excerpt: 'When to hire in-house and when a managed overseas assistant is the safer first step.',
    minutes: 8,
    updated: '2026-07-19',
    takeaways: ['Use an employee for sensitive, onsite, or decision-heavy work.', 'Use a VA for repeatable remote support with clear steps.', 'A managed VA service can reduce hiring and replacement work.'],
    sections: [
      { heading: 'Choose based on the work, not the label', body: 'A virtual assistant is not a magic fix. An employee is not always the better hire. The right choice depends on task risk, schedule, training time, and how much control you need.' },
      { heading: 'When an employee fits better', body: 'Hire an employee when the role needs in-person work, deep company judgment, sensitive decisions, or constant same-room teamwork. A local employee may also fit better when the work changes every hour and cannot be written into simple steps.' },
      { heading: 'When a VA fits better', body: 'Use a VA when the work is remote, repeatable, and easy to check. Examples include inbox sorting, scheduling, CRM cleanup, lead follow-up, customer support drafts, reporting, data entry, and vendor coordination.' },
      { heading: 'Managed service vs solo freelancer', body: 'A solo freelancer can be a good fit if you have time to screen, train, and manage. A managed service can be safer if you want help with matching, backup, quality review, and replacement. Ask what management really means before you sign.' },
    ],
    faqs: [
      { question: 'Can a VA replace a full employee?', answer: 'Sometimes, but it is safer to start with a narrow role and grow after proof.' },
      { question: 'What if I need US time-zone coverage?', answer: 'Look at Latin America, split shifts, or a managed team with coverage planning.' },
      { question: 'What should stay in-house?', answer: 'Keep final approvals, payments, sensitive legal or medical decisions, and strategy with trusted owners.' },
    ],
    sources: [
      { name: 'U.S. Small Business Administration hiring guide', url: 'https://www.sba.gov/business-guide/manage-your-business/hire-manage-employees', note: 'Background for employee hiring duties and planning.' },
      { name: 'IRS worker classification guidance', url: 'https://www.irs.gov/businesses/small-businesses-self-employed/independent-contractor-defined', note: 'Reference point for worker-classification questions; ask a professional for advice.' },
    ],
  },
  {
    slug: 'assistant-onboarding-checklist',
    title: 'Overseas assistant onboarding checklist',
    excerpt: 'A simple first-week checklist for logins, SOPs, calls, QA, security, and scorecards.',
    minutes: 9,
    updated: '2026-07-19',
    takeaways: ['Prepare tools and examples before day one.', 'Check work daily in week one.', 'Use one scorecard so feedback is clear.'],
    sections: [
      { heading: 'Before day one', body: 'Write the role in plain words. List the first 5-10 tasks, tools, examples, and rules. Create a shared folder for SOPs. Set up a password manager. Decide what the assistant can see and what stays private.' },
      { heading: 'Day one setup', body: 'Hold a short kickoff call. Walk through the role, the tools, the daily done list, and the escalation rules. Show one real example. Ask the assistant to repeat the task back in their own words.' },
      { heading: 'Week one quality checks', body: 'Review work every day in week one. Pick five samples and score them as good, needs fix, or stop. Give clear notes. For example: “Use this reply when the customer asks for shipping status. Escalate refund requests over $50.”' },
      { heading: 'Move from training to steady work', body: 'At the end of week one, remove tasks that are not ready, keep tasks that are working, and add one new task family if the first lane is stable. Use the same weekly scorecard each Friday.' },
    ],
    faqs: [
      { question: 'How long should onboarding take?', answer: 'Simple roles can start in a few days, but most teams should plan 7-21 days for a clean ramp.' },
      { question: 'What should be in the first SOP?', answer: 'Goal, tool, steps, example, due time, quality rule, and escalation rule.' },
      { question: 'How do I give feedback?', answer: 'Use short notes tied to examples. Show the desired version instead of only saying the work is wrong.' },
    ],
    sources: [
      { name: 'NIST identity and access basics', url: 'https://www.nist.gov/identity-access-management', note: 'Reference for account access and identity controls.' },
      { name: 'CISA multifactor authentication guidance', url: 'https://www.cisa.gov/MFA', note: 'Use for simple MFA setup reminders.' },
    ],
  },
];
