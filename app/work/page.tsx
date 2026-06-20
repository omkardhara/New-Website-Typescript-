import type { Metadata } from 'next';
import { WorkListPage } from '@/components/WorkListPage';
import { WORK } from '@/data/work';

const SITE_URL = 'https://www.omkardhareshwar.com';

export const metadata: Metadata = {
  title: 'Flow Art, Street Art & Brand Projects',
  description: `${WORK.length} projects — juggling performances, flow art installations, street art, brand activations, and community work. Mumbai, 2014–2025.`,
  alternates: { canonical: `${SITE_URL}/work` },
  openGraph: {
    type: 'website',
    title: 'Flow Art, Street Art & Brand Projects · Omkar Dhareshwar',
    description: 'Juggling performances, flow art installations, street art, brand activations, and community work.',
    url: `${SITE_URL}/work`,
    images: [{ url: '/og-2025.jpg', alt: 'Omkar Dhareshwar — Flow Artist, Performer & Storyteller' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flow Art, Street Art & Brand Projects · Omkar Dhareshwar',
    description: 'Juggling performances, flow art installations, street art, brand activations, and community work.',
    images: [{ url: '/og-2025.jpg', alt: 'Omkar Dhareshwar — Flow Artist, Performer & Storyteller' }],
  },
};

const workListSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Work — Omkar Dhareshwar',
  url: `${SITE_URL}/work`,
  description: 'Projects across performance, brand, installation, activism, and education.',
  hasPart: WORK.filter((w) => !w.url).map((w) => ({
    '@type': 'CreativeWork',
    name: w.title,
    description: w.desc,
    url: `${SITE_URL}/work/${w.slug}`,
  })),
};

export default function WorkPage() {
  return (
    <main style={{ display: 'contents' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(workListSchema) }}
      />
      <WorkListPage />
    </main>
  );
}
