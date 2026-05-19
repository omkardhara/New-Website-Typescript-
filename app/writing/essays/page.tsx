import type { Metadata } from 'next';
import { WritingListPage } from '@/components/WritingListPage';
import { NOTES } from '@/data/site';

const SITE_URL = 'https://www.omkardhareshwar.com';

const essayNotes = NOTES.filter(
  (n) => (n.type === 'article' || n.type === 'short-story') && n.publication !== 'Red Bull'
);

const essaysSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Essays — Omkar Dhareshwar',
  url: `${SITE_URL}/writing/essays`,
  description: 'Long-form essays on craft, philosophy, spirituality, adventure, and identity.',
  about: { '@type': 'Person', name: 'Omkar Dhareshwar', url: SITE_URL },
  hasPart: essayNotes.map((n) => ({
    '@type': 'Article',
    name: n.title,
    description: n.excerpt,
    url: n.url ?? `${SITE_URL}/writing/${n.slug}`,
    datePublished: n.date,
    author: { '@type': 'Person', name: 'Omkar Dhareshwar', url: SITE_URL },
  })),
};

export const metadata: Metadata = {
  title: 'Essays',
  description: 'Long-form essays by Omkar Dhareshwar on craft, philosophy, spirituality, adventure, and identity.',
  alternates: { canonical: 'https://www.omkardhareshwar.com/writing/essays' },
  openGraph: {
    type: 'website',
    title: 'Essays · Omkar Dhareshwar',
    description: 'Long-form essays on craft, philosophy, spirituality, adventure, and identity.',
    url: 'https://www.omkardhareshwar.com/writing/essays',
    images: [{ url: '/og-image.jpg', alt: 'Omkar Dhareshwar — Flow Artist, Performer & Storyteller' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Essays · Omkar Dhareshwar',
    description: 'Long-form essays on craft, philosophy, spirituality, adventure, and identity.',
    images: [{ url: '/og-image.jpg', alt: 'Omkar Dhareshwar — Flow Artist, Performer & Storyteller' }],
  },
};

export default function EssaysPage() {
  return (
    <main style={{ display: 'contents' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(essaysSchema) }}
      />
      <WritingListPage section="essays" />
    </main>
  );
}
