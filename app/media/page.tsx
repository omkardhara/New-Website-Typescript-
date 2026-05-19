import type { Metadata } from 'next';
import { MediaListPage } from '@/components/MediaListPage';

export const metadata: Metadata = {
  title: 'Videos',
  description: 'TV commercials, performance reels, documentary features and vlogs by Omkar Dhareshwar.',
  alternates: { canonical: 'https://www.omkardhareshwar.com/media' },
  openGraph: {
    title: 'Videos · Omkar Dhareshwar',
    description: 'TV commercials, performance reels, documentary features and vlogs.',
    url: 'https://www.omkardhareshwar.com/media',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Videos · Omkar Dhareshwar',
    description: 'TV commercials, performance reels, documentary features and vlogs.',
    images: ['/og-image.jpg'],
  },
};

export default function MediaPage() {
  return <MediaListPage />;
}
