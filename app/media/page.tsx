import type { Metadata } from 'next';
import { MediaListPage } from '@/components/MediaListPage';
import { VIDEOS } from '@/data/videos';

export const metadata: Metadata = {
  title: 'Juggling, Fire & Performance Videos',
  description: 'Juggling performances, fire acts, flow art reels, TV commercials, and documentary features by Omkar Dhareshwar. Mumbai-based flow artist and juggler.',
  alternates: { canonical: 'https://www.omkardhareshwar.com/media' },
  openGraph: {
    type: 'website',
    title: 'Juggling, Fire & Performance Videos · Omkar Dhareshwar',
    description: 'Juggling performances, fire acts, flow art reels, TV commercials, and documentary features.',
    url: 'https://www.omkardhareshwar.com/media',
    images: [{ url: '/og-2025.jpg', alt: 'Omkar Dhareshwar — Flow Artist, Performer & Storyteller' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Juggling, Fire & Performance Videos · Omkar Dhareshwar',
    description: 'Juggling performances, fire acts, flow art reels, TV commercials, and documentary features.',
    images: [{ url: '/og-2025.jpg', alt: 'Omkar Dhareshwar — Flow Artist, Performer & Storyteller' }],
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
