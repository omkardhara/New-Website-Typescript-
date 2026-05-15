import { Hero } from '@/components/Hero';
import { CredStrip } from '@/components/CredStrip';
import { TabShell, type TabDef } from '@/components/TabShell';
import { ContactBand } from '@/components/ContactBand';
import { WorkTab } from '@/components/tabs/WorkTab';
import { MediaTab } from '@/components/tabs/MediaTab';
import { PressTab } from '@/components/tabs/PressTab';
import { NotesTab } from '@/components/tabs/NotesTab';
import { DispatchesTab } from '@/components/tabs/DispatchesTab';

// #11: Story tab removed. Story is reachable via the nav link and the hero CTA.
const TABS: TabDef[] = [
  { id: 'work', num: '01', label: 'Work', content: <WorkTab /> },
  { id: 'media', num: '02', label: 'Media', content: <MediaTab /> },
  { id: 'press', num: '03', label: 'Press', content: <PressTab /> },
  { id: 'notes', num: '04', label: 'Field Notes', content: <NotesTab /> },
  { id: 'dispatches', num: '05', label: 'Dispatches', content: <DispatchesTab /> },
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
