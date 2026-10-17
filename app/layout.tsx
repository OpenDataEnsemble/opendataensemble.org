import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import localFont from 'next/font/local';
import '@ode/tokens/css';
import { themeColor } from '@ode/tokens';
import '../src/styles.css';
import '../src/FieldGlobe.css';
import BackToTop from '../src/BackToTop';
import SiteFooter from '../src/SiteFooter';
import SiteHeader from '../src/SiteHeader';

export const metadata: Metadata = {
  title: {
    default: 'ODE · Open Data Ensemble',
    template: '%s · ODE',
  },
  description:
    'Open-source tools for collecting and syncing field data when the network is unreliable. Formulus on the phone, Synkronus to bring observations together.',
  icons: { icon: '/brand/ode-mark.png' },
  openGraph: {
    title: 'ODE · Open Data Ensemble',
    description:
      'Collect observations offline, sync them when a connection returns, and keep the data on infrastructure you control.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor,
  width: 'device-width',
  initialScale: 1,
};

const museoModerno = localFont({
  src: './fonts/MuseoModerno-Variable.ttf',
  weight: '100 900',
  display: 'swap',
  variable: '--font-museo-moderno',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={museoModerno.variable}
      data-scroll-behavior="smooth"
    >
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <BackToTop />
      </body>
    </html>
  );
}
