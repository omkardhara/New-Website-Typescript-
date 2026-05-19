import type { Metadata } from 'next';
import { WritingListPage } from '@/components/WritingListPage';

export const metadata: Metadata = {
  title: 'Essays',
  description: 'Long-form essays by Omkar Dhareshwar on craft, philosophy, spirituality, adventure, and identity.',
  alternates: { canonical: 'https://www.omkardhareshwar.com/writing/essays' },
  openGraph: {
    title: 'Essays · Omkar Dhareshwar',
    description: 'Long-form essays on craft, philosophy, spirituality, adventure, and identity.',
    url: 'https://www.omkardhareshwar.com/writing/essays',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Essays · Omkar Dhareshwar',
    description: 'Long-form essays on craft, philosophy, spirituality, adventure, and identity.',
    images: ['/og-image.jpg'],
  },
};

export default function EssaysPage() {
  return <WritingListPage section="essays" />;
}
