import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { CredStrip } from '@/components/CredStrip';
import { TabShell, type TabDef } from '@/components/TabShell';
import { ContactBand } from '@/components/ContactBand';
import { WorkTab } from '@/components/tabs/WorkTab';
import { MediaTab } from '@/components/tabs/MediaTab';
import { PressTab } from '@/components/tabs/PressTab';
import { NotesTab } from '@/components/tabs/NotesTab';
import { DispatchesTab } from '@/components/tabs/DispatchesTab';

export const metadata: Metadata = {
  title: 'Omkar Dhareshwar — Flow Artist, Performer & Storyteller',
  description:
    'Fire performances, corporate flow workshops, and brand storytelling. Featured in Nat Geo Traveller, Red Bull, Britannia, and Doordarshan. Based in Mumbai.',
  openGraph: {
    title: 'Omkar Dhareshwar — Flow Artist, Performer & Storyteller',
    description: 'Fire, flow, and stories that actually mean something.',
    url: 'https://www.omkardhareshwar.com',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omkar Dhareshwar — Flow Artist, Performer & Storyteller',
    description: 'Fire, flow, and stories that actually mean something.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.omkardhareshwar.com',
  },
};

const TABS: TabDef[] = [
  { id: 'work', num: '01', label: 'Work', content: <WorkTab /> },
  { id: 'media', num: '02', label: 'Media', content: <MediaTab /> },
  { id: 'press', num: '03', label: 'Press', content: <PressTab /> },
  { id: 'notes', num: '04', label: 'Writings', content: <NotesTab /> },
  { id: 'dispatches', num: '05', label: 'Adventures', content: <DispatchesTab /> },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <CredStrip />
      <TabShell tabs={TABS} />
      <ContactBand />
    </>
  );
}
