import type { Metadata } from 'next';
import { PressListPage } from '@/components/PressListPage';
import type { PressCategory } from '@/data/types';

export const metadata: Metadata = {
  title: 'Press',
  description: 'Press features on Omkar Dhareshwar — street art, juggling, activism and installations covered by National Geographic, Mid-Day, Times of India and more.',
  alternates: { canonical: 'https://www.omkardhareshwar.com/press' },
};

const VALID_CATS = ['street-art', 'juggling', 'activism', 'installation'];

export default function PressPage({
  searchParams,
}: {
  searchParams: { cat?: string };
}) {
  const defaultCat = VALID_CATS.includes(searchParams.cat ?? '')
    ? (searchParams.cat as PressCategory)
    : 'all';

  return <PressListPage defaultCategory={defaultCat} />;
}
