import type { Metadata } from 'next';
import { StoryMap } from '@/components/StoryMap';

export const metadata: Metadata = {
  title: "Story — A decade of building things that didn't exist before",
  description:
    'Ten years, six chapters. The career arc of Omkar Dhareshwar — engineering to ManWith3Balls. Marol Art Village, Nat Geo, Red Bull, Rickshaw Run, and what came after.',
  alternates: { canonical: 'https://www.omkardhareshwar.com/story' },
  openGraph: {
    title: "Story — A decade of building things that didn't exist before",
    description: "Ten years, six chapters. Engineering to ManWith3Balls — Marol Art Village, Nat Geo, Red Bull, and what came after.",
    url: 'https://www.omkardhareshwar.com/story',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Story · Omkar Dhareshwar",
    description: "A decade of building things that didn't exist before.",
    images: ['/og-image.jpg'],
  },
};

export default function StoryPage() {
  return <StoryMap />;
}
