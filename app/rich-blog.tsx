import { JsonLd } from './components';
import { site } from './data';

export const nightShiftSlug = 'philippines-virtual-assistant-night-shift-guide';

const sources = [
  {
    name: 'World Health Organization and International Labour Organization, 17 May 2021',
    url: 'https://www.who.int/news/item/17-05-2021-long-working-hours-increasing-deaths-from-heart-disease-and-stroke-who-ilo',
    note: 'Joint estimates on long hours, stroke, heart disease, and the need for limits on working time.',
  },
  {
    name: 'U.S. Occupational Safety and Health Administration, Worker Fatigue',
    url: 'https://www.osha.gov/worker-fatigue',
    note: 'Background on night work, irregular shifts, fatigue, and accident risk.',
  },
  {
    name: 'International Labour Organization, Working Time and Work-Life Balance Around the World, 2022',
    url: 'https://www.ilo.org/publications/working-time-and-work-life-balance-around-world',
    note: 'Global report on working time, rest, flexible schedules, and work-life balance.',
  },
  {
    name: 'NIST Special Publication 800-46 Revision 2, July 2016',
    url: 'https://csrc.nist.gov/pubs/sp/800/46/r2/final',
    note: 'Security guidance for enterprise telework and remote access.',
  },
  {
    name: 'CISA, Turn On Multifactor Authentication',
    url: 'https://www.cisa.gov/secure-our-world/turn-mfa',
    note: 'Plain guidance for adding a second sign-in step to work accounts.',
  },
  {
    name: 'CISA, Use Strong Passwords',
    url: 'https://www.cisa.gov/secure-our-world/use-strong-passwords',
    note: 'Guidance on unique passwords and password managers.',
  },
  {
    name: 'Republic Act No. 10173, Data Privacy Act of 2012',
    url: 'https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html',
    note: 'Philippine law requiring reasonable organizational, physical, and technical measures for personal information.',
  },
];

const banners = [
  {
    label: 'Role planning',
    title: 'Map the overnight lane before you recruit.',
    text: 'List the queue, shift, tools, and owner-only calls first. A clear lane makes interviews and the first week much easier to judge.',
    href: '/services/executive-assistance',
    link: 'See executive assistant support',
  },
  {
    label: 'Handoff check',
    title: 'Test the plan with one real night.',
    text: 'Give the assistant a small live queue and review the morning record. Fix the rules before you add more customer or account access.',
    href: '/blog',
    link: 'Use the onboarding checklist',
  },
  {
    label: 'Staffing request',
    title: 'Bring the actual work to the call.',
    text: 'Share the coverage window, task list, tools, and escalation owner. The staffing discussion can then stay on fit rather than broad claims.',
    href: '/contact',
    link: 'Plan a Philippines-based role',
  },
];

export const nightShiftMeta = {
  title: 'How to manage a Philippines virtual assistant night shift',
  description: 'A practical guide to overnight coverage, handoffs, fatigue controls, secure access, and morning review for a Filipino virtual assistant.',
  updated: '2026-07-25',
  minutes: 12,
};

function ArticleBanner({ index }: { index: number }) {
  const banner = banners[index];
  return <aside className="rich-banner" data-article-banner={index + 1} aria-label={`${banner.label}: ${banner.title}`}>
    <p className="eyebrow">{banner.label}</p>
    <h2>{banner.title}</h2>
    <p>{banner.text}</p>
    <a className="btn primary" href={banner.href}>{banner.link}</a>
  </aside>;
}

