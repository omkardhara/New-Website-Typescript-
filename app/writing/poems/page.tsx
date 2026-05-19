import type { Metadata } from 'next';
import { WritingListPage } from '@/components/WritingListPage';

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
  return <WritingListPage section="poems" />;
}
