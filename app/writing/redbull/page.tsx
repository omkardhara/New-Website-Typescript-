import type { Metadata } from 'next';
import { WritingListPage } from '@/components/WritingListPage';

export const metadata: Metadata = {
  title: 'Red Bull Writing',
  description: 'Articles written by Omkar Dhareshwar for Red Bull India — covering breaking, street dance, surfing, and sport.',
  alternates: { canonical: 'https://www.omkardhareshwar.com/writing/redbull' },
};

export default function RedBullPage() {
  return <WritingListPage section="redbull" />;
}
