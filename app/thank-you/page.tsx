import { Header, Footer, JsonLd } from '../components';
import { site } from '../data';

export const metadata = { title: 'Request received', robots: { index: false, follow: false } };

export default function Thanks(){
  const schema = { '@context': 'https://schema.org', '@type': 'WebPage', url: `${site.url}/thank-you`, name: 'Request received', isPartOf: { '@id': `${site.url}/#website` } };
  return <><Header/><main className="section"><JsonLd data={schema}/><div className="container"><h1>Thanks. Your request is in.</h1><p className="lead">A staffing team will review the role, hours, tools, and time-zone needs you shared. While you wait, these short guides can help you tighten the first handoff.</p><div className="cards"><a className="card" href="/blog/virtual-assistant-planning"><h3>Check cost factors</h3><p>See what changes a quote and which support questions to ask.</p></a><a className="card" href="/blog/tasks-to-delegate-first"><h3>Pick first tasks</h3><p>Choose a safe first task lane before adding more work.</p></a><a className="card" href="/blog/assistant-onboarding-checklist"><h3>Prep onboarding</h3><p>Set up SOPs, access, examples, and weekly quality checks.</p></a></div></div></main><Footer/></>;
}
