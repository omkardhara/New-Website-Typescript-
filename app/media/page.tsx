import type { Metadata } from 'next';
import { MediaListPage } from '@/components/MediaListPage';
import { VIDEOS } from '@/data/videos';

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

const videoListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Videos — Omkar Dhareshwar',
  url: 'https://www.omkardhareshwar.com/media',
  itemListElement: VIDEOS.map((v, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'VideoObject',
      name: v.title,
      description: v.sub,
      thumbnailUrl: v.thumb.startsWith('http')
        ? v.thumb
        : `https://www.omkardhareshwar.com${v.thumb}`,
      embedUrl: `https://www.youtube.com/embed/${v.yt}`,
      url: `https://www.youtube.com/watch?v=${v.yt}`,
    },
  })),
};

export default function MediaPage() {
  return (
    <main style={{ display: 'contents' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoListSchema) }}
      />
      <MediaListPage />
    </main>
  );
}
