import { AcrClient } from './acr-client';
import Script from 'next/script';
import './globals.css';
import './v3.css';
import type { Metadata } from 'next';
import { site } from './data';
import { JsonLd } from './components';
import { ArticleEnhancer } from './article-enhancer';
import { SkipLink } from './skip-link';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'Overseas Virtual Assistant | Filipino VA Staffing', template: '%s | Overseas Virtual Assistant' },
  description: 'Plain guides and staffing plans for hiring Filipino virtual assistants based only in the Philippines.',

  icons: { icon: '/logo.svg', shortcut: '/logo.svg', apple: '/logo.svg' },
  manifest: '/manifest.webmanifest',
  openGraph: { title: 'Overseas Virtual Assistant', description: 'Hire Filipino virtual assistants based in the Philippines with a clear role, shift, and review plan.', url: site.url, siteName: 'Overseas Virtual Assistant', type: 'website', images: [{url:'/images/remote-onboarding.jpg',alt:'Remote onboarding planning'}] },
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
  return <html lang="en"><body><SkipLink/><JsonLd data={organization}/><JsonLd data={webSite}/>{children}<ArticleEnhancer/><AcrClient/><Script id="acr-tracker-config" strategy="beforeInteractive">{`window.ACR_TRACKER_CONFIG={siteId:'overseas-virtual-assistant',endpoint:'/ingest/track',debug:false,funnelSteps:[{path:'/contact-us',step:1,label:'Form Page',event:'funnel_form_page'},{path:'/contact',step:1,label:'Form Page',event:'funnel_form_page'},{path:'/thank-you',step:2,label:'Form Submitted',event:'funnel_form_submitted'},{path:'/thanks-whats-next',step:3,label:'Booking Confirmed',event:'funnel_booking_confirmed'}]};`}</Script><Script src="https://acrtracking.stealthagents.us/v1/tracker.js" strategy="afterInteractive"/></body></html>;
}
