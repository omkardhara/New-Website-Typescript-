import type { Metadata } from 'next';
import { MediaListPage } from '@/components/MediaListPage';

export const metadata: Metadata = {
  title: 'Videos',
  description: 'TV commercials, performance reels, documentary features and vlogs by Omkar Dhareshwar.',
  alternates: { canonical: 'https://www.omkardhareshwar.com/media' },
};

export default function MediaPage() {
  return <MediaListPage />;
}
