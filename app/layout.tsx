import type { Metadata } from 'next';
import { cormorant, dmSans, dmMono } from '@/lib/fonts';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { SOCIALS } from '@/data/site';
import './globals.css';

const SITE_URL = 'https://www.omkardhareshwar.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Omkar Dhareshwar — Flow Artist, Performer & Storyteller',
    template: '%s · Omkar Dhareshwar',
  },
  description:
    'Fire performances, corporate flow workshops, and brand storytelling. Featured in Nat Geo Traveller, Red Bull, Britannia, and Doordarshan. Based in Mumbai.',
  keywords: [
    'flow artist mumbai',
    'fire performer india',
    'corporate juggling workshop',
    'flow workshop mumbai',
    'manwith3balls',
    'omkar dhareshwar',
    'marol art village',
    'street art mumbai',
    'brand storytelling india',
    'wicked broz',
    'graffiti mumbai',
    'national geographic traveller india',
    'world atlas of street art',
    'juggling artist india',
    'community art marol',
  ],
  authors: [{ name: 'Omkar Dhareshwar' }],
  openGraph: {
    type: 'profile',
    url: SITE_URL,
    title: 'Omkar Dhareshwar — Flow Artist & Performer',
    description: 'Fire, flow, and stories that actually mean something.',
    siteName: 'Omkar Dhareshwar',
    images: ['/og-image.jpg'],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omkar Dhareshwar — Flow Artist & Performer',
    description: 'Fire, flow, and stories that actually mean something.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
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
    'Fire Performance',
    'Street Art',
    'Brand Storytelling',
    'Performance Art',
    'Graffiti',
    'Community Art',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
