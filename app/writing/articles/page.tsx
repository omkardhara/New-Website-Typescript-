import type { Metadata } from 'next';
import { WritingListPage } from '@/components/WritingListPage';

export const metadata: Metadata = {
  title: 'Articles',
  description: 'Long-form writing by Omkar Dhareshwar on craft, identity, adventure, and subculture.',
  alternates: { canonical: 'https://www.omkardhareshwar.com/writing/articles' },
};

export default function ArticlesPage() {
  return <WritingListPage type="article" />;
}
