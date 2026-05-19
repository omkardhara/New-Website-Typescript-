import type { Metadata } from 'next';
import { PressListPage } from '@/components/PressListPage';
import { PRESS } from '@/data/site';
import type { PressCategory } from '@/data/types';

const SITE_URL = 'https://www.omkardhareshwar.com';

export const metadata: Metadata = {
  title: 'Press',
  description:
    'Omkar Dhareshwar featured in National Geographic Traveller India, World Atlas of Street Art, Mid-Day, Times of India, and Free Press Journal — covering street art murals in Marol Mumbai, flow art juggling performances, community activism, and Wicked Broz graffiti collective.',
  keywords: [
    'omkar dhareshwar press',
    'wicked broz media coverage',
    'marol art village national geographic',
    'street art mumbai press',
    'juggling artist india featured',
    'marol graffiti times of india',
    'mid-day street art mumbai',
    'world atlas of street art india',
  ],
  alternates: { canonical: `${SITE_URL}/press` },
  openGraph: {
    title: 'Press · Omkar Dhareshwar',
    description:
      'Featured in National Geographic Traveller India, World Atlas of Street Art, Mid-Day, Times of India and more — street art, juggling, and activism in Mumbai.',
    url: `${SITE_URL}/press`,
    images: ['/images/press/natgeo-marol-p1.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Press · Omkar Dhareshwar',
    description:
      'Featured in National Geographic Traveller India, World Atlas of Street Art, Mid-Day, Times of India and more.',
    images: ['/images/press/natgeo-marol-p1.jpg'],
  },
};

const VALID_CATS = ['street-art', 'juggling', 'activism', 'installation'];

// Structured data: CollectionPage listing each press feature as a NewsArticle / Book
function buildSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Press Coverage — Omkar Dhareshwar',
    description:
      'Media features on Omkar Dhareshwar covering street art, flow arts, community activism and installations in Mumbai.',
    url: `${SITE_URL}/press`,
    about: {
      '@type': 'Person',
      name: 'Omkar Dhareshwar',
      url: SITE_URL,
    },
    hasPart: PRESS.map((p) => ({
      '@type': p.publication === 'World Atlas of Street Art' ? 'Book' : 'NewsArticle',
      headline: p.title,
      datePublished: p.year,
      ...(p.url ? { url: p.url } : {}),
      publisher: {
        '@type': 'Organization',
        name: p.publication,
      },
      about: {
        '@type': 'Person',
        name: 'Omkar Dhareshwar',
      },
    })),
  };
}

export default function PressPage({
  searchParams,
}: {
  searchParams: { cat?: string };
}) {
  const defaultCat = VALID_CATS.includes(searchParams.cat ?? '')
    ? (searchParams.cat as PressCategory)
    : 'all';

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema()) }}
      />
      <PressListPage defaultCategory={defaultCat} />
    </>
  );
}
