import { Header, Footer, JsonLd } from '../components';
import { site, roles } from '../data';

export const metadata = {
  title: 'Request an overseas VA hiring plan',
  description: 'Share your tasks, hours, tools, and coverage needs. Get a simple overseas assistant role plan and first-week checklist.',
  alternates: { canonical: `${site.url}/contact` },
};

export default function Contact() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    url: `${site.url}/contact`,
    name: 'Request an overseas VA hiring plan',
    about: { '@type': 'Service', name: 'Overseas virtual assistant planning', provider: { '@type': 'Organization', name: site.brand, url: site.url } },
    breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'Home', item: site.url }, { '@type': 'ListItem', position: 2, name: 'Contact', item: `${site.url}/contact` } ] },
  };
  return <><Header/><main className="section"><JsonLd data={schema}/><div className="container two"><div><p className="eyebrow">Contact</p><h1>Request an assistant hiring plan</h1><p className="lead">Tell us what you want off your plate. We will map the role, likely hours, cost range, questions to ask, security notes, and onboarding checklist.</p><div className="card"><h3>What to include</h3><ul className="list"><li>The tasks you want done each week</li><li>Your target time zone and hours</li><li>Tools the assistant may need</li><li>Customer, finance, legal, or health data limits</li><li>Your first 30-day goal</li></ul></div><p className="source-note"><b>Placeholder:</b> connect this form to the preferred CRM or intake endpoint before paid traffic.</p></div><form className="card" action="/thank-you"><label>Name<br/><input required name="name"/></label><label>Email<br/><input required name="email" type="email"/></label><label>Best-fit role<br/><select name="role">{roles.map((role)=><option key={role.name}>{role.name}</option>)}</select></label><label>Target coverage<br/><input name="coverage" placeholder="Example: US mornings, 20 hours/week"/></label><label>What tasks do you want help with?<br/><textarea name="tasks" rows={6}/></label><button className="btn" type="submit">Send request</button></form></div></main><Footer/></>;
}
