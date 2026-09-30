import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import localFont from 'next/font/local';
import '@ode/tokens/css';
import { themeColor } from '@ode/tokens';
import '../src/styles.css';
import '../src/FieldGlobe.css';
import SiteFooter from '../src/SiteFooter';
import SiteHeader from '../src/SiteHeader';

export const metadata: Metadata = {
  title: {
    default: 'ODE — Good data. Real impact. Anywhere.',
    template: '%s · ODE',
  },
  description:
    'Good data. Real impact. Anywhere. Open Data Ensemble is the open-source, offline-first toolkit for collecting, syncing, and working with field data.',
  icons: { icon: '/brand/ode-mark.png' },
  openGraph: {
    title: 'ODE — Good data. Real impact. Anywhere.',
    description:
      "An open-source ensemble of tools for a world that isn't always online. Collect in the field. Sync on your terms. Make your data matter.",
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
      </body>
    </html>
  );
}
