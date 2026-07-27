import { JsonLd } from './components';
import { site } from './data';

export const accessHandoffSlug = 'philippines-virtual-assistant-secure-access-handoff';

const sources = [
  {
    name: 'Federal Trade Commission, New FTC Data Show a Big Jump in Reported Losses to Fraud to $12.5 Billion in 2024, 10 March 2025',
    url: 'https://www.ftc.gov/news-events/news/press-releases/2025/03/new-ftc-data-show-big-jump-reported-losses-fraud-125-billion-2024',
    note: 'United States consumer-report data used here as broad fraud context, not as a measure of Filipino assistants or remote staffing.',
  },
  {
    name: 'National Institute of Standards and Technology, SP 800-207 Zero Trust Architecture, August 2020',
    url: 'https://csrc.nist.gov/pubs/sp/800/207/final',
    note: 'Guidance on checking the user and device before access to a work resource is allowed.',
  },
  {
    name: 'National Institute of Standards and Technology, SP 800-46 Revision 2, Guide to Enterprise Telework, Remote Access, and BYOD Security, July 2016',
    url: 'https://csrc.nist.gov/pubs/sp/800/46/r2/final',
    note: 'Guidance for remote devices, connections, access servers, and telework security policy.',
  },
  {
    name: 'Cybersecurity and Infrastructure Security Agency, Turn On MFA',
    url: 'https://www.cisa.gov/secure-our-world/turn-mfa',
    note: 'Steps for adding a second identity check to work accounts.',
  },
  {
    name: 'Cybersecurity and Infrastructure Security Agency, Use Strong Passwords',
    url: 'https://www.cisa.gov/secure-our-world/use-strong-passwords',
    note: 'Advice on long, random, unique passwords and password managers.',
  },
  {
    name: 'Republic Act No. 10173, Data Privacy Act of 2012, Philippines',
    url: 'https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html',
    note: 'Section 20 requires reasonable and appropriate organizational, physical, and technical measures for personal information.',
  },
];

const banners = [
  {
    label: 'Access plan',
    title: 'List the work before you open the accounts.',
    text: 'Write down the first task lane and the records it needs. Give the Filipino assistant only the smallest role that can finish that work.',
    href: '/services/calendar-and-inbox-management',
    link: 'Review inbox support',
  },
  {
    label: 'First-week check',
    title: 'Test access with real, low-risk work.',
    text: 'Watch the first few sign-ins and review the record each morning. Remove any permission that the assistant did not need to finish the task.',
    href: '/blog/philippines-virtual-assistant-night-shift-guide',
    link: 'Plan the first handoff',
  },
  {
    label: 'Role planning',
    title: 'Bring the tool list to the staffing call.',
    text: 'Share the apps, task owners, sensitive records, and approval limits. The call can then stay on real role fit and safe account setup.',
    href: '/contact',
    link: 'Plan a Philippines-based role',
  },
];

