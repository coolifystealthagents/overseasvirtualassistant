import './globals.css';
import type { Metadata } from 'next';
import { site } from './data';

export const metadata: Metadata = {
  metadataBase: new URL('https://overseasvirtualassistant.com'),
  title: { default: 'Overseas Virtual Assistant | Simple virtual assistant hiring guides', template: '%s | Overseas Virtual Assistant' },
  description: 'Simple, practical guides for hiring, pricing, onboarding, and managing overseas virtual assistant support.',
  openGraph: { title: 'Overseas Virtual Assistant', description: 'Practical virtual assistant hiring guides for busy teams.', url: 'https://overseasvirtualassistant.com', siteName: 'Overseas Virtual Assistant', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