function RiskChart() {
  return <figure className="rich-visual" data-rich-chart="long-hours-risk">
    <svg viewBox="0 0 760 360" role="img" aria-labelledby="risk-chart-title risk-chart-desc">
      <title id="risk-chart-title">Estimated health risk increase when working 55 or more hours per week</title>
      <desc id="risk-chart-desc">Horizontal bars show a 35 percent higher stroke risk and a 17 percent higher risk of dying from ischemic heart disease compared with working 35 to 40 hours per week.</desc>
      <rect width="760" height="360" rx="24" fill="#071b2d" />
      <text x="44" y="52" fill="#ffffff" fontSize="22" fontWeight="700">Risk increase at 55+ hours per week</text>
      <text x="44" y="82" fill="#b9d4e8" fontSize="14">Compared with 35-40 hours per week</text>
      <text x="44" y="142" fill="#ffffff" fontSize="16">Stroke</text>
      <rect x="190" y="119" width="455" height="38" rx="8" fill="#173a50" />
      <rect x="190" y="119" width="398" height="38" rx="8" fill="#38bdf8" />
      <text x="604" y="145" fill="#ffffff" fontSize="19" fontWeight="700">35%</text>
      <text x="44" y="221" fill="#ffffff" fontSize="16">Heart disease death</text>
      <rect x="190" y="198" width="455" height="38" rx="8" fill="#173a50" />
      <rect x="190" y="198" width="193" height="38" rx="8" fill="#4ade80" />
      <text x="399" y="224" fill="#ffffff" fontSize="19" fontWeight="700">17%</text>
      <line x1="190" y1="278" x2="645" y2="278" stroke="#7da6bf" />
      <text x="186" y="302" fill="#b9d4e8" fontSize="13">0%</text>
      <text x="299" y="302" fill="#b9d4e8" fontSize="13">10%</text>
      <text x="413" y="302" fill="#b9d4e8" fontSize="13">20%</text>
      <text x="527" y="302" fill="#b9d4e8" fontSize="13">30%</text>
      <text x="629" y="302" fill="#b9d4e8" fontSize="13">40%</text>
      <text x="44" y="335" fill="#9fc0d5" fontSize="12">Unit: relative risk increase. Source: WHO/ILO joint estimates published 17 May 2021.</text>
    </svg>
    <figcaption><strong>Method note:</strong> The bars reproduce the relative risk increases reported by WHO and ILO for people working at least 55 hours a week. They do not measure the effect of night work alone or predict one assistant's health.</figcaption>
  </figure>;
}

function HandoffGraphic() {
  return <figure className="rich-visual" data-rich-graphic="overnight-handoff-loop">
    <svg viewBox="0 0 760 430" role="img" aria-labelledby="handoff-title handoff-desc">
      <title id="handoff-title">Three-part overnight handoff loop</title>
      <desc id="handoff-desc">The owner sends a scoped queue, the Philippines-based assistant completes approved work and flags exceptions, and the owner reviews the morning record.</desc>
      <rect width="760" height="430" rx="24" fill="#f0f9ff" />
      <text x="380" y="52" textAnchor="middle" fill="#082f49" fontSize="23" fontWeight="700">The overnight handoff loop</text>
      <rect x="55" y="105" width="190" height="180" rx="18" fill="#ffffff" stroke="#0ea5e9" strokeWidth="3" />
      <circle cx="150" cy="140" r="22" fill="#0ea5e9" /><text x="150" y="148" textAnchor="middle" fill="#fff" fontSize="22" fontWeight="700">1</text>
      <text x="150" y="185" textAnchor="middle" fill="#082f49" fontSize="18" fontWeight="700">Owner sends</text>
      <text x="150" y="218" textAnchor="middle" fill="#334155" fontSize="14">Queue, examples, limits</text>
      <text x="150" y="242" textAnchor="middle" fill="#334155" fontSize="14">and named escalation owner</text>
      <rect x="285" y="105" width="190" height="180" rx="18" fill="#ffffff" stroke="#16a34a" strokeWidth="3" />
      <circle cx="380" cy="140" r="22" fill="#16a34a" /><text x="380" y="148" textAnchor="middle" fill="#fff" fontSize="22" fontWeight="700">2</text>
      <text x="380" y="185" textAnchor="middle" fill="#14532d" fontSize="18" fontWeight="700">Assistant works</text>
      <text x="380" y="218" textAnchor="middle" fill="#334155" fontSize="14">Complete approved tasks</text>
      <text x="380" y="242" textAnchor="middle" fill="#334155" fontSize="14">and park exceptions</text>
      <rect x="515" y="105" width="190" height="180" rx="18" fill="#ffffff" stroke="#f59e0b" strokeWidth="3" />
      <circle cx="610" cy="140" r="22" fill="#f59e0b" /><text x="610" y="148" textAnchor="middle" fill="#fff" fontSize="22" fontWeight="700">3</text>
      <text x="610" y="185" textAnchor="middle" fill="#78350f" fontSize="18" fontWeight="700">Owner reviews</text>
      <text x="610" y="218" textAnchor="middle" fill="#334155" fontSize="14">Check the morning record</text>
      <text x="610" y="242" textAnchor="middle" fill="#334155" fontSize="14">and answer exceptions</text>
      <path d="M245 195 H275" stroke="#64748b" strokeWidth="4" /><path d="M267 186 L278 195 L267 204" fill="none" stroke="#64748b" strokeWidth="4" />
      <path d="M475 195 H505" stroke="#64748b" strokeWidth="4" /><path d="M497 186 L508 195 L497 204" fill="none" stroke="#64748b" strokeWidth="4" />
      <path d="M610 305 C610 365 150 365 150 305" fill="none" stroke="#64748b" strokeWidth="4" strokeDasharray="8 7" />
      <path d="M140 314 L150 302 L160 314" fill="none" stroke="#64748b" strokeWidth="4" />
      <text x="380" y="398" textAnchor="middle" fill="#334155" fontSize="15">The morning review changes the next queue, not yesterday's record.</text>
    </svg>
    <figcaption>This loop keeps a Filipino assistant moving without giving away owner decisions. The written morning record also shows where the task rules need work.</figcaption>
  </figure>;
}

