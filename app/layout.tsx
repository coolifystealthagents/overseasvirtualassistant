import './globals.css';
import type { Metadata } from 'next';
import { site } from './data';
import { JsonLd } from './components';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'Overseas Virtual Assistant | Hire Filipino virtual assistants', template: '%s | Overseas Virtual Assistant' },
  description: 'Plain guides and staffing plans for hiring Filipino virtual assistants based only in the Philippines.',
  alternates: { canonical: site.url },
  openGraph: { title: 'Overseas Virtual Assistant', description: 'Hire Filipino virtual assistants based in the Philippines with a clear role, shift, and review plan.', url: site.url, siteName: 'Overseas Virtual Assistant', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Overseas Virtual Assistant', description: 'Plan a Filipino virtual assistant role around the work, shift, and review needs.' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${site.url}/#organization`,
    name: site.brand,
    url: site.url,
  };
  const webSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    name: site.brand,
    url: site.url,
    description: 'Guides and staffing plans for hiring Filipino virtual assistants based in the Philippines.',
    publisher: { '@id': `${site.url}/#organization` },
  };
  return <html lang="en"><body><JsonLd data={organization}/><JsonLd data={webSite}/>{children}</body></html>;
}
