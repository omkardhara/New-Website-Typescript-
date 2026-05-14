import type { Metadata } from 'next';
import { StoryMap } from '@/components/StoryMap';

export const metadata: Metadata = {
  title: "Story — A decade of building things that didn't exist before",
  description:
    'Ten years, six chapters. The career arc of Omkar Dhareshwar — engineering to ManWith3Balls. Marol Art Village, Nat Geo, Red Bull, Rickshaw Run, and what came after.',
  openGraph: {
    title: 'Story · Omkar Dhareshwar',
    description: "A decade of building things that didn't exist before.",
  },
};

export default function StoryPage() {
  return <StoryMap />;
}
