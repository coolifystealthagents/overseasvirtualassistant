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
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'virtual-assistant-planning',
    title: 'What does an overseas virtual assistant cost?',
    excerpt: 'A plain guide to role scope, staffing models, and cost factors to check before you hire.',
    minutes: 8,
    updated: '2026-07-19',
    takeaways: [
      'Budget around the role, Philippines-based schedule, English needs, and management support.',
      'Ask for a custom quote instead of guessing from public rate lists.',
      'A low rate can cost more when the work needs heavy correction.',
    ],
    sections: [
      { heading: 'Build the quote around the role', body: 'One rate cannot cover every Filipino assistant role. Admin support, customer service, and bookkeeping prep need different skills and controls. Ask for a custom quote based on the work, hours, Philippines-based shift, tools, and support included.' },
      { heading: 'What changes the cost', body: 'Costs usually rise when the work needs live calls, strong writing, software knowledge, weekend coverage, or a manager who checks quality. A solo freelancer may charge less. A managed service may charge more because screening, backup, and replacement help are included.', bullets: ['Live phone work usually needs more support than back-office work.', 'Part-time help can have a higher published rate than full-time help.', 'Specialized tools like Shopify, HubSpot, QuickBooks, or property CRMs can raise the rate.'] },
      { heading: 'Build the monthly budget', body: 'Do not copy a rate from a blog and treat it as a quote. Build the budget from the actual role: hours, tools, Philippines-based schedule, manager support, and replacement coverage. Always ask what is included: recruiting, payroll, manager review, replacement, and training support.' },
      { heading: 'Count the owner review time', body: 'A low published rate can become expensive if the owner must rewrite every reply or chase every task. Set aside review time during the first task lane. Reduce that time only after the Filipino assistant can follow the examples and escalation rules without repeated correction.' },
    ],
    faqs: [
      { question: 'Is an overseas VA always cheaper than a local employee?', answer: 'Direct labor costs are often lower, but you still need training, tools, management, and quality checks.' },
      { question: 'Should I hire hourly or monthly?', answer: 'Use hourly help for a pilot or uneven work. Use monthly help when you have steady tasks and want a stable schedule.' },
      { question: 'How should I set a first budget?', answer: 'Price one clear role with a defined shift and task list. Add the tools and owner review time, then compare quotes on the same scope.' },
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
    takeaways: ['Start with work that repeats.', 'Keep final decisions with the owner until the process is proven.', 'Give examples before you expect speed.'],
    sections: [
      { heading: 'Pick boring work first', body: 'The best first tasks are often boring. That is good. Boring work is easier to explain, measure, and improve. Start with inbox sorting, calendar cleanup, CRM updates, lead follow-up reminders, simple research, customer reply drafts, order updates, and file cleanup.' },
      { heading: 'Use a simple risk test', body: 'Ask one question before you hand off a task: what happens if this is done wrong? If the answer is lost money, legal risk, angry customers, or private data exposure, keep the final step with a manager until the assistant proves the process.', bullets: ['Low risk: tagging emails, updating fields, preparing draft replies.', 'Medium risk: sending approved replies, booking meetings, calling leads with a script.', 'High risk: refunds, legal advice, payments, medical details, final sales promises.'] },
      { heading: 'Build a short starter list', body: 'Write down the tasks that happen again and again. Next to each one, add the tool, due time, good example, and success rule. This turns a vague job post into a role a Filipino assistant can understand.' },
      { heading: 'Add work slowly', body: 'Do not hand over your full business in week one. Give the assistant a tight first lane. Review work daily for the first week. If quality is good, add one new task family at a time.' },
    ],
    faqs: [
      { question: 'Can an overseas VA answer customer emails?', answer: 'Yes, if you give approved reply examples, refund rules, and escalation rules.' },
      { question: 'Should a VA handle passwords?', answer: 'Use a password manager and least-access permissions. Do not send passwords in chat.' },
      { question: 'How many tasks should I start with?', answer: 'Start with one small group of related tasks. Add more only after the first work is accurate and the handoff is easy to review.' },
    ],
    sources: [
      { name: 'NIST Cybersecurity Framework', url: 'https://www.nist.gov/cyberframework', note: 'Helpful reference for access control and security habits.' },
      { name: 'CISA secure accounts guidance', url: 'https://www.cisa.gov/secure-our-world/use-strong-passwords', note: 'Reference for password manager and MFA basics.' },
    ],
  },
  {
    slug: 'virtual-assistant-vs-employee',
    title: 'Virtual assistant vs employee: which is better?',
    excerpt: 'When to hire in-house and when a managed Filipino assistant may fit the work better.',
    minutes: 8,
    updated: '2026-07-19',
    takeaways: ['Use an employee for sensitive, onsite, or decision-heavy work.', 'Use a VA for repeatable remote support with clear steps.', 'A managed VA service can reduce hiring and replacement work.'],
    sections: [
      { heading: 'Choose based on the work, not the label', body: 'A virtual assistant is not a magic fix. An employee is not always the better hire. The right choice depends on task risk, schedule, training time, and how much control you need.' },
      { heading: 'When an employee fits better', body: 'Hire an employee when the role needs in-person work, deep company judgment, sensitive decisions, or constant same-room teamwork. A local employee may also fit better when the work changes every hour and cannot be written into simple steps.' },
      { heading: 'When a VA fits better', body: 'Use a VA when the work is remote, repeatable, and easy to check. Examples include inbox sorting, scheduling, CRM cleanup, lead follow-up, customer support drafts, reporting, data entry, and vendor coordination.' },
      { heading: 'Managed service vs solo freelancer', body: 'A solo Filipino freelancer can fit if you have time to screen, train, and manage. A managed Philippines staffing service may suit teams that want help with matching, attendance, quality review, and replacement. Ask who does each job before you sign.' },
    ],
    faqs: [
      { question: 'Can a VA replace a full employee?', answer: 'Sometimes, but it is safer to start with a narrow role and grow after proof.' },
      { question: 'What if I need US time-zone coverage?', answer: 'Use a Philippines-based night shift, split shift, or managed team with a clear coverage plan.' },
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
    excerpt: 'A first-week checklist for accounts, task notes, review calls, security, and work samples.',
    minutes: 9,
    updated: '2026-07-19',
    takeaways: ['Prepare tools and examples before day one.', 'Check work daily in week one.', 'Use one scorecard so feedback is clear.'],
    sections: [
      { heading: 'Before day one', body: 'Write the role in plain words. List the first task lane, tools, examples, and rules. Create a shared folder for task notes. Set up a password manager. Decide what the Filipino assistant can see and what stays private.' },
      { heading: 'Day one setup', body: 'Hold a short kickoff call. Walk through the role, the tools, the daily done list, and the escalation rules. Show one real example. Ask the assistant to repeat the task back in their own words.' },
      { heading: 'Week one quality checks', body: 'Review work every day in week one. Pick five samples and score them as good, needs fix, or stop. Give clear notes. For example: "Use this reply when the customer asks for shipping status. Send refund requests back to me."' },
      { heading: 'Move from training to steady work', body: 'At the end of week one, remove tasks that are not ready, keep tasks that are working, and add one new task family if the first lane is stable. Use the same weekly scorecard each Friday.' },
    ],
    faqs: [
      { question: 'How long should onboarding take?', answer: 'It depends on the work, tools, access, and review needs. Keep the first lane small and expand it after the work meets your examples.' },
      { question: 'What should be in the first SOP?', answer: 'Goal, tool, steps, example, due time, quality rule, and escalation rule.' },
      { question: 'How do I give feedback?', answer: 'Use short notes tied to examples. Show the desired version instead of only saying the work is wrong.' },
    ],
    sources: [
      { name: 'NIST identity and access basics', url: 'https://www.nist.gov/identity-access-management', note: 'Reference for account access and identity controls.' },
      { name: 'CISA multifactor authentication guidance', url: 'https://www.cisa.gov/MFA', note: 'Use for simple MFA setup reminders.' },
    ],
  },
];

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
