import type { Metadata } from 'next';
import { WritingListPage } from '@/components/WritingListPage';
import { NOTES } from '@/data/site';

const SITE_URL = 'https://www.omkardhareshwar.com';

const redbullNotes = NOTES.filter((n) => n.publication === 'Red Bull');
const firstImage = redbullNotes.find((n) => n.image)?.image ?? '/og-2025.jpg';

const redbullSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Red Bull Writing — Omkar Dhareshwar',
  url: `${SITE_URL}/writing/redbull`,
  description: 'Articles written for Red Bull India — covering breaking, street dance, surfing, and sport.',
  about: { '@type': 'Person', name: 'Omkar Dhareshwar', url: SITE_URL },
  hasPart: redbullNotes.map((n) => ({
    '@type': 'Article',
    name: n.title,
    description: n.excerpt,
    url: n.url ?? `${SITE_URL}/writing/${n.slug}`,
    datePublished: n.date,
    isPartOf: { '@type': 'Periodical', name: 'Red Bull' },
    author: { '@type': 'Person', name: 'Omkar Dhareshwar', url: SITE_URL },
  })),
};

export const metadata: Metadata = {
  title: 'Red Bull Writing',
  description: 'Articles written by Omkar Dhareshwar for Red Bull India — covering breaking, street dance, surfing, and sport.',
  alternates: { canonical: 'https://www.omkardhareshwar.com/writing/redbull' },
  openGraph: {
    type: 'website',
    title: 'Red Bull Writing · Omkar Dhareshwar',
    description: 'Articles for Red Bull India — covering breaking, street dance, surfing, and sport.',
    url: 'https://www.omkardhareshwar.com/writing/redbull',
    images: [{ url: `${SITE_URL}${firstImage}`, alt: 'Omkar Dhareshwar writing for Red Bull India' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Red Bull Writing · Omkar Dhareshwar',
    description: 'Articles for Red Bull India — covering breaking, street dance, surfing, and sport.',
    images: [{ url: `${SITE_URL}${firstImage}`, alt: 'Omkar Dhareshwar writing for Red Bull India' }],
  },
};

export default function RedBullPage() {
  return (
    <main style={{ display: 'contents' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(redbullSchema) }}
      />
      <WritingListPage section="redbull" />
    </main>
  );
}
