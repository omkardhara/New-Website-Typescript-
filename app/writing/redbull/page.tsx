import type { Metadata } from 'next';
import { WritingListPage } from '@/components/WritingListPage';

export const metadata: Metadata = {
  title: 'Red Bull Writing',
  description: 'Articles written by Omkar Dhareshwar for Red Bull India — covering breaking, street dance, surfing, and sport.',
  alternates: { canonical: 'https://www.omkardhareshwar.com/writing/redbull' },
  openGraph: {
    title: 'Red Bull Writing · Omkar Dhareshwar',
    description: 'Articles for Red Bull India — covering breaking, street dance, surfing, and sport.',
    url: 'https://www.omkardhareshwar.com/writing/redbull',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Red Bull Writing · Omkar Dhareshwar',
    description: 'Articles for Red Bull India — covering breaking, street dance, surfing, and sport.',
    images: ['/og-image.jpg'],
  },
};

export default function RedBullPage() {
  return <WritingListPage section="redbull" />;
}
