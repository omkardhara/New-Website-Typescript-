import type { Metadata } from 'next';
import { WritingListPage } from '@/components/WritingListPage';

export const metadata: Metadata = {
  title: 'Poems',
  description: 'Poetry by Omkar Dhareshwar — on time, belief, cities, love, and the edges of consciousness.',
  alternates: { canonical: 'https://www.omkardhareshwar.com/writing/poems' },
};

export default function PoemsPage() {
  return <WritingListPage section="poems" />;
}
