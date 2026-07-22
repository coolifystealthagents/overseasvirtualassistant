import { Header, Footer, JsonLd } from './components';
import { blogPosts, onboardingTimeline, roles, site, staffingProcess, stats, timeZoneWindows } from './data';

const roleSlug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${site.url}/#webpage`,
        name: 'Overseas Virtual Assistant hiring and staffing guide',
        description: 'Plan a Filipino virtual assistant role around tasks, Philippines-based shifts, onboarding, and safe access.',
        url: site.url,
        isPartOf: { '@id': `${site.url}/#website` },
        hasPart: { '@id': `${site.url}/#first-week-launch` },
      },
      {
        '@type': 'HowTo',
        '@id': `${site.url}/#first-week-launch`,
        name: 'How to launch a Filipino virtual assistant role',
        description: 'A four-step plan for scoping, matching, onboarding, and reviewing Philippines-based remote support.',
        step: staffingProcess.map((item, index) => ({
          '@type': 'HowToStep',
          position: index + 1,
          name: item.title,
          text: item.body.charAt(0).toUpperCase() + item.body.slice(1),
          url: `${site.url}/#launch-step-${item.step}`,
        })),
      },
    ],
  };

  return <>
    <Header />
    <main className="ova-home" data-site-marker="global-handoff-2026-07">
      <JsonLd data={schema} />

      <section className="ova-hero">
        <div className="container ova-hero-grid">
          <div className="ova-hero-copy">
            <p className="ova-kicker"><span>Filipino talent</span> Built around your workday</p>
            <h1>Hire a Filipino virtual assistant. Keep the handoff under control.</h1>
            <p className="ova-lead">We recruit and hire only in the Philippines. Start with clear tasks, limited access, and a review routine you can keep. Add work after the first lane is running well.</p>
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
            <div><p className="ova-section-no light">02 / COVERAGE</p><h2>Choose the shift before you hire.</h2></div>
            <p>Every candidate is based in the Philippines. Decide when someone must be online, which work can happen while you are offline, and when the owner will review it.</p>
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
          {staffingProcess.map((item) => <article id={`launch-step-${item.step}`} key={item.step}>
            <span>{item.step}</span>
            <h3>{item.title}</h3>
            <p>{item.body.charAt(0).toUpperCase() + item.body.slice(1)}</p>
          </article>)}
        </div>
        <div className="ova-launch-brief">
          <figure>
            <img src="/images/remote-onboarding.jpg" alt="Remote professional reviewing a Filipino virtual assistant onboarding plan on a laptop" />
            <figcaption>Role illustration. It does not show an available candidate or a customer.</figcaption>
          </figure>
          <div className="ova-launch-copy">
            <p className="ova-section-no">Before day one</p>
            <h3>Put the first task lane on one page.</h3>
            <p>Write down the task, tool, due time, good example, and stop rule. Your Filipino assistant should know what to finish and when to send a decision back to you.</p>
            <div className="ova-ownership-grid">
              <div><b>The assistant owns</b><span>Drafts, updates, follow-up, and a clear done list.</span></div>
              <div><b>The business owns</b><span>Payments, legal calls, policy exceptions, and final approval.</span></div>
            </div>
            <a className="ova-brief-link" href="/blog/assistant-onboarding-checklist">Use the first-week onboarding checklist <span aria-hidden="true">↗</span></a>
          </div>
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
        <div><p className="ova-kicker"><span>Your next hire</span> Start with the work</p><h2>Bring the messy task list. Leave with a clear Filipino assistant role.</h2></div>
        <div><p>Share the work, tools, shift, and decisions that need approval. We will shape them into a first task lane for Philippines-based talent.</p><a className="btn ova-primary" href="/contact">Request a staffing plan</a></div>
      </section>
    </main>
    <Footer />
  </>;
}
