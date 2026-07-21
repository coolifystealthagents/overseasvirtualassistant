import { roles, site } from './data';

const domain = site.domain;
const year = new Date().getFullYear();
const roleSlug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function LogoMark() {
  return <span className="logo-mark-wrap">
    <img className="logo-img" src="/logo.svg" alt="" aria-hidden="true" />
    <span className="logo-name"><b>Overseas</b><span>Virtual Assistant</span></span>
  </span>;
}

export function Header() {
  return <header className="nav">
    <div className="nav-inner">
      <a className="logo" href="/" aria-label={`${site.brand} home`}><LogoMark /></a>
      <nav className="links" aria-label="Main navigation">
        <a href="/#roles">Roles</a>
        <a href="/#coverage">Coverage</a>
        <a href="/#process">How it works</a>
        <a href="/blog">Guides</a>
      </nav>
      <a className="btn nav-cta" href="/contact">Request a staffing plan</a>
    </div>
  </header>;
}

export function Footer() {
  return <footer className="footer legit-footer">
    <div className="footer-grid">
      <div className="footer-brand">
        <a className="footer-logo" href="/" aria-label={`${site.brand} home`}><LogoMark /></a>
        <p>Practical guidance for scoping an overseas assistant role, choosing coverage, and handing off work without giving up control.</p>
        <p className="footer-note">This is an independent informational website. When you submit a request, we may route it to a staffing team or service partner that can follow up.</p>
      </div>
      <div>
        <h3>Popular roles</h3>
        <div className="footer-links">
          {roles.slice(0, 4).map((role) => <a href={`/#${roleSlug(role.name)}`} key={role.name}>{role.name}</a>)}
        </div>
      </div>
      <div>
        <h3>Site</h3>
        <div className="footer-links">
          <a href="/blog">Hiring guides</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy policy</a>
          <a href="/terms">Terms &amp; conditions</a>
          <a href="/cancellation-policy">Cancellation policy</a>
        </div>
      </div>
    </div>
    <div className="footer-bottom"><span>© {year} {site.brand}. All rights reserved.</span><span>{domain}</span></div>
  </footer>;
}

export function CTA() {
  return <section className="final-cta">
    <p className="eyebrow">Start with the work</p>
    <h2>Map the role before you hire.</h2>
    <p>Share the tasks, tools, schedule, and quality checks. Get a practical staffing scope back.</p>
    <a className="btn primary" href="/contact">Request a staffing plan</a>
  </section>;
}