export const accessHandoffMeta = {
  title: 'Secure account handoff for a Philippines virtual assistant',
  description: 'A practical access plan for Filipino virtual assistants, with named accounts, MFA, least-access roles, review logs, and a clean offboarding checklist.',
  updated: '2026-07-27',
  minutes: 13,
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

function FraudContextChart() {
  return <figure className="rich-visual" data-rich-chart="fraud-report-loss-share">
    <svg viewBox="0 0 760 380" role="img" aria-labelledby="fraud-chart-title fraud-chart-desc">
      <title id="fraud-chart-title">Share of United States fraud reports that included a monetary loss in 2023 and 2024</title>
      <desc id="fraud-chart-desc">Two horizontal bars show 27 percent in 2023 and 38 percent in 2024, an increase of 11 percentage points.</desc>
      <rect width="760" height="380" rx="24" fill="#071b2d" />
      <text x="42" y="50" fill="#ffffff" fontSize="22" fontWeight="700">Fraud reports with money lost</text>
      <text x="42" y="79" fill="#b9d4e8" fontSize="14">United States consumer reports to the FTC</text>
      <text x="42" y="145" fill="#ffffff" fontSize="18">2023</text>
      <rect x="150" y="116" width="500" height="46" rx="9" fill="#173a50" />
      <rect x="150" y="116" width="338" height="46" rx="9" fill="#38bdf8" />
      <text x="505" y="147" fill="#ffffff" fontSize="21" fontWeight="700">27%</text>
      <text x="42" y="228" fill="#ffffff" fontSize="18">2024</text>
      <rect x="150" y="199" width="500" height="46" rx="9" fill="#173a50" />
      <rect x="150" y="199" width="475" height="46" rx="9" fill="#4ade80" />
      <text x="642" y="230" fill="#ffffff" fontSize="21" fontWeight="700">38%</text>
      <line x1="150" y1="292" x2="650" y2="292" stroke="#7da6bf" />
      <text x="146" y="317" fill="#b9d4e8" fontSize="13">0%</text>
      <text x="267" y="317" fill="#b9d4e8" fontSize="13">10%</text>
      <text x="392" y="317" fill="#b9d4e8" fontSize="13">20%</text>
      <text x="517" y="317" fill="#b9d4e8" fontSize="13">30%</text>
      <text x="635" y="317" fill="#b9d4e8" fontSize="13">40%</text>
      <text x="42" y="355" fill="#9fc0d5" fontSize="12">Unit: percent of fraud reports. Change: +11 percentage points. Source: FTC, 10 March 2025.</text>
    </svg>
    <figcaption><strong>Method note:</strong> The bars reproduce the two percentages in the FTC's 2024 fraud release and show the difference in percentage points. The data covers United States consumer reports, not Filipino assistants, and it does not estimate the risk of remote work.</figcaption>
  </figure>;
}

function AccessLifecycleGraphic() {
  return <figure className="rich-visual" data-rich-graphic="access-lifecycle">
    <svg viewBox="0 0 760 470" role="img" aria-labelledby="access-cycle-title access-cycle-desc">
      <title id="access-cycle-title">Five-step access lifecycle for a Philippines virtual assistant</title>
      <desc id="access-cycle-desc">The manager maps the task, creates a named account, adds only needed access, reviews a weekly record, and removes access at the end of the role.</desc>
      <rect width="760" height="470" rx="24" fill="#f0f9ff" />
      <text x="380" y="50" textAnchor="middle" fill="#082f49" fontSize="23" fontWeight="700">One owner, five access checks</text>
      {[
        { x: 45, n: '1', title: 'Map', note: 'Task and data' },
        { x: 185, n: '2', title: 'Name', note: 'Separate account' },
        { x: 325, n: '3', title: 'Limit', note: 'Smallest role' },
        { x: 465, n: '4', title: 'Review', note: 'Sign-ins and use' },
        { x: 605, n: '5', title: 'Remove', note: 'Close and record' },
      ].map((step) => <g key={step.n}>
        <circle cx={step.x + 55} cy="160" r="48" fill="#ffffff" stroke="#16a34a" strokeWidth="4" />
        <circle cx={step.x + 55} cy="143" r="18" fill="#16a34a" />
        <text x={step.x + 55} y="150" textAnchor="middle" fill="#ffffff" fontSize="17" fontWeight="700">{step.n}</text>
        <text x={step.x + 55} y="188" textAnchor="middle" fill="#14532d" fontSize="17" fontWeight="700">{step.title}</text>
        <text x={step.x + 55} y="228" textAnchor="middle" fill="#334155" fontSize="13">{step.note}</text>
      </g>)}
      <path d="M148 160 H182 M288 160 H322 M428 160 H462 M568 160 H602" stroke="#64748b" strokeWidth="4" strokeDasharray="7 6" />
      <rect x="80" y="300" width="600" height="105" rx="18" fill="#08263a" />
      <text x="380" y="337" textAnchor="middle" fill="#ffffff" fontSize="18" fontWeight="700">The access register follows every step</text>
      <text x="380" y="370" textAnchor="middle" fill="#c7dadd" fontSize="14">Account owner · role · MFA method · approval date · review date · removal proof</text>
      <text x="380" y="436" textAnchor="middle" fill="#334155" fontSize="14">If nobody owns a step, stop the handoff and fix the record first.</text>
    </svg>
    <figcaption>The same manager should own the access record from setup through removal. This keeps a Philippines-based assistant from collecting old permissions as the role changes.</figcaption>
  </figure>;
}

export function AccessHandoffArticle() {
  const canonical = `${site.url}/blog/${accessHandoffSlug}`;
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: accessHandoffMeta.title,
    description: accessHandoffMeta.description,
    datePublished: accessHandoffMeta.updated,
    dateModified: accessHandoffMeta.updated,
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
      { '@type': 'ListItem', position: 3, name: accessHandoffMeta.title, item: canonical },
    ],
  };

  return <>
    <JsonLd data={articleSchema} />
    <JsonLd data={breadcrumbSchema} />
    <article className="container article rich-article" data-article-root="secure-access-handoff" data-release-marker="ova-access-handoff-20260727">
      <p className="eyebrow">Philippines staffing guide</p>
      <h1>{accessHandoffMeta.title}</h1>
      <p className="lead">A Filipino virtual assistant should get enough access to finish the assigned work, but nothing extra. This guide shows how to set up named accounts, small roles, MFA, review notes, and a clean exit.</p>
      <div className="meta-row"><span>{accessHandoffMeta.minutes} min read</span><span>Updated {accessHandoffMeta.updated}</span></div>

      <section className="card takeaways">
        <h2>Start with these rules</h2>
        <ul className="list">
          <li>Build access from the task list, not from a copy of another employee's account.</li>
          <li>Use a named account, a password manager, MFA, and the smallest useful role.</li>
          <li>Keep payments, account ownership, exports, and unusual customer decisions with the manager.</li>
          <li>Review access during the role and remove it from a written checklist when the work ends.</li>
        </ul>
      </section>

      <section className="card article-block">
        <h2>Access starts with the first real task</h2>
        <p>Do not begin with a list of every app your company uses. Begin with the first work lane, such as sorting a shared inbox, updating approved CRM fields, or preparing research in a team folder.</p>
        <p>For each task, name the record the assistant must read, the action they may take, and the decision that must come back to the owner. This small map often shows that a Filipino assistant needs a shared mailbox role or one project folder, not an owner's full account.</p>

      </section>

      <FraudContextChart />

      <section className="card article-block">
        <h2>Use fraud data as context, not a claim about Filipino staff</h2>
        <p>The <a href="https://www.ftc.gov/news-events/news/press-releases/2025/03/new-ftc-data-show-big-jump-reported-losses-fraud-125-billion-2024">FTC reported on 10 March 2025</a> that United States consumers said they lost more than $12.5 billion to fraud in 2024, which was 25% higher than the prior year. The agency received 2.6 million fraud reports for 2024, close to the 2023 count.</p>
        <p>The share of reports that included a monetary loss rose from 27% in 2023 to 38% in 2024. The same release said reported losses to imposter scams reached $2.95 billion in 2024.</p>
        <p>These are United States consumer figures, not incident counts for the Philippines or virtual assistants. They matter here because an inbox, CRM, or store account may expose a Filipino assistant to fake requests that look like a boss, customer, or vendor.</p>
      </section>

      <blockquote className="expert-quote" data-expert-quote="ftc-christopher-mufarrige">
        <p>“The data we’re releasing today shows that scammers’ tactics are constantly evolving.”</p>
        <cite>Christopher Mufarrige, Director of the FTC's Bureau of Consumer Protection, Federal Trade Commission, 10 March 2025</cite>
      </blockquote>

      <ArticleBanner index={0} />

      <section className="card article-block">
        <h2>Create a named account instead of sharing the owner's login</h2>
        <p>A named account tells you who signed in and makes removal much easier. It also lets the company set a smaller role for the assistant while the owner keeps billing, account recovery, exports, and administrator settings.</p>
        <p>Use a work email address controlled by the company when the app permits it. Put the employee name or role in the profile, record the manager who approved it, and avoid aliases that hide which person is doing the work.</p>

      </section>

      <section className="wide-table-wrap card" data-rich-table="access-ownership-table" tabIndex={0} aria-label="Scrollable access ownership table">
        <h2>Access ownership table</h2>
        <table>
          <caption>Example access limits for a Philippines-based virtual assistant</caption>
          <thead><tr><th scope="col">Work lane</th><th scope="col">Useful access</th><th scope="col">Keep with the owner</th><th scope="col">Review proof</th></tr></thead>
          <tbody>
            <tr><th scope="row">Shared inbox</th><td>Read assigned mail, apply labels, and draft approved replies.</td><td>Account recovery, forwarding rules, deletion policy, and unusual promises.</td><td>Handled list, flagged messages, and changed rules.</td></tr>
            <tr><th scope="row">CRM support</th><td>Edit assigned contacts, notes, stages, and follow-up dates.</td><td>Full exports, user administration, automation changes, and record deletion.</td><td>Changed records, duplicate log, and owner questions.</td></tr>
            <tr><th scope="row">Ecommerce support</th><td>View orders and use approved customer service actions.</td><td>Payouts, bank details, store ownership, fraud decisions, and large exceptions.</td><td>Order actions, exception list, and reopened cases.</td></tr>
            <tr><th scope="row">Research support</th><td>Use a project folder, approved sources, and a clean output file.</td><td>Private archives, unrelated client files, and company-wide sharing controls.</td><td>Source list, file history, and final folder check.</td></tr>
          </tbody>
        </table>
      </section>

      <section className="card article-block">
        <h2>Use the smallest role that can complete the lane</h2>
        <p><a href="https://csrc.nist.gov/pubs/sp/800/207/final">NIST SP 800-207, published in August 2020</a>, says access should not be trusted only because of a user's location or device ownership. Authentication and authorization should happen before a session reaches a company resource.</p>
        <p>For a Philippines-based assistant, that means the manager checks the person, device, and requested task instead of treating remote work as one large permission. Start with view, draft, or assigned-record access and add a stronger action only after the task proves it needs one.</p>

      </section>

      <section className="card article-block">
        <h2>Put passwords in a manager, then add MFA</h2>
        <p><a href="https://www.cisa.gov/secure-our-world/use-strong-passwords">CISA advises people to create long, random, unique passwords with a password manager</a>. The assistant should receive the item through that tool rather than through chat, a spreadsheet, a screen recording, or a reusable starter password.</p>
        <p>Turn on a second sign-in check for email, CRM, store, cloud storage, and other sensitive work. <a href="https://www.cisa.gov/secure-our-world/turn-mfa">CISA's MFA guide</a> explains that the second step can block access even when someone steals the password.</p>

      </section>

      <AccessLifecycleGraphic />

      <ArticleBanner index={1} />

      <section className="card article-block">
        <h2>Write an access register that a manager can read in five minutes</h2>
        <p>The register can be a protected company sheet or ticket list. Give each row the person's name, tool, role, task reason, approving manager, MFA method, setup date, last review date, and planned removal step.</p>
        <p>Do not place passwords, backup codes, or private answers in the register. Link to the password-manager item or administration page, then limit the register itself to the people who manage access.</p>

      </section>

      <section className="card article-block">
        <h2>Match the setup to Philippine privacy duties</h2>
        <p><a href="https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html">Section 20 of the Philippine Data Privacy Act of 2012</a> says personal information controllers must use reasonable and appropriate organizational, physical, and technical measures. It also calls for protection against unlawful access, fraudulent misuse, alteration, disclosure, and other unlawful processing.</p>
        <p>This article is an operating guide, not legal advice, and the law's application depends on the parties and data involved. A company should still make the daily controls visible: approved work purpose, limited records, secure sign-in, an incident contact, and a removal record.</p>

      </section>

      <section className="card article-block">
        <h2>Run a first-week access test</h2>
        <p>On day one, ask the assistant to sign in while the manager is available and complete one low-risk task. Check that the correct account, MFA method, folder, and role work without opening unrelated records.</p>
        <p>During days two through four, review sign-in notices, changed records, drafts, and blocked actions each morning. A block may be correct because it keeps an owner-only decision with the manager, or it may show that one narrow permission is missing.</p>

      </section>

      <section className="card article-block">
        <h2>Give the assistant a plain suspicious-request rule</h2>
        <p>A Filipino assistant working in an inbox may see a message that asks for an urgent payment, password reset, customer export, forwarding rule, or bank change. The rule should say to stop, preserve the message, and contact the named owner through a second known channel.</p>
        <p>Do not ask the assistant to decide whether a polished message is harmless. Give them a short list of actions that always need owner approval, even when the sender appears to be a senior leader or long-time vendor.</p>

      </section>

      <section className="card article-block">
        <h2>Remove access from a checklist, not from memory</h2>
        <p>Offboarding starts before the final shift by checking the access register against the current task list. Choose who receives open work, shared files, drafts, customer exceptions, and any device or key owned by the company.</p>
        <p>At the agreed end time, disable the named work account, revoke active sessions, remove group and folder membership, rotate any credential that had to be shared, and recover company records. Then check forwarding rules, connected apps, API tokens, recovery methods, and scheduled automations.</p>
        <p>Save a short removal record with the person, tools checked, manager, date, open issues, and proof. Do not delete useful work history merely to make the account disappear.</p>
      </section>

      <section className="card article-block">
        <h2>Use a copy-ready access request and exit note</h2>
        <p>The manager should make each request specific enough to approve or reject. The assistant should close the role with a list of open items rather than a vague message saying everything is done.</p>
        <div className="script-box">
          <h3>Manager's access request</h3>
          <p>"Please create a named account for [person] to complete [task]. Give it [role] for [records], keep [owner-only actions] blocked, and send the setup record to [manager] by [date]."</p>
          <h3>Assistant's exit note</h3>
          <p>"Open work is listed at [link]. I returned [files or devices], removed personal copies, and sent [unresolved access or customer items] to [owner] for review."</p>
        </div>
      </section>

      <section className="card article-block">
        <h2>Questions to ask before the role starts</h2>
        <ul className="list">
          <li>Which named accounts and delegated roles can the company create?</li>
          <li>Who owns setup, MFA recovery, weekly review, and final removal?</li>
          <li>Which customer, money, export, and account changes always need approval?</li>
          <li>Where should the assistant report a strange sign-in or urgent request?</li>
          <li>How will the company preserve work and close sessions when the role ends?</li>
        </ul>
      </section>

      <section className="card article-block">
        <h2>Related Philippines staffing paths</h2>
        <p>Use the <a href="/services/executive-assistance">executive assistance page</a> to map owner-only decisions, or review <a href="/services/calendar-and-inbox-management">calendar and inbox support</a> for delegated account work. Teams with source-heavy tasks can also review <a href="/services/research-and-data-support">research and data support</a>.</p>
        <p>For overnight account use, read the <a href="/blog/philippines-virtual-assistant-night-shift-guide">Philippines virtual assistant night shift guide</a>. It covers queue limits, morning records, protected hours, and escalation while the daytime owner is offline.</p>
      </section>

      <ArticleBanner index={2} />

      <section className="card article-block sources-list" data-numbered-sources="true">
        <h2>Sources</h2>
        <ol>{sources.map((source) => <li key={source.url}><a href={source.url}>{source.name}</a>. {source.note}</li>)}</ol>
      </section>
    </article>
  </>;
}
