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
  title: 'Juggler, Flow Artist & Street Artist in Mumbai',
  description:
    'Omkar Dhareshwar — juggler, flow artist, fire performer, and storyteller based in Mumbai. Mechanical engineer by degree; everything else by choice. Featured in Nat Geo, Red Bull, Doordarshan, and Britannia.',
  alternates: { canonical: 'https://www.omkardhareshwar.com/about' },
  openGraph: {
    type: 'profile',
    title: 'Juggler, Flow Artist & Street Artist in Mumbai · Omkar Dhareshwar',
    description: 'Juggler, fire performer, and street artist. Mechanical engineer by degree. Everything else by choice.',
    url: 'https://www.omkardhareshwar.com/about',
    images: [{ url: '/og-2025.jpg', alt: 'Omkar Dhareshwar — Flow Artist, Performer & Storyteller' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Juggler, Flow Artist & Street Artist in Mumbai · Omkar Dhareshwar',
    description: 'Juggler, fire performer, and street artist. Mechanical engineer by degree. Everything else by choice.',
    images: [{ url: '/og-2025.jpg', alt: 'Omkar Dhareshwar — Flow Artist, Performer & Storyteller' }],
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
