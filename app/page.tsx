import { Hero } from '@/components/Hero';
import { TabShell, type TabDef } from '@/components/TabShell';
import { ContactBand } from '@/components/ContactBand';
import { WorkTab } from '@/components/tabs/WorkTab';
import { MediaTab } from '@/components/tabs/MediaTab';
import { PressTab } from '@/components/tabs/PressTab';
import { NotesTab } from '@/components/tabs/NotesTab';
import { StoryTab } from '@/components/tabs/StoryTab';
import { DispatchesTab } from '@/components/tabs/DispatchesTab';

const TABS: TabDef[] = [
  { id: 'work', num: '01', label: 'Work', content: <WorkTab /> },
  { id: 'media', num: '02', label: 'Media', content: <MediaTab /> },
  { id: 'press', num: '03', label: 'Press', content: <PressTab /> },
  { id: 'notes', num: '04', label: 'Field Notes', content: <NotesTab /> },
  { id: 'story', num: '05', label: 'Story', content: <StoryTab /> },
  { id: 'dispatches', num: '06', label: 'Dispatches', content: <DispatchesTab /> },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <TabShell tabs={TABS} />
      <ContactBand />
    </>
  );
}
