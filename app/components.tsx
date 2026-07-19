import { site } from './data';

export function Header(){
  return <header className="nav"><div className="container nav-inner"><a href="/" className="logo"><span className="mark">VA</span><span>{site.brand}</span></a><nav className="links"><a href="/#roles">Roles</a><a href="/#countries">Countries</a><a href="/#security">Security</a><a href="/blog">Blog</a><a href="/contact">Contact</a></nav><a className="btn" href="/contact">Get hiring plan</a></div></header>;
}

export function Footer(){
  return <footer className="footer"><div className="container footer-grid"><div><b>{site.brand}</b><p>Simple overseas virtual assistant hiring guides for buyers who want clear steps, safer access, and practical cost planning.</p><p>© {new Date().getFullYear()} {site.brand}. Independent education site. Replace contact details before launch.</p></div><div><b>Plan</b><a href="/#roles">Role fit</a><a href="/#countries">Country fit</a><a href="/#security">Security basics</a><a href="/blog/virtual-assistant-costs">Cost guide</a></div><div><b>Company</b><a href="/contact">Contact</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/sitemap.xml">Sitemap</a></div></div></footer>;
}

export function CTA(){
  return <section className="section"><div className="container"><div className="callout"><p className="eyebrow" style={{color:'white'}}>Need help deciding?</p><h2>Get a simple assistant hiring plan.</h2><p>Tell us the tasks, tools, hours, and coverage you need. We will map the role, cost range, interview questions, security notes, and first-week checklist.</p><a className="btn secondary" href="/contact">Request a quote-style plan</a></div></div></section>;
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
