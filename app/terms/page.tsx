import { Header, Footer, JsonLd } from '../components';
import { site } from '../data';

export const metadata = {
  title: 'Terms of Use',
  description: 'Terms placeholder for Overseas Virtual Assistant. Replace with legal-approved terms before launch.',
  alternates: { canonical: `${site.url}/terms` },
};

export default function Terms(){
  const schema = { '@context': 'https://schema.org', '@type': 'WebPage', url: `${site.url}/terms`, name: 'Terms of Use' };
  return <><Header/><main className="section"><JsonLd data={schema}/><div className="container legal"><p className="eyebrow">Terms</p><h1>Terms of Use</h1><p className="lead">This is a plain placeholder terms page. Replace it with legal-approved terms before launch or paid traffic.</p><h2>Educational content</h2><p>The information on this site is for planning and education. It is not legal, tax, hiring, security, or financial advice.</p><h2>No guaranteed results</h2><p>Plan ranges, ramp times, and examples are planning estimates. Actual quotes, assistant fit, quality, and business results vary.</p><h2>User responsibility</h2><p>You are responsible for checking providers, contracts, worker classification, privacy duties, access controls, and any rules that apply to your business.</p><h2>Third-party links</h2><p>This site may link to public resources or provider sites. Those sites have their own policies and terms.</p><h2>Contact</h2><p>Replace this placeholder with the official business contact email and mailing address.</p></div></main><Footer/></>;
}
