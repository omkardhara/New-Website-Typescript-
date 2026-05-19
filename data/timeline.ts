// ─────────────────────────────────────────────────────────────
// TIMELINE DATA — chapters + events
// Used by the Story map at /story
// ─────────────────────────────────────────────────────────────

export type ChapterFull = {
  id: string;
  roman: string;
  label: string;
  period: string;
  desc: string;
  tags: string[];
};

export type TimelineEvent = {
  year: string;
  title: string;
  desc: string;
  tag: string;
  image?: string;
};

export const CHAPTERS_FULL: ChapterFull[] = [
  {
    id: 'genesis',
    roman: 'I',
    label: 'Genesis',
    period: '2014–15',
    desc: 'Engineering to art.',
    tags: ['Genesis', 'Foundation', 'Cinema'],
  },
  {
    id: 'marol',
    roman: 'II',
    label: 'Marol',
    period: '2015–16',
    desc: 'One wall, one district.',
    tags: ['Origin', 'Activism'],
  },
  {
    id: 'expansion',
    roman: 'III',
    label: 'Expansion',
    period: '2017–18',
    desc: 'Graffiti as civic language.',
    tags: ['International', 'Expansion'],
  },
  {
    id: 'recognition',
    roman: 'IV',
    label: 'Recognition',
    period: '2019–22',
    desc: 'Nat Geo. Red Bull. The world looks.',
    tags: ['Inflection', 'Recognition', 'Reinvention', 'Community'],
  },
  {
    id: 'mw3b',
    roman: 'V',
    label: 'ManWith3Balls',
    period: '2022–25',
    desc: 'The artist steps forward.',
    tags: ['Adventure', 'Installation · Activism'],
  },
  {
    id: 'present',
    roman: 'VI',
    label: 'Now',
    period: 'Present',
    desc: "Sky's the Limit.",
    tags: ['Present'],
  },
];

export const TIMELINE: TimelineEvent[] = [
  {
    year: 'Now',
    title: 'Workshops, busking, painting, mastering AI',
    desc: "Conducting flow workshops, juggling on the streets of Marol, painting walls, working on the next Bollywood meme intervention, and going deep on AI as the next creative tool.",
    tag: 'Present',
    image: '/images/flow-artist-omkardhareshwar-1.jpg',
  },
  {
    year: '2025',
    title: 'Flow Simulator at Museum of Goa · Bollywood Meme activism',
    desc: "Built an interactive juggling installation from PVC pipes for the Museum of Goa's Homo Ludens exhibition. The build inspired a new chapter on the streets — Bollywood memes as activism against littering in Marol.",
    tag: 'Installation · Activism',
    image: '/images/flow-sim-2.png',
  },
  {
    year: '2024',
    title: 'Rickshaw Run · Gangtok to Kochi',
    desc: '3,000 km across India in 14 days in a three-wheeler. Got the gig because of juggling. Featured on TV. Shot two ads on the way. Adventure as résumé.',
    tag: 'Adventure',
    image: '/images/Rikshaw Run-Gangtok to Kochi-Omkar Dhareshwar.jpg',
  },
  {
    year: '2022',
    title: 'Marol becomes self-operating · Ladies First 2.0',
    desc: "Hosted the second Ladies First Festival. By now, artists were arriving in Marol and painting without my knowledge. The district had its own gravity.",
    tag: 'Community',
    image: '/images/marol-art-village-7.jpg',
  },
  {
    year: '2020',
    title: 'Covid hits · ManWith3Balls is born',
    desc: "No travel. No work. Picked up slacklining and juggling. ManWith3Balls — finally stepping in front of the camera as an artist. Hosted the Now We Here Podcast: 21 days, 21 interviews with India's top artists.",
    tag: 'Reinvention',
  },
  {
    year: '2019-20',
    title: 'Nat Geo · Red Bull · Girliyapa',
    desc: "Featured in Nat Geo Traveller as one of 64 places to visit in India. Curated Red Bull's 'This Is My Hood' Mumbai episode. Featured on Girliyapa's must-visit list.",
    tag: 'Recognition',
  },
  {
    year: '2019',
    title: 'MRRWA partnership · Ladies First Festival',
    desc: 'Spotted by the Military Road Residents Welfare Association — finally, community support and wall permissions at scale. The first Ladies First Festival followed within months.',
    tag: 'Inflection',
    image: '/images/marol-art-village-4.jpg',
  },
  {
    year: '2018',
    title: 'Mini street art galleries across Marol',
    desc: 'Pockets of art across Jabarpada, Adarsh Nagar, the Wall of Fame. Marol stopped being one wall — it became a circuit.',
    tag: 'Expansion',
    image: '/images/marol-art-village-6.jpg',
  },
  {
    year: '2017',
    title: 'Brazil · Street of Styles, Curitiba',
    desc: "First trip outside India. 22-day road trip with India's first graffiti contingent to Brazil — invited by artists I'd hosted in Mumbai. Saw how local government and community could organise entire neighbourhoods around art.",
    tag: 'International',
    image: '/images/marol-art-village-2.jpg',
  },
  {
    year: '2016',
    title: 'Question Marks Campaign · Bboy Flying Machine',
    desc: 'Marked 500 Mumbai potholes with white question marks in one night — first major use of graffiti as activism. Started managing more artists, including Bboy Flying Machine, future 2× Red Bull BC One India champion.',
    tag: 'Activism',
    image: '/images/Potholes-omkardhareshwar-cover.jpg',
  },
  {
    year: '2015',
    title: 'Brazilian artists at Ecopark · Marol Art Village is born',
    desc: "Brought artists from Brazil's Keep It Real Crew to paint the Ecopark clubhouse. That afternoon planted the seed. 21+ artworks would follow at Ecopark over the years.",
    tag: 'Origin',
    image: '/images/marol-art-cover-1.jpg',
  },
  {
    year: '2015',
    title: "Jr. Art Director · 'Trapped' (Phantom Films)",
    desc: 'Worked under Vikramaditya Motwane on Trapped, starring Rajkummar Rao. First real glimpse of what was possible at the intersection of art, craft, and cinema.',
    tag: 'Cinema',
  },
  {
    year: '2014',
    title: 'Graduated Mech Eng · Founded Wicked Broz',
    desc: "Engineering degree from Sinhgad Institute, Lonavala. Started managing Zake — India's premier graffiti artist — and founded Wicked Broz to organise the unorganised street art segment.",
    tag: 'Foundation',
  },
  {
    year: '2014',
    title: 'Qroom Interiors · The first artistic act',
    desc: 'Designed interiors for Qroom — a 200 ft × 50 ft pool and hookah parlor — in my final year of engineering, using only waste materials: broken tiles, pipes, tires, bottles. First taste of being an artist.',
    tag: 'Genesis',
  },
];

export function eventsForChapter(chapter: ChapterFull): TimelineEvent[] {
  return TIMELINE.filter((e) => chapter.tags.includes(e.tag));
}
