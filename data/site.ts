import type { PressItem, Note, Chapter, Offering, Social } from './types';
import { WRITING_CONTENT } from './writing-content';

// ─── PRESS ──────────────────────────────────────────────────
export const PRESS: PressItem[] = [
  { id: 1, publication: 'National Geographic', featured: true, type: 'image', src: '/images/press/natgeo.jpg', year: '2024' },
  { id: 2, publication: 'Graffiti Magazine (DE)', featured: true, type: 'image', src: '/images/press/german-graffiti.jpg', year: '2023' },
  { id: 3, publication: 'Mid-Day', featured: false, type: 'image', src: '/images/press/midday-1.jpg', year: '2025' },
  { id: 4, publication: 'Mid-Day', featured: false, type: 'image', src: '/images/press/midday-2.jpg', year: '2024' },
  { id: 5, publication: 'Mumbai Mirror', featured: false, type: 'image', src: '/images/press/mumbai-mirror.jpg', year: '2016' },
  { id: 6, publication: 'Red Bull India', featured: false, type: 'image', src: '/images/press/red-bull.jpg', year: '2020' },
  { id: 7, publication: 'Girliyapa', featured: false, type: 'image', src: '/images/press/girliyapa.jpg', year: '2019' },
  { id: 8, publication: 'Local Press', featured: false, type: 'image', src: '/images/press/local-press.jpg', year: '2022' },
];

// ─── WRITINGS ───────────────────────────────────────────────
export const NOTES: Note[] = [
  // Articles
  {
    id: 1,
    slug: 'flow-arts-taught-me-stillness',
    image: '/images/flow-artist-omkardhareshwar-1.jpg',
    title: 'What flow arts actually taught me about being still',
    date: 'March 2025',
    read: '5 min',
    tag: 'Craft',
    type: 'article',
    excerpt: 'The cruel paradox at the center of every movement practice: the harder you chase the state, the further it gets. Here\'s what six years of throwing objects at my own face taught me about letting go.',
    content: WRITING_CONTENT['flow-arts-taught-me-stillness'],
  },
  {
    id: 2,
    slug: 'rickshaw-run-dispatch',
    image: '/images/Rikshaw Run- Gangtok to Kochi- Omkar Dhareshwar- Finish Line.jpg',
    title: 'Gangtok to Kochi in a Rickshaw. Notes from the road.',
    date: 'January 2025',
    read: '12 min',
    tag: 'Adventure',
    type: 'article',
    excerpt: '3,000 km on three wheels with no plan, one co-driver, and a vehicle that kept threatening to retire.',
    content: WRITING_CONTENT['rickshaw-run-dispatch'],
  },
  {
    id: 3,
    slug: 'writing-for-red-bull',
    image: '/images/red-bull-bc-one-cypher-india-2024-winner-flying-machine.jpg',
    title: 'Writing for Red Bull: translating something wordless',
    date: 'November 2024',
    read: '7 min',
    tag: 'Writing',
    type: 'article',
    excerpt: 'When a mainstream brand wants to cover a subculture, something usually gets lost in translation. On trying to not be that loss.',
    content: WRITING_CONTENT['writing-for-red-bull'],
  },
  {
    id: 4,
    slug: 'stopped-explaining-at-parties',
    title: 'Why I stopped explaining what I do at parties',
    date: 'September 2024',
    read: '4 min',
    tag: 'Identity',
    type: 'article',
    excerpt: '"So what do you do?" I used to give a different answer every time. Lately I\'ve stopped answering at all. It\'s going better.',
    content: WRITING_CONTENT['stopped-explaining-at-parties'],
  },
  // Poems
  {
    id: 5,
    slug: 'three-balls',
    title: 'Three Balls',
    date: 'February 2025',
    read: '1 min',
    tag: 'Object & Identity',
    type: 'poem',
    excerpt: 'Watch the pattern, not the pieces. The pattern is the thing.',
    content: WRITING_CONTENT['three-balls'],
  },
  {
    id: 6,
    slug: 'border-town',
    title: 'Border Town',
    date: 'December 2024',
    read: '1 min',
    tag: 'Road',
    type: 'poem',
    excerpt: 'Some distances are for the inside.',
    content: WRITING_CONTENT['border-town'],
  },
  {
    id: 7,
    slug: 'the-fire-doesnt-ask',
    title: 'The Fire Doesn\'t Ask',
    date: 'October 2024',
    read: '1 min',
    tag: 'Practice',
    type: 'poem',
    excerpt: 'You train for the dark parts — the handoff between intention and release.',
    content: WRITING_CONTENT['the-fire-doesnt-ask'],
  },
];

// ─── STORY CHAPTERS ─────────────────────────────────────────
export const CHAPTERS: Chapter[] = [
  { id: 'genesis', roman: 'I', label: 'Genesis', period: '2014–15', desc: 'Engineering to art.' },
  { id: 'marol', roman: 'II', label: 'Marol', period: '2015–16', desc: 'One wall, one district.' },
  { id: 'expansion', roman: 'III', label: 'Expansion', period: '2017–18', desc: 'Graffiti as civic language.' },
  { id: 'recognition', roman: 'IV', label: 'Recognition', period: '2019–22', desc: 'Nat Geo. Red Bull. The world looks.' },
  { id: 'mw3b', roman: 'V', label: 'ManWith3Balls', period: '2022–25', desc: 'The artist steps forward.' },
  { id: 'present', roman: 'VI', label: 'Now', period: 'Present', desc: "Sky's the limit." },
];

// ─── OFFERINGS ──────────────────────────────────────────────
export const OFFERINGS: Offering[] = [
  {
    id: 'perf',
    icon: '🎭',
    label: 'Performances',
    title: 'Live Fire & Flow',
    desc: "Solo sets or collaborative shows. Fire, poi, staff, silk — or a combination that doesn't have a name yet. For festivals, corporate events, brand activations, and private occasions.",
    note: 'Indoor / outdoor / rain-proof',
  },
  {
    id: 'workshop',
    icon: '🌀',
    label: 'Workshops',
    title: 'Flow State for Humans',
    desc: 'A workshop that teaches the principles of flow through movement — not PowerPoint. Built for corporate teams, creative organisations, and groups who want something that actually works.',
    note: 'Half-day or full-day formats',
  },
  {
    id: 'brand',
    icon: '✦',
    label: 'Brand Collaborations',
    title: 'Creative Direction + Content',
    desc: 'Art direction, long-form writing, content creation, brand storytelling — for brands that want something to mean something. Not PR. Not content marketing. Work.',
    note: 'Red Bull, Museum of Goa, and others on request',
  },
];

// ─── SOCIALS ────────────────────────────────────────────────
export const SOCIALS: Social[] = [
  { label: 'Instagram', handle: '@omkar_dhara', href: 'https://instagram.com/omkar_dhara' },
  { label: 'YouTube', handle: '@OmkarDhareshwar', href: 'https://www.youtube.com/@OmkarDhareshwar' },
  { label: 'LinkedIn', handle: 'OmkarDhareshwar', href: 'https://www.linkedin.com/in/omkardhareshwar' },
  { label: 'Juggler Insta', handle: '@manwith3balls', href: 'https://instagram.com/manwith3balls' },
];

export const getNoteBySlug = (slug: string) => NOTES.find((n) => n.slug === slug);

// ─── NAV ────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Story', href: '/story' },
  { label: 'Offerings', href: '/#offerings' },
];
