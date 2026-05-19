import type { Metadata } from 'next';
import { StoryMap } from '@/components/StoryMap';

const SITE_URL = 'https://www.omkardhareshwar.com';

const storySchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  name: "Story — Omkar Dhareshwar's Career Arc",
  description:
    'Ten years, six chapters. The career arc of Omkar Dhareshwar — engineering to ManWith3Balls. Marol Art Village, Nat Geo, Red Bull, Rickshaw Run, and what came after.',
  url: `${SITE_URL}/story`,
  about: {
    '@type': 'Person',
    name: 'Omkar Dhareshwar',
    alternateName: 'ManWith3Balls',
    url: SITE_URL,
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Story' },
    ],
  },
};

export const metadata: Metadata = {
  title: "Story — A decade of building things that didn't exist before",
  description:
    'Ten years, six chapters. The career arc of Omkar Dhareshwar — engineering to ManWith3Balls. Marol Art Village, Nat Geo, Red Bull, Rickshaw Run, and what came after.',
  alternates: { canonical: `${SITE_URL}/story` },
  openGraph: {
    type: 'website',
    title: "Story — A decade of building things that didn't exist before",
    description: "Ten years, six chapters. Engineering to ManWith3Balls — Marol Art Village, Nat Geo, Red Bull, and what came after.",
    url: `${SITE_URL}/story`,
    images: [{ url: '/og-image.jpg', alt: 'Omkar Dhareshwar — Flow Artist, Performer & Storyteller' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Story · Omkar Dhareshwar",
    description: "A decade of building things that didn't exist before.",
    images: [{ url: '/og-image.jpg', alt: 'Omkar Dhareshwar — Flow Artist, Performer & Storyteller' }],
  },
};

export default function StoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(storySchema) }}
      />
      <StoryMap />
    </>
  );
}