export function NightShiftArticle() {
  const canonical = `${site.url}/blog/${nightShiftSlug}`;
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: nightShiftMeta.title,
    description: nightShiftMeta.description,
    datePublished: nightShiftMeta.updated,
    dateModified: nightShiftMeta.updated,
    author: { '@type': 'Organization', name: site.brand, url: site.url },
    publisher: { '@type': 'Organization', name: site.brand, url: site.url },
    mainEntityOfPage: canonical,
    citation: sources.map((source) => source.url),
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${site.url}/blog` },
      { '@type': 'ListItem', position: 3, name: nightShiftMeta.title, item: canonical },
    ],
  };

  return <>
    <JsonLd data={articleSchema} />
    <JsonLd data={breadcrumbSchema} />
    <article className="container article rich-article" data-article-root="night-shift-guide">
      <p className="eyebrow">Philippines staffing guide</p>
      <h1>{nightShiftMeta.title}</h1>
      <p className="lead">A night shift can give a US team live coverage while the owner sleeps. It needs a tight queue, safe hours, and a clear stop rule for the Filipino assistant.</p>
      <div className="meta-row"><span>{nightShiftMeta.minutes} min read</span><span>Updated {nightShiftMeta.updated}</span></div>

      <section className="card takeaways">
        <h2>Start with these rules</h2>
        <ul className="list">
          <li>Set a fixed coverage window and protect real breaks.</li>
          <li>Send one written queue with examples, limits, and an escalation owner.</li>
          <li>Let the assistant prepare and respond inside approved rules, while the owner keeps exceptions and risky decisions.</li>
          <li>Review the morning record before adding more work or access.</li>
        </ul>
      </section>

      <section className="card article-block">
        <h2>A night shift is a coverage plan, not a vague job perk</h2>
        <p>Start with the hours when a customer, lead, or internal team member truly needs a live reply. A full US business day may make sense for phone support, but inbox cleanup or report prep may need only a short overlap window.</p>
        <p>Write the start time, finish time, meal break, short breaks, and handoff time in both time zones. Keep the hours stable when you can, because a person who flips between day and night work has a harder schedule to plan around.</p>
        <p>Do not fill every minute just because the assistant is online. Leave room for notes, a break after a hard customer call, and the end-of-shift record that your daytime team will use.</p>
      </section>

      <RiskChart />

      <section className="card article-block">
        <h2>Use the health data as a limit, not a sales claim</h2>
        <p>WHO and ILO reported in 2021 that long working hours led to an estimated 745,000 deaths from stroke and ischemic heart disease in 2016, which was 29% more than in 2000. Their analysis also linked at least 55 hours a week with a 35% higher stroke risk and a 17% higher risk of dying from ischemic heart disease than 35 to 40 hours a week.</p>
        <p>Those figures cover long hours, not Filipino virtual assistants as a group. They still give a manager a plain reason to control overtime, protect days off, and avoid treating overnight availability as permission to keep adding work.</p>
        <p>OSHA says almost 15 million US workers work full time on evening, night, rotating, or other irregular shifts. OSHA also warns that these schedules may cause fatigue and raise accident risk.</p>
      </section>

      <blockquote className="expert-quote" data-expert-quote="who-maria-neira">
        <p>"Working 55 hours or more per week is a serious health hazard."</p>
        <cite>Dr Maria Neira, Director, Department of Environment, Climate Change and Health, World Health Organization, 17 May 2021</cite>
      </blockquote>

      <ArticleBanner index={0} />

      <section className="card article-block">
        <h2>Build one queue that can survive while you sleep</h2>
        <p>A useful queue says what to do first, what good work looks like, and when to stop. Put the due time, customer promise, source file, and approval limit beside each task so the assistant does not have to hunt through chat.</p>
        <p>For customer support, the approved lane might include shipping updates, account questions, appointment moves, and reply drafts. Refund exceptions, threats, legal complaints, payment changes, and promises outside policy should wait for the named owner.</p>
        <p>For an executive assistant, the lane may cover inbox sorting, calendar holds, travel research, and meeting notes. The owner should still approve payments, contract terms, personal commitments, and any message that creates a new obligation.</p>
      </section>

      <section className="wide-table-wrap card" data-rich-table="night-shift-ownership">
        <h2>Night shift ownership table</h2>
        <table>
          <caption>Example split for a Philippines-based assistant covering a US team</caption>
          <thead><tr><th scope="col">Work lane</th><th scope="col">Assistant can complete</th><th scope="col">Send to the owner</th><th scope="col">Morning proof</th></tr></thead>
          <tbody>
            <tr><th scope="row">Customer inbox</th><td>Use approved replies and update ticket fields.</td><td>Policy exceptions, threats, and large service failures.</td><td>Open list, handled list, and flagged cases.</td></tr>
            <tr><th scope="row">Lead follow-up</th><td>Send approved reminders and book open calendar slots.</td><td>New promises, unusual terms, and qualification calls.</td><td>Contacted leads, replies, bookings, and next dates.</td></tr>
            <tr><th scope="row">Executive admin</th><td>Sort messages, hold times, and prepare meeting notes.</td><td>Money, contracts, personal promises, and priority conflicts.</td><td>Calendar changes, waiting items, and owner questions.</td></tr>
            <tr><th scope="row">Store operations</th><td>Check orders, update records, and answer standard status questions.</td><td>Fraud signs, unusual refunds, chargebacks, and account access changes.</td><td>Order exceptions, customer follow-ups, and stock flags.</td></tr>
          </tbody>
        </table>
      </section>

      <section className="card article-block">
        <h2>Make the handoff small enough to read</h2>
        <p>The owner should send one short opening note before the shift. It can name the top three outcomes, known risks, pending customer cases, and the person who can answer an urgent question.</p>
        <p>The assistant should close with one morning record rather than a trail of messages. Use four headings: done, waiting, blocked, and owner decision, then link each line to the ticket or source file.</p>
        <p>If a task does not fit those headings, the process may still be too loose. Fix the task rule before you solve the problem by adding meetings.</p>
      </section>

      <HandoffGraphic />

      <section className="card article-block">
        <h2>Use a copy-ready opening and closing note</h2>
        <p>The notes below are short on purpose. The assistant needs a working brief, while the owner needs a record that can be checked in a few minutes.</p>
        <div className="script-box">
          <h3>Owner's opening note</h3>
          <p>"Tonight's goal is [outcome], using these items: [links]. Complete [approved actions], send [exceptions] to [owner], and stop if [risk rule]."</p>
          <h3>Assistant's closing note</h3>
          <p>"Done or waiting: [links, result, and next time]. Blocked or owner decision: [reason, what I tried, question, deadline, and safe default]."</p>
        </div>
      </section>

      <ArticleBanner index={1} />

      <section className="card article-block">
        <h2>Give access by task, not by trust alone</h2>
        <p>A good interview does not replace account controls. NIST's telework guidance asks organizations to secure remote access devices and connections, while CISA recommends unique strong passwords, a password manager, and multifactor authentication.</p>
        <p>Create a named work account when the tool allows it, then give only the permissions needed for the first lane. Avoid shared owner logins, saved payment methods, full customer exports, and admin rights when a narrower role will work.</p>
        <p>The Philippine Data Privacy Act says a personal information controller must use reasonable and appropriate organizational, physical, and technical measures. A written access list, quick removal process, and record of who handled customer data help turn that broad duty into daily practice.</p>
      </section>

      <section className="card article-block">
        <h2>Run a seven-night pilot before calling the lane stable</h2>
        <p>On nights one and two, use a small queue with real but low-risk work. Review every item the next morning, and update the examples when the assistant made a reasonable choice that your notes did not cover.</p>
        <p>On nights three through five, add normal volume but keep the same decisions with the owner. Track missed due times, reopened items, unclear escalations, and work that needed a rewrite.</p>
        <p>On nights six and seven, check whether the handoff still works without extra chat. Keep the lane only if the work is accurate, the schedule is sustainable, and the morning review takes less effort than doing the queue yourself.</p>
      </section>

      <section className="card article-block">
        <h2>Use a scorecard that catches quiet problems</h2>
        <p>Count a small set of things tied to the role, such as replies checked, records completed, exceptions flagged, and items reopened. Do not reward speed by itself, because a fast wrong reply can create more work for the daytime team.</p>
        <p>Read five work samples each week and write one note about what should continue or change. If the same miss appears twice, repair the example, tool access, or approval rule before blaming effort.</p>
        <p>Attendance matters, but so does the pattern around it. Repeated late starts, missing breaks, silent overtime, or a growing morning backlog may show that the shift or workload needs to change.</p>
      </section>

      <section className="card article-block">
        <h2>Know when the manager needs to step back in</h2>
        <p>Take back the queue when customer harm, account risk, or fatigue is rising. A pause is cheaper than asking a tired assistant to push through a rule they no longer understand.</p>
        <p>Also step in when the assistant keeps waiting for decisions that arrive after the shift. The fix may be a narrower approval band, an on-call owner, or moving that task to a short overlap window.</p>
        <p>A Philippines night shift should not hide weak management. It should make ownership easier to see, because every open item has a person, a safe next step, and a time for review.</p>
      </section>

      <section className="card article-block">
        <h2>Questions to ask before hiring</h2>
        <ul className="list">
          <li>Which exact hours need live coverage, and which tasks can wait for an async shift?</li>
          <li>How does the staffing team plan breaks, days off, attendance cover, and schedule changes?</li>
          <li>Who answers an urgent question while the US owner is asleep?</li>
          <li>Which tools can use named accounts, limited roles, and multifactor authentication?</li>
          <li>What does the morning record show, and who checks it during the first week?</li>
          <li>How are access and open tasks handed back when a person leaves the role?</li>
        </ul>
      </section>

      <section className="card article-block">
        <h2>Related planning guides</h2>
        <p>Use the <a href="/blog">first-task guide</a> to narrow the queue, then use the <a href="/blog">assistant onboarding checklist</a> for the first week. Teams comparing the employment path can also read <a href="/blog">virtual assistant vs employee</a>.</p>
      </section>

      <section className="card article-block">
        <h2>Common questions</h2>
        <h3>Should a Filipino virtual assistant work the full US business day?</h3>
        <p>Only if the role truly needs that live window and the schedule includes protected breaks and clear limits. Many admin tasks can use a shorter overlap or an async shift instead.</p>
        <h3>Can the assistant make customer decisions overnight?</h3>
        <p>The assistant can act inside written rules that have already been approved. New promises, policy exceptions, money decisions, and risky customer cases should go to the named owner.</p>
        <h3>How much work belongs in the first night queue?</h3>
        <p>Use a small group of related tasks that can be checked the next morning. Add volume only after the examples, access, and escalation path work on real cases.</p>
        <h3>What if no manager is awake during the shift?</h3>
        <p>Give the assistant a safe stop rule and a clear way to park exceptions. If truly urgent decisions are common, schedule an on-call owner or move those tasks into an overlap window.</p>
      </section>

      <ArticleBanner index={2} />

      <section className="card article-block sources-list" data-numbered-sources="true">
        <h2>Sources</h2>
        <ol>{sources.map((source) => <li key={source.url}><a href={source.url}>{source.name}</a>. {source.note}</li>)}</ol>
      </section>
    </article>
  </>;
}
