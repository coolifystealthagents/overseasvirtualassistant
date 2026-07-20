import './globals.css';
import type { Metadata } from 'next';
import { site } from './data';
import { JsonLd } from './components';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'Overseas Virtual Assistant | Practical overseas VA hiring guides', template: '%s | Overseas Virtual Assistant' },
  description: 'Simple, practical guides for hiring, staffing details, onboarding, country fit, security, and managing overseas virtual assistant support.',
  alternates: { canonical: site.url },
  openGraph: { title: 'Overseas Virtual Assistant', description: 'Practical overseas virtual assistant hiring guides for busy teams.', url: site.url, siteName: 'Overseas Virtual Assistant', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Overseas Virtual Assistant', description: 'Practical overseas VA hiring guides for busy teams.' },
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
    description: 'Simple overseas virtual assistant hiring, staffing details, onboarding, security, and management guides.',
    publisher: { '@id': `${site.url}/#organization` },
  };
  return <html lang="en"><body><JsonLd data={organization}/><JsonLd data={webSite}/>{children}</body></html>;
}
