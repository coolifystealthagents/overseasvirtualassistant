type Guide = {
  fit: string;
  example: { title: string; request: string; preparation: string; owner: string };
  inputs: readonly string[];
  outputs: readonly string[];
  boundary: string;
  launch: readonly [string, string, string];
  question: string;
  answer: string;
};

export const serviceGuides: Record<string, Guide> = {
  'executive-assistance': {
    fit: 'For leaders who need a dependable daily brief, meeting coordination and visible follow-through.',
    example: { title: 'A full day with three open decisions', request: 'A leader starts the day with meeting changes, unanswered requests and several promised follow-ups.', preparation: 'The assistant checks the calendar and source notes, prepares a priority brief and drafts the next actions.', owner: 'The executive sets priorities and approves any change that affects a sensitive meeting or commitment.' },
    inputs: ['Working preferences and priority rules', 'Calendar and briefing sources', 'A named approval route'],
    outputs: ['Daily brief with open decisions', 'Prepared meetings and follow-ups', 'Updated owner and due-point record'],
    boundary: 'The assistant organizes and prepares. The executive decides priorities, sensitive messages and new commitments.',
    launch: ['Agree the daily brief format and which decisions stay with the executive.', 'Start with one calendar and a short list of recurring follow-ups.', 'Review the brief and missed handoffs together before adding work.'],
    question: 'Can one assistant manage every executive request?', answer: 'Start with the repeatable requests that have clear rules. Expand only when workload, access and approval paths remain manageable.',
  },
  'calendar-and-inbox-management': {
    fit: 'For teams whose meetings and important messages compete for attention across the day.',
    example: { title: 'A meeting request buried in the inbox', request: 'A partner asks for time during a protected work block while a customer message needs a prompt reply.', preparation: 'The assistant categorizes the messages, checks scheduling rules and drafts options and a routine response.', owner: 'The manager chooses whether to release the focus block and approves any consequential reply.' },
    inputs: ['Priority labels and approved reply examples', 'Working hours and time-zone rules', 'A list of messages and meetings needing approval'],
    outputs: ['Prioritized inbox queue', 'Prepared invitations and draft replies', 'Conflict and exception list'],
    boundary: 'A free calendar slot or a draft email does not give the assistant authority to accept a priority change or make a promise.',
    launch: ['Define the priority categories and calendar rules.', 'Run draft-only handling for a representative week.', 'Review missed priorities, scheduling conflicts and reply accuracy.'],
    question: 'Can the assistant send replies without review?', answer: 'Only routine replies covered by approved language and a written sending rule. Sensitive or commitment-making messages stay with the owner.',
  },
  'travel-and-expense-support': {
    fit: 'For travelers who need current options, coherent itineraries and expense records prepared for review.',
    example: { title: 'A trip changes after a meeting moves', request: 'A flight option no longer fits the revised meeting time and several receipts are still unfiled.', preparation: 'The assistant compares new routes, checks local times and fare conditions, and updates the draft itinerary and receipt record.', owner: 'The traveler selects and pays for travel; the finance owner approves expense treatment.' },
    inputs: ['Travel policy and traveler preferences', 'Approved booking sources and budget limits', 'Expense categories and purchaser contact'],
    outputs: ['Dated comparison of options', 'Draft itinerary with transfer buffers', 'Expense packet with source receipts'],
    boundary: 'The assistant does not purchase travel, approve reimbursement or interpret immigration and health rules as advice.',
    launch: ['Record traveler preferences, spend limits and purchase owner.', 'Prepare one trip and one expense packet without payment access.', 'Check names, local times, confirmations and receipts with the owner.'],
    question: 'Will quoted prices still be available?', answer: 'Prices and availability can change. The assistant should timestamp options and recheck them before the traveler approves a purchase.',
  },
  'real-estate-virtual-assistance': {
    fit: 'For property teams with approved listing facts, recurring viewing requests and document follow-up.',
    example: { title: 'A viewing request with missing property details', request: 'A prospect asks for a viewing while the listing record has an unconfirmed availability note.', preparation: 'The assistant checks the approved listing source, prepares the scheduling options and flags the disputed detail.', owner: 'The agent or property manager confirms availability and any transaction statement before it is sent.' },
    inputs: ['Approved property facts and listing source', 'Viewing rules and team availability', 'Document and transaction escalation contacts'],
    outputs: ['Current listing updates with source notes', 'Prepared viewing schedule', 'Missing-document and exception log'],
    boundary: 'Pricing, legal statements, offers and transaction decisions stay with the licensed or authorized property team.',
    launch: ['Choose the authoritative listing and viewing rules.', 'Start with routine updates and a small set of requests.', 'Audit facts, appointment confirmations and routed transaction questions.'],
    question: 'Can the assistant answer offer questions?', answer: 'The assistant can collect the question and route it with context. An authorized property professional handles terms and advice.',
  },
  'ecommerce-virtual-assistance': {
    fit: 'For stores with frequent product updates, order questions and returns that follow written policy.',
    example: { title: 'An order arrives with a damaged item', request: 'A customer asks for an update and a return after reporting damage.', preparation: 'The assistant checks the order record, provides approved status information and prepares a return request with the evidence required by policy.', owner: 'The store owner decides any refund, credit or exception outside the written return rule.' },
    inputs: ['Product and order sources', 'Approved customer response library', 'Return and refund decision rules'],
    outputs: ['Updated store records', 'Order-status responses', 'Return review queue with evidence'],
    boundary: 'The assistant does not invent stock status, promise delivery dates or approve unsupported refunds.',
    launch: ['Define product, order and return source systems.', 'Start with routine record updates and status questions.', 'Review incorrect listings, delayed updates and return exceptions.'],
    question: 'Can the assistant approve returns?', answer: 'Only if a written rule grants that exact routine action. Other cases should be prepared for the store owner.',
  },
  'medical-administrative-assistance': {
    fit: 'For practices with documented scheduling and non-clinical intake processes.',
    example: { title: 'An appointment request with a clinical question', request: 'A patient asks for an available visit and mentions symptoms in the same message.', preparation: 'The assistant uses scheduling rules, collects only approved administrative details and routes the clinical question to authorized staff.', owner: 'Clinical staff assess symptoms, urgency and care decisions.' },
    inputs: ['Scheduling rules and approved intake fields', 'Privacy and access procedures', 'Clinical and urgent escalation contacts'],
    outputs: ['Prepared appointment records', 'Administrative intake notes', 'Clinical questions routed to staff'],
    boundary: 'The assistant does not triage symptoms, give medical advice or access records beyond the approved administrative role.',
    launch: ['Document appointment types, privacy limits and escalation contacts.', 'Begin with routine scheduling requests only.', 'Review records for correct times, minimal data and clinical handoffs.'],
    question: 'Can the assistant answer a medical question?', answer: 'No. It should preserve the patientâ€™s question and route it through the practiceâ€™s clinical process.',
  },
  'legal-administrative-assistance': {
    fit: 'For legal teams that need matter records, calendars and document requests kept organized.',
    example: { title: 'A filing date needs a second check', request: 'A new matter document references a date that differs from the team calendar.', preparation: 'The assistant records the discrepancy, organizes the file and prepares a reminder for attorney review.', owner: 'The attorney confirms the controlling deadline and any legal action.' },
    inputs: ['Matter naming and access rules', 'Attorney-approved calendar sources', 'Document request and review process'],
    outputs: ['Organized matter records', 'Prepared appointment and document requests', 'Deadline exception list'],
    boundary: 'The assistant does not interpret law, calculate an unverified deadline or send legal advice.',
    launch: ['Agree matter access, naming and calendar sources.', 'Start with one repeatable file and scheduling lane.', 'Review permissions, document completeness and date discrepancies.'],
    question: 'Can the assistant calculate filing deadlines?', answer: 'It can record dates from an approved source and flag conflicts. An attorney confirms the controlling deadline.',
  },
  'podcast-administration': {
    fit: 'For producers coordinating guests, recordings and approved episode assets.',
    example: { title: 'A guest reschedules near release day', request: 'A guest changes availability while the episode checklist still has unapproved artwork.', preparation: 'The assistant checks the production calendar, drafts new recording options and updates the asset checklist.', owner: 'The producer approves the schedule and publication of the final episode.' },
    inputs: ['Guest communication templates', 'Recording and release calendar', 'Asset approval and publishing checklist'],
    outputs: ['Confirmed guest schedule', 'Episode asset tracker', 'Open approval and release notes'],
    boundary: 'The assistant does not publish unapproved content, promise release dates or grant rights not confirmed by the producer.',
    launch: ['Document guest, recording and asset approval rules.', 'Run one episode through a shared checklist.', 'Review missing approvals and late handoffs before adding shows.'],
    question: 'Can the assistant publish an episode?', answer: 'Only after the producer has approved the final assets and granted a documented publishing action.',
  },
  'recruiting-coordination': {
    fit: 'For recruiting teams handling repeatable interview logistics and candidate record updates.',
    example: { title: 'An interview panel needs a new time', request: 'A candidate cannot attend the proposed slot and one panel member has not responded.', preparation: 'The assistant checks availability, prepares alternatives and updates the applicant record and feedback request.', owner: 'The hiring team chooses the interview plan and makes all evaluation and employment decisions.' },
    inputs: ['Interview stages and scheduling rules', 'Approved candidate communications', 'Applicant system access and feedback owners'],
    outputs: ['Confirmed interview schedule', 'Current candidate records', 'Missing-feedback follow-up list'],
    boundary: 'The assistant does not evaluate candidates, reject applicants or make an offer.',
    launch: ['Map interview stages and communication approvals.', 'Coordinate a small interview batch with one hiring team.', 'Review scheduling errors, candidate messages and missing feedback.'],
    question: 'Can the assistant screen candidates?', answer: 'This lane covers administration. Candidate assessment requires a separately defined, authorized process.',
  },
  'research-and-data-support': {
    fit: 'For teams that need traceable research and cleaner records before a decision.',
    example: { title: 'Two sources disagree on a company record', request: 'A research list contains a missing field and conflicting facts from two sources.', preparation: 'The assistant records both sources, dates and the discrepancy without filling the gap by guesswork.', owner: 'The analyst or manager decides which evidence is sufficient for the record or recommendation.' },
    inputs: ['Question, scope and accepted source types', 'Field definitions and source-of-truth rules', 'Reviewer and citation standard'],
    outputs: ['Source-linked research notes', 'Cleaned record set with change log', 'Discrepancy and missing-value queue'],
    boundary: 'The assistant does not invent facts, treat uncertain data as verified or make regulated professional recommendations.',
    launch: ['Define the research question and data fields.', 'Prepare one bounded source and cleanup batch.', 'Review citations, conflicting values and sample changes together.'],
    question: 'Is the research ready to publish?', answer: 'It is a review packet. The subject owner verifies material claims and approves any public conclusion.',
  },
};
