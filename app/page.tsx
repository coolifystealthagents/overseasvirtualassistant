import { Header, Footer, JsonLd } from './components';
import { blogPosts, onboardingTimeline, roles, site, staffingProcess, stats, timeZoneWindows } from './data';

const roleSlug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Overseas Virtual Assistant hiring and staffing guide',
    description: 'Plan an overseas virtual assistant role around tasks, time zones, onboarding, and safe access.',
    url: site.url,
    isPartOf: { '@id': `${site.url}/#website` },
  };

  return <>
    <Header />
    <main className="ova-home">
      <JsonLd data={schema} />

      <section className="ova-hero">
        <div className="container ova-hero-grid">
          <div className="ova-hero-copy">
            <p className="ova-kicker"><span>Global support</span> Built around your workday</p>
            <h1>Hire an overseas virtual assistant. Keep the handoff under control.</h1>
            <p className="ova-lead">Move repeat work out of your day with a role that has clear tasks, sensible access, and a real review routine. Start narrow. See what works. Add more from there.</p>
            <ul className="ova-hero-checks" aria-label="What the staffing plan covers">
              <li><span aria-hidden="true">✓</span> Tasks and owner-only decisions</li>
              <li><span aria-hidden="true">✓</span> Workday overlap and handoff times</li>
              <li><span aria-hidden="true">✓</span> A first-week review plan</li>
            </ul>
            <div className="ova-actions">
              <a className="btn ova-primary" href="/contact">Request a staffing plan</a>
              <a className="ova-text-link" href="#roles">See the first tasks to hand off <span aria-hidden="true">↓</span></a>
            </div>
            <p className="ova-fineprint">No public rate card. The right setup depends on the role, hours, tools, and time-zone overlap.</p>
          </div>

          <div className="ova-portrait-stage" aria-label="Overseas assistant handoff example">
            <div className="ova-photo-shell">
              <img src="/images/overseas-assistant.jpg" alt="Remote professional ready for an overseas virtual assistant role" />
              <div className="ova-photo-caption"><span>01</span><p>One role.<br />A clear owner.</p></div>
            </div>
            <div className="ova-float ova-float-top"><span className="ova-status-dot" /> <b>Handoff ready</b><small>Inbox triage · 8:00 AM</small></div>
            <div className="ova-float ova-float-bottom"><b>Owner approval stays put</b><small>Refunds · payments · legal calls</small></div>
            <div className="ova-orbit" aria-hidden="true">PH <span>↗</span> US</div>
          </div>
        </div>

        <div className="container ova-guidance" aria-label="Planning guidance">
          <p><b>Planning guidance</b><span>Useful starting points, not performance claims.</span></p>
          {stats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
        </div>
      </section>

      <section className="ova-intro container">
        <p className="ova-section-no">01 / THE ROLE</p>
        <div>
          <h2>Do not hire a "do everything" assistant.</h2>
          <p>That job is impossible to scope and miserable to manage. Pick a lane with repeatable work, show what good looks like, and keep risky decisions with someone who already knows the business.</p>
        </div>
      </section>

      <section className="container ova-role-board" id="roles">
        {roles.slice(0, 6).map((role, index) => <article className="ova-role-card" id={roleSlug(role.name)} key={role.name}>
          <div className="ova-role-top"><span>{String(index + 1).padStart(2, '0')}</span><span className="ova-role-arrow" aria-hidden="true">↗</span></div>
          <h3>{role.name}</h3>
          <p>{role.fit}</p>
          <div className="ova-guardrail"><b>Keep with the owner</b><span>{role.guardrail}</span></div>
        </article>)}
      </section>

      <section className="ova-timezone" id="coverage">
        <div className="container">
          <div className="ova-zone-head">
            <div><p className="ova-section-no light">02 / COVERAGE</p><h2>Choose the overlap before the country.</h2></div>
            <p>A great assistant on the wrong schedule still creates a bad handoff. Decide when the work should move, when someone must be online, and when the owner will review it.</p>
          </div>
          <div className="ova-zone-list">
            {timeZoneWindows.slice(0, 3).map((zone, index) => <article key={zone.region}>
              <span className="ova-zone-index">0{index + 1}</span>
              <div><h3>{zone.region}</h3><p>{zone.window}</p></div>
              <div><b>Good for</b><p>{zone.use}</p></div>
              <div><b>Handoff</b><p>{zone.handoff}</p></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="container ova-process" id="process">
        <div className="ova-process-head">
          <p className="ova-section-no">03 / THE LAUNCH</p>
          <h2>A calm first week beats a fast, messy start.</h2>
          <p>The plan should tell both people what happens next. These four moves are enough to get the work out of someone's head and into a routine.</p>
        </div>
        <div className="ova-steps">
          {staffingProcess.map((item) => <article key={item.step}>
            <span>{item.step}</span>
            <h3>{item.title}</h3>
            <p>{item.body.charAt(0).toUpperCase() + item.body.slice(1)}</p>
          </article>)}
        </div>
        <div className="ova-week">
          <div className="ova-week-title"><span>FIRST WEEK</span><h3>Review real work, not promises.</h3></div>
          <div className="ova-week-track">
            {onboardingTimeline.map((item) => <div key={item.day}><b>{item.day}</b><span>{item.title}</span></div>)}
          </div>
        </div>
      </section>

      <section className="ova-reading">
        <div className="container">
          <div className="ova-reading-head"><div><p className="ova-section-no light">04 / FIELD NOTES</p><h2>Read this before you interview anyone.</h2></div><a href="/blog">View all guides <span aria-hidden="true">↗</span></a></div>
          <div className="ova-reading-grid">
            {blogPosts.slice(0, 3).map((post, index) => <a href={`/blog/${post.slug}`} key={post.slug}>
              <span>{String(index + 1).padStart(2, '0')} · {post.minutes} min read</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <b>Read guide ↗</b>
            </a>)}
          </div>
        </div>
      </section>

      <section className="container ova-final">
        <div><p className="ova-kicker"><span>Your next hire</span> Start with the work</p><h2>Bring the messy task list. Leave with a role someone can actually do.</h2></div>
        <div><p>Share the work, tools, schedule, and decisions that need approval. The staffing plan will turn that into a clear first lane.</p><a className="btn ova-primary" href="/contact">Request a staffing plan</a></div>
      </section>
    </main>
    <Footer />
  </>;
}
