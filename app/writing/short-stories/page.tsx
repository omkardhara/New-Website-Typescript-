import type { Metadata } from 'next';
import { WritingListPage } from '@/components/WritingListPage';

export const metadata: Metadata = {
  title: 'Short Stories',
  description: 'Short fiction by Omkar Dhareshwar.',
  alternates: { canonical: 'https://www.omkardhareshwar.com/writing/short-stories' },
};

export default function ShortStoriesPage() {
  return <WritingListPage type="short-story" />;
}
