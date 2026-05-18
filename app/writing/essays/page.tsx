import type { Metadata } from 'next';
import { WritingListPage } from '@/components/WritingListPage';

export const metadata: Metadata = {
  title: 'Essays',
  description: 'Long-form essays by Omkar Dhareshwar on craft, philosophy, spirituality, adventure, and identity.',
  alternates: { canonical: 'https://www.omkardhareshwar.com/writing/essays' },
};

export default function EssaysPage() {
  return <WritingListPage section="essays" />;
}
