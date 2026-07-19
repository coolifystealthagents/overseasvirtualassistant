import { Header, Footer, CTA, JsonLd } from './components';
import { site, roles, industries, stats, blogPosts, countryFits, qaChecks, securityBasics } from './data';

export default function Home() {
  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${site.url}/#webpage`,
    url: site.url,
    name: 'Overseas Virtual Assistant hiring guide',
    description: 'Simple guidance for overseas VA costs, country fit, time zones, quality checks, security, and onboarding.',
    mainEntity: {
      '@type': 'ItemList',
      name: 'Overseas VA planning topics',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Role fit', url: `${site.url}/#roles` },
        { '@type': 'ListItem', position: 2, name: 'Country and time-zone fit', url: `${site.url}/#countries` },
        { '@type': 'ListItem', position: 3, name: 'Quality controls', url: `${site.url}/#quality` },
        { '@type': 'ListItem', position: 4, name: 'Security basics', url: `${site.url}/#security` },
        { '@type': 'ListItem', position: 5, name: 'Hiring guides', url: `${site.url}/blog` },
      ],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How much does an overseas virtual assistant cost?', acceptedAnswer: { '@type': 'Answer', text: 'Many overseas admin and support VA roles fall in a planning range of $6-$18 per hour, depending on country, skill, schedule, English needs, and management support.' } },
      { '@type': 'Question', name: 'Which country is best for a virtual assistant?', acceptedAnswer: { '@type': 'Answer', text: 'It depends on the role. The Philippines is often strong for English-first support, Latin America for US time-zone overlap, Eastern Europe for technical admin, and South Africa for UK/EU overlap.' } },
      { '@type': 'Question', name: 'What should I delegate first?', acceptedAnswer: { '@type': 'Answer', text: 'Start with repeatable, low-risk work such as inbox sorting, calendar cleanup, CRM updates, support drafts, and weekly reporting.' } },
    ],
  };

  return <><Header/><main>
    <JsonLd data={webPage}/><JsonLd data={faqSchema}/>
    <section className="hero"><div className="container grid"><div><p className="eyebrow">overseas virtual assistant planning</p><h1>Hire overseas VA help without guessing.</h1><p className="lead">Overseas Virtual Assistant helps busy teams compare roles, costs, countries, time zones, quality checks, and security basics before they hire.</p><p>Start with a clear task list. Match the role to the right country and schedule. Add simple review rules before you hand over more work.</p><div className="actions"><a className="btn" href="/contact">Build my assistant plan</a><a className="btn secondary" href="/blog/virtual-assistant-costs">See cost ranges</a></div></div><div className="card"><h3>Best first assistant tasks</h3><ul className="list"><li>Inbox sorting and calendar cleanup</li><li>Lead follow-up and CRM updates</li><li>Call answering and appointment setting</li><li>Customer support replies</li><li>Simple reports, research, and admin</li></ul><p className="quote">“Start small, measure weekly, then add more work.”</p></div></div></section>

    <section className="section" id="roles"><div className="container"><p className="eyebrow">Role fit</p><h2>Assistant roles people compare most</h2><p className="lead">Use a narrow role first. A clear lane is easier to train, price, and check.</p><div className="cards">{roles.map((r)=><div className="card" key={r.name}><h3>{r.name}</h3><p>{r.fit}</p><p><b>Guardrail:</b> {r.guardrail}</p><span className="pill">SOP ready</span><span className="pill">Remote friendly</span></div>)}</div></div></section>

    <section className="section alt" id="pricing"><div className="container"><p className="eyebrow">Costs and timing</p><h2>Realistic ranges before you talk to providers</h2><div className="cards">{stats.map((s)=><div className="card stat" key={s.label}><h3>{s.value}</h3><b>{s.label}</b><p>{s.note}</p></div>)}</div><p className="source-note">Source placeholders: compare final quotes against public wage data, provider scope, management coverage, and your own training time. Do not treat any range as a guaranteed quote.</p></div></section>

    <section className="section" id="countries"><div className="container"><p className="eyebrow">Country and time-zone fit</p><h2>Pick the country around the work day you need.</h2><p className="lead">The best overseas VA location depends on live-call overlap, writing needs, task risk, and how fast a manager can review work.</p><div className="table"><div className="row"><b>Country or region</b><b>Common fit</b><b>Plain note</b></div>{countryFits.map((c)=><div className="row" key={c.country}><span><b>{c.country}</b><br/>{c.overlap}</span><span>{c.bestFor}</span><span>{c.note}</span></div>)}</div></div></section>

    <section className="section alt" id="quality"><div className="container two"><div><p className="eyebrow">Quality controls</p><h2>Do not rely on hope. Use a weekly scorecard.</h2><p>Good overseas hiring is simple, but it is not hands-off on day one. Give examples, check real work, and keep sensitive choices with the owner until the process is proven.</p><ul className="list">{qaChecks.map((q)=><li key={q}>{q}</li>)}</ul></div><div className="card"><h3>Sample weekly scorecard</h3><div className="mini-grid"><span>Accuracy</span><b>1-5</b><span>Speed</span><b>1-5</b><span>Communication</span><b>1-5</b><span>Escalation judgment</span><b>1-5</b><span>Ready for more work?</span><b>Yes / No</b></div><p className="quote">If the score is unclear, the task is unclear.</p></div></div></section>

    <section className="section" id="security"><div className="container two"><div className="card"><h3>Security basics before access</h3><ul className="list">{securityBasics.map((s)=><li key={s}>{s}</li>)}</ul></div><div><p className="eyebrow">Trust and access</p><h2>Give enough access to work, not enough to hurt the business.</h2><p>Most problems come from moving too fast. Start with the tools the assistant needs for the first task lane. Add more after work quality and judgment are clear.</p><p>For finance, healthcare, legal, or customer data, get professional advice and follow the rules that apply to your business.</p></div></div></section>

    <section className="section alt"><div className="container"><p className="eyebrow">Comparison</p><h2>Three ways to hire assistant support</h2><div className="table"><div className="row"><b>Option</b><b>Best for</b><b>Watch out for</b></div><div className="row"><span>Local employee</span><span>In-person work and sensitive decisions</span><span>Higher cost and slower hiring</span></div><div className="row"><span>Freelance VA</span><span>Small task lists and flexible work</span><span>Training, backup, and QA are on you</span></div><div className="row"><span>Managed VA service</span><span>Recurring support with screening and replacement help</span><span>Ask exactly who manages quality</span></div></div></div></section>

    <section className="section"><div className="container"><p className="eyebrow">Guides</p><h2>Start with these hiring guides</h2><div className="cards">{blogPosts.slice(0,3).map((p)=><a className="card" href={`/blog/${p.slug}`} key={p.slug}><h3>{p.title}</h3><p>{p.excerpt}</p><span className="pill">{p.minutes} min read</span></a>)}</div></div></section>
    <CTA />
  </main><Footer/></>;
}
