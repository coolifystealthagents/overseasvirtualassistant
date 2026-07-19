import { Header, Footer, JsonLd } from '../components';
import { site } from '../data';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy placeholder for Overseas Virtual Assistant. Replace with legal-approved policy before launch.',
  alternates: { canonical: `${site.url}/privacy` },
};

export default function Privacy(){
  const schema = { '@context': 'https://schema.org', '@type': 'WebPage', url: `${site.url}/privacy`, name: 'Privacy Policy' };
  return <><Header/><main className="section"><JsonLd data={schema}/><div className="container legal"><p className="eyebrow">Privacy</p><h1>Privacy Policy</h1><p className="lead">This is a plain placeholder privacy page. Replace it with a legal-approved policy before launch or paid traffic.</p><h2>Information we may collect</h2><p>If you use the contact form, we may collect your name, email address, company details, task needs, target hours, and any message you send.</p><h2>How information may be used</h2><p>Information may be used to reply to your request, prepare an overseas assistant hiring plan, improve the site, and keep basic business records.</p><h2>Analytics and cookies</h2><p>This site may later use analytics tools to understand page visits and form activity. Add the exact tools, cookie details, and opt-out process before launch.</p><h2>Sharing</h2><p>Do not sell or share visitor information without a clear business reason and proper consent. Add final vendor and processor details here.</p><h2>Contact</h2><p>Replace this placeholder with the official business contact email and mailing address.</p></div></main><Footer/></>;
}
