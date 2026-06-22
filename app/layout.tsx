import type { Metadata, Viewport } from 'next';
import { cormorant, dmSans, dmMono } from '@/lib/fonts';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Analytics } from '@vercel/analytics/next';
import { SOCIALS } from '@/data/site';
import './globals.css';

const SITE_URL = 'https://www.omkardhareshwar.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Omkar Dhareshwar — Flow Artist, Performer & Storyteller',
    template: '%s · Omkar Dhareshwar',
  },
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  description:
    'Contact juggler, flow artist, and fire performer based in Mumbai. Corporate juggling workshops, brand activations, and street art. Featured in Nat Geo Traveller, Red Bull, Britannia, and Doordarshan.',
  keywords: [
    'omkar dhareshwar',
    'juggler mumbai',
    'juggler india',
    'contact juggler india',
    'contact juggling india',
    'flow artist mumbai',
    'flow artist india',
    'flow arts workshop india',
    'fire performer india',
    'poi performer india',
    'staff spinning india',
    'corporate juggling workshop',
    'flow workshop mumbai',
    'street art workshop mumbai',
    'brand activation artist india',
    'manwith3balls',
    'marol art village',
    'street art mumbai',
    'graffiti artist mumbai',
    'brand storytelling india',
    'wicked broz',
    'graffiti mumbai',
    'national geographic traveller india',
    'world atlas of street art',
    'community art marol',
  ],
  authors: [{ name: 'Omkar Dhareshwar' }],
  openGraph: {
    type: 'profile',
    url: SITE_URL,
    title: 'Omkar Dhareshwar — Flow Artist & Performer',
    description: 'Fire, flow, and stories that actually mean something.',
    siteName: 'Omkar Dhareshwar',
    images: [{ url: 'https://www.omkardhareshwar.com/og-2025.jpg', alt: 'Omkar Dhareshwar — Flow Artist, Performer & Storyteller' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omkar Dhareshwar — Flow Artist & Performer',
    description: 'Fire, flow, and stories that actually mean something.',
    images: [{ url: 'https://www.omkardhareshwar.com/og-2025.jpg', alt: 'Omkar Dhareshwar — Flow Artist, Performer & Storyteller' }],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0F0F0D',
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Omkar Dhareshwar',
  alternateName: 'ManWith3Balls',
  jobTitle: 'Flow Artist, Performer & Storyteller',
  url: SITE_URL,
  email: 'mailto:omkar.dhara@gmail.com',
  sameAs: SOCIALS.map((s) => s.href),
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mumbai',
    addressRegion: 'MH',
    addressCountry: 'IN',
  },
  knowsAbout: [
    'Flow Arts',
    'Juggling',
    'Contact Juggling',
    'Poi',
    'Staff Spinning',
    'Fire Performance',
    'Street Art',
    'Graffiti',
    'Performance Art',
    'Brand Storytelling',
    'Brand Activation',
    'Flow Arts Workshop',
    'Street Art Workshop',
    'Community Art',
    'Marol Art Village',
  ],
  subjectOf: {
    '@type': 'CollectionPage',
    name: 'Press Coverage',
    url: `${SITE_URL}/press`,
    description: 'Media features in National Geographic Traveller India, World Atlas of Street Art, Mid-Day, Times of India and Free Press Journal.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <head>
        {/* Preconnect for YouTube embeds (work + media pages) */}
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>
        <ScrollToTop />
        <a className="skip-to-content" href="#main-content">Skip to main content</a>
        <Nav />
        <div id="main-content" tabIndex={-1} style={{ outline: 'none' }}>
          {children}
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
