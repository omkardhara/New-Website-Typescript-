import type { Metadata } from 'next';
import { AboutPage } from '@/components/AboutPage';

const SITE_URL = 'https://www.omkardhareshwar.com';

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Omkar Dhareshwar',
  url: `${SITE_URL}/about`,
  description: 'Flow artist, fire performer, and storyteller based in Mumbai. Mechanical engineer by degree; everything else by choice.',
  mainEntity: {
    '@type': 'Person',
    name: 'Omkar Dhareshwar',
    alternateName: 'ManWith3Balls',
    jobTitle: 'Flow Artist, Performer & Storyteller',
    url: SITE_URL,
    email: 'mailto:omkar.dhara@gmail.com',
    address: { '@type': 'PostalAddress', addressLocality: 'Mumbai', addressCountry: 'IN' },
  },
};

export const metadata: Metadata = {
  title: 'About',
  description:
    'Omkar Dhareshwar — flow artist, fire performer, and storyteller based in Mumbai. Mechanical engineer by degree; everything else by choice. Featured in Nat Geo, Red Bull, Doordarshan, and Britannia.',
  alternates: { canonical: 'https://www.omkardhareshwar.com/about' },
  openGraph: {
    title: 'About · Omkar Dhareshwar',
    description: 'Mechanical engineer by degree. Everything else by choice.',
    url: 'https://www.omkardhareshwar.com/about',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About · Omkar Dhareshwar',
    description: 'Mechanical engineer by degree. Everything else by choice.',
    images: ['/og-image.jpg'],
  },
};

export default function AboutRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <AboutPage />
    </>
  );
}
