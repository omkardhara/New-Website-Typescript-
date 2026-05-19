import type { Metadata } from 'next';
import { WritingListPage } from '@/components/WritingListPage';
import { NOTES } from '@/data/site';

const SITE_URL = 'https://www.omkardhareshwar.com';

const poemNotes = NOTES.filter((n) => n.type === 'poem');

const poemsSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Poems — Omkar Dhareshwar',
  url: `${SITE_URL}/writing/poems`,
  description: 'Poetry on time, belief, cities, love, and the edges of consciousness.',
  about: { '@type': 'Person', name: 'Omkar Dhareshwar', url: SITE_URL },
  hasPart: poemNotes.map((n) => ({
    '@type': 'CreativeWork',
    name: n.title,
    description: n.excerpt,
    url: n.url ?? `${SITE_URL}/writing/${n.slug}`,
    datePublished: n.date,
    author: { '@type': 'Person', name: 'Omkar Dhareshwar', url: SITE_URL },
  })),
};

export const metadata: Metadata = {
  title: 'Poems',
  description: 'Poetry by Omkar Dhareshwar — on time, belief, cities, love, and the edges of consciousness.',
  alternates: { canonical: 'https://www.omkardhareshwar.com/writing/poems' },
  openGraph: {
    title: 'Poems · Omkar Dhareshwar',
    description: 'Poetry on time, belief, cities, love, and the edges of consciousness.',
    url: 'https://www.omkardhareshwar.com/writing/poems',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Poems · Omkar Dhareshwar',
    description: 'Poetry on time, belief, cities, love, and the edges of consciousness.',
    images: ['/og-image.jpg'],
  },
};

export default function PoemsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(poemsSchema) }}
      />
      <WritingListPage section="poems" />
    </>
  );
}
