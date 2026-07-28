export type Alternative = {
  slug: string;
  title: string;
  category: 'Hiring model' | 'Country comparison' | 'Schedule model';
  summary: string;
  bestFor: string;
  comparison: readonly [string, string, string][];
  checks: readonly string[];
  reviewed: string;
};

export const alternatives: Alternative[] = [
  {
    slug: 'managed-va-service-vs-freelance-marketplace',
    title: 'Managed VA Service vs. Freelance Marketplace',
    category: 'Hiring model',
    summary: 'Compare management support, candidate selection, replacement paths, and client-side oversight before choosing an overseas hiring model.',
    bestFor: 'Teams deciding whether they want provider-led staffing support or direct responsibility for selecting and managing an independent contractor.',
    comparison: [
      ['Selection', 'Provider presents role-matched candidates', 'Client searches and screens profiles'],
      ['Management', 'Support varies by provider and should be documented', 'Client usually owns day-to-day management'],
      ['Replacement', 'May be included under written terms', 'Client typically starts a new search'],
      ['Control', 'Shared between provider and client', 'Primarily client-owned'],
    ],
    checks: ['Ask who employs or contracts the worker.', 'Confirm exactly what screening, management, and replacement include.', 'Use the same paid work sample and scorecard for every candidate.'],
    reviewed: '2026-07-28',
  },
  {
    slug: 'philippines-va-vs-latin-america-va',
    title: 'Philippines VA vs. Latin America VA',
    category: 'Country comparison',
    summary: 'Compare time-zone overlap, shift design, language needs, hiring model, and management fit without treating nationality as proof of ability.',
    bestFor: 'US teams weighing daytime overlap against a planned Philippines evening or night shift.',
    comparison: [
      ['US overlap', 'Often requires an evening or night schedule in the Philippines', 'Often available during local daytime, depending on country'],
      ['Time zone', 'One national time zone', 'Varies across countries and regions'],
      ['Evaluation', 'Role test, references, workspace, and schedule', 'Role test, references, workspace, and schedule'],
      ['Decision basis', 'Candidate and operating plan', 'Candidate and operating plan'],
    ],
    checks: ['Write the exact working hours in both local and client time.', 'Assess language for the actual task, not by country label.', 'Verify power, connection, privacy, backup, and holiday coverage.'],
    reviewed: '2026-07-28',
  },
  {
    slug: 'night-shift-va-vs-async-va',
    title: 'Night-Shift VA vs. Asynchronous VA',
    category: 'Schedule model',
    summary: 'Choose between real-time coverage and handoff-based work by mapping response needs, meeting load, wellbeing, and review windows.',
    bestFor: 'Teams deciding which tasks truly require live US-hour coverage and which can move through written handoffs.',
    comparison: [
      ['Best for', 'Live inboxes, calls, and same-shift coordination', 'Research, preparation, documentation, and queued work'],
      ['Meetings', 'Can overlap with the US team', 'Kept to a narrow overlap window'],
      ['Handoff', 'End-of-shift status still required', 'Central operating mechanism'],
      ['Primary risk', 'Unsustainable or changing shift expectations', 'Unclear ownership and slow exception handling'],
    ],
    checks: ['Separate urgent response work from work that can wait.', 'Set response targets and escalation owners.', 'Review schedule sustainability during the paid trial.'],
    reviewed: '2026-07-28',
  },
];
