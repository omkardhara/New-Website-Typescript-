import type { WorkItem } from './types';

export const WORK_FILTERS = [
  { id: 'all',         label: 'Everything'    },
  { id: 'performance', label: 'Performances'  },
  { id: 'installation',label: 'Installations' },
  { id: 'activism',    label: 'Activism'      },
  { id: 'production',  label: 'Production'    },
  { id: 'brand',       label: 'Brand'         },
  { id: 'art',         label: 'Art'           },
  { id: 'education',   label: 'Education'     },
] as const;

export const WORK: WorkItem[] = [
  {
    id: 1,
    slug: 'garbage-spots-bollywood-memes',
    cat: 'activism',
    tag: 'Street Art · Activism · 2025',
    title: 'Turning Garbage Spots into Conversation Starters',
    desc: 'Using Bollywood memes as street interventions in Marol to make people pause and think twice before they litter.',
    stat: '3 spots · 6 months',
    glyph: '🔥',
    gradient: 'radial-gradient(ellipse at 30% 40%, rgba(200,90,42,0.32), rgba(15,15,13,0.15) 65%, var(--bg-cream))',
    image: '/images/Art-Activism-1.jpg',
    images: [
      '/images/Art-Activism-1- Omkar Dhareshwar.jpg',
      '/images/Art-Activism-2-Omkar Dhareshwar.jpg',
      '/images/art-activism-omkardhareshwar-3.jpg',
      '/images/art-activism-omkardhareshwar-5.jpg',
    ],
    captions: [
      'Munnabhai & Circuit advise people to dump in the bin',
      "Hera Pheri's hilarious character lamenting the situation",
      "Vijay Raaz's character from Dhamaal comes to life",
      'The installations received extensive media coverage',
    ],
    article: `In a city like Mumbai, you get used to seeing the same things every day. For me, that included walking past certain spots in Marol and noticing garbage piling up in plain sight. At the bus stop on Military Road and near the Ashok Nagar bridge, trash would collect just a few feet away from bins. During the rains, it got worse. The smell, the mess, and people trying to walk around it while traffic rushed past made it hard to ignore. It stayed with me for months.

I kept thinking about why this was happening. The bins were there. The system existed. But people still chose to dump waste wherever they felt like. I had seen how images of gods were sometimes used to stop people from littering, and it made me think about what holds attention today. Bollywood and memes felt like a language people instantly understand. That idea stuck with me. Instead of putting up another instruction or warning, I decided to try something people might actually notice and react to.

With help from my brother Soham Dhareshwar and support from the Dream Marol community led by Suresh Nair, I started placing framed flex boards at these dumping spots. Each one used a Bollywood-style meme to get the message across. We installed three of these over six months in areas where dumping kept happening. The idea was not complicated. If someone stopped for even a second, read it, and thought twice before throwing garbage there, it was doing its job. The project also got picked up by Mid-Day twice, which helped bring more attention to the issue.

I don't know if this will completely change people's habits. But it felt important to try something instead of just walking past and feeling frustrated. If this approach works, I'll build on it. If it doesn't, I'll try something else. For me, this project was a reminder that art doesn't have to stay in a studio or gallery. It can step into everyday spaces and respond to what's happening around us.`,
  },
  {
    id: 2,
    slug: 'wassup-ranveer-singh-mc-altaf',
    cat: 'production',
    tag: 'Ranveer Singh · MC Altaf · 2018',
    title: 'We Shot a Cult Desi Hip-Hop Video in a Living Room and Got Ranveer Singh in It',
    desc: "How a living room shoot, borrowed resources, and a surprise Ranveer Singh cameo came together to create a small but unforgettable moment in India's hip-hop journey.",
    stat: '300K views · Ranveer Singh',
    glyph: '🎬',
    gradient: 'radial-gradient(ellipse at 40% 50%, rgba(191,155,69,0.12), transparent 65%)',
    image: '/images/wassup-production-omkardhareshwar-1.jpg',
    images: [
      '/images/wassup-production-2-omkardhareshwar.jpg',
      '/images/wassup-production-4-omkardhareshwar.jpg',
      '/images/wassup-production-3-omkardhareshwar.jpg',
      '/images/wassup-production-5-omkardhareshwar.jpg',
    ],
    captions: [
      'With MC Altaf, D-EVIL & Bboy Flying Machine at Puma X HMGRWN Shoot',
      'MC Altaf, Udayan, Jay Kila and Omkar recording at the studio',
      "Me in the Eva's Pizza delivery uniform doing a cameo",
      'A still from the house party scene',
    ],
    article: `Back in 2018, I found myself in the middle of a small but exciting circle, managing a few graffiti artists and working closely with Bboy Flying Machine, also known as Arif Chaudhary. Around then, a young rapper from Dharavi named MC Altaf reached out looking for guidance. Within a week, the three of us were sitting together, talking music and realizing there was something worth building.

We recorded the track "Wassup" at my college friend Udayan Dharmadhikari's home studio. For the video, I got Bhumesh Das on board. The plan was ambitious — multiple outdoor locations. Then the rain showed up and refused to leave. Within two hours, we had a new plan. My parents were heading out of town, so we turned my living room into our set.

I walked into Evas Pizza in Marol and convinced them to give us ten pizzas in exchange for a placement in the video. Then Altaf mentioned he had met Ranveer Singh on the sets of Gully Boy. A short while later, we had a clip of Ranveer vibing and lip-syncing to the track from his vanity van.

The video crossed 300,000 views on YouTube. MC Altaf went on to join Gully Gang. Udayan continued growing as a music director. Bhumesh started Alphabooom. For me, this project is a reminder of how much can happen when you connect the right people at the right time.`,
  },
  {
    id: 3,
    slug: 'flow-simulator-museum-of-goa',
    cat: 'installation',
    tag: 'Installation · Museum of Goa · 2025',
    title: 'Flow Simulator 1.0',
    desc: "An interactive juggling board built from PVC pipes, commissioned for 'Khel-Spel HomoLudens: The Art of Play' at Museum of Goa.",
    stat: '108 parts · 8-week run',
    glyph: '🎨',
    gradient: 'radial-gradient(ellipse at 50% 60%, rgba(100,80,200,0.22), rgba(15,15,13,0.12) 65%, var(--bg-cream))',
    image: '/images/flow-sim-2.png',
    images: [
      '/images/flow-sim-1.jpg',
      '/images/flow-sim-2.png',
      '/images/flow-sim-4.png',
      '/images/flow-sim-3.jpg',
    ],
    captions: [
      'Flow Simulator 1.0 Displayed at Museum of Goa',
      'Part of Homo Ludens Khel-Spel Exhibition',
      'Visitors enjoyed the simulated juggling experience',
      'Accompanied by a flow workshop',
    ],
    article: `The Flow Simulator 1.0 is an interactive installation commissioned for 'Khel-Spel HomoLudens: The Art of Play' at the [Museum of Goa](https://www.museumofgoa.com), Pilerne.

The Museum of Goa has built a reputation as a space where art feels alive and participatory. Inspired by [Johan Huizinga](https://en.wikipedia.org/wiki/Johan_Huizinga)'s idea that play is central to culture, the exhibition brings together artists from India and the Netherlands to explore how play shapes the way we think, create, and connect.

The piece draws from Craig Quat's juggling board and combines elements of juggling and functional movement. Built using PVC pipes, the work reflects ideas like Jugaad and Zuinig, where simple materials are used thoughtfully to create something meaningful.

The installation works as both an art piece and a hands-on experience. Participants use it to move multiple balls through the system, which naturally brings focus to their movement and timing. This experience connects to the idea of a flow state, where attention becomes steady and the body and mind feel in sync.

One of the most memorable parts was leading a juggling workshop for children. Seeing a group of 10-year-olds learn and successfully perform a three-ball cascade was incredibly rewarding.`,
  },
  {
    id: 4,
    slug: 'marol-art-village',
    cat: 'activism',
    tag: 'Marol Art Village · Art District · Street Art',
    title: 'Putting Marol on the Global Street Art Map',
    desc: 'How a dream to give Marol its own identity evolved into a full blown Street Art District.',
    stat: '500+ murals · Zero funding',
    glyph: '✊',
    gradient: 'radial-gradient(ellipse at 40% 50%, rgba(191,155,69,0.22), rgba(15,15,13,0.12) 65%, var(--bg-cream))',
    image: '/images/marol-art-cover-1.jpg',
    images: [
      '/images/marol-art-village-2.jpg',
      '/images/marol-art-village-3.jpg',
      '/images/marol-art-village-4.jpg',
      '/images/marol-art-village-5.jpg',
      '/images/marol-art-village-6.jpg',
      '/images/marol-art-village-7.jpg',
    ],
    captions: [
      'Piece by South African artist Jestr at Ecopark, 2017',
      'Spidey character by Mooz at the Wall of Fame, 2017',
      'Portrait by Brazilian artist Valdi Valdi at Ecopark, 2015',
      'Boston artist Lena McCarthy with MRRWA volunteers at Ladies First, 2019',
      'Graffiti tour of Ecopark, 2019',
      'Ganpati mural by Australian artist Phibs, 2018',
    ],
    article: `For years, whenever someone asked where I lived, I said 'near Powai' or 'close to the airport'. Saying 'Marol' meant a follow-up question I'd have to answer anyway. As someone who grew up here, that always sat uncomfortably with me.

Marol had character, history, people from every background imaginable. What it didn't have was a face. Around 2015, I started looking at walls. The first thing I noticed was that the painting was only part of what was happening. People who would normally never speak to each other were suddenly standing side by side, discussing colours, holding ladders, sharing chai.

Through Wicked Broz and later [Marol Art Village](/work/marol-art-village), I started building the infrastructure around those moments. There was no funding and no sponsor. Just the slow accumulation of trust, one wall at a time.

The clearest proof came when artists from Brazil's Keep It Real Crew painted the clubhouse at Eco Park. Families came downstairs. People called friends over. The clubhouse got repainted two months later and that never bothered me. The afternoon had already happened.

The Ladies First Festival in 2019 was a turning point. The [Military Road Residents Welfare Association](https://www.instagram.com/marolartvillage) helped secure permissions and organise at a scale we hadn't reached before. That was the moment it stopped feeling like something we were sneaking past the city and started feeling like something the city was joining.

Today I visit our hotspots and find murals I had nothing to do with. There are over 500 murals across Marol now, all without a single rupee of external funding. Covered by [National Geographic](/press/natgeo-marol), [Mid-Day](/press/mid-day-arts-adda), and the [World Atlas of Street Art](/press/world-atlas-wicked-broz).`,
  },
  {
    id: 5,
    slug: 'question-marks-potholes',
    cat: 'activism',
    tag: 'Art Activism · Social Change · 2016',
    title: 'The Night We Marked 500 Mumbai Potholes with Question Marks',
    desc: "A group of anonymous youngsters used graffiti, midnight planning, and a few cans of paint to turn Mumbai's potholes into a citywide public conversation.",
    stat: '500 potholes · 12 hours',
    glyph: '⚡',
    gradient: 'radial-gradient(ellipse at 55% 30%, rgba(200,90,42,0.28), rgba(15,15,13,0.12) 65%, var(--bg-cream))',
    image: '/images/Potholes-omkardhareshwar-cover.jpg',
    images: [
      '/images/potholes-omkardhareshwar-1.jpg',
      '/images/potholes-omkardhareshwar-2.jpg',
      '/images/potholes-omkardhareshwar-4.jpg',
      '/images/potholes-omkardhareshwar-3.jpg',
    ],
    captions: [
      'Our work from Virar featured in Mumbai Mirror, 2016',
      'Marked craters from Ashok Nagar, Marol, 2016',
      'Half page feature in Midday',
      'The worst pothole of the night',
    ],
    article: `On the 1st of November 2016, more than ten media houses across Mumbai received the same anonymous email. No names. No organisation. No logos. Just a message from a group of frustrated young citizens asking two simple questions: why were Mumbai's roads in such terrible condition, and why had people accepted it as normal?

That same night, over 40 youngsters from different parts of the city stepped out carrying paint cans and brushes, moving across the Western Line marking potholes with giant white question marks. By sunrise, more than 500 potholes had been marked.

Every year, the same cycle repeated itself. Rains arrived, roads collapsed, accidents increased, outrage lasted for a few days, and then everything faded until the next monsoon. I kept wondering how people had become so used to inconvenience and danger that even giant craters on the roads barely shocked anyone anymore.

What made that night special was the sheer scale of collective effort. People from completely different backgrounds came together for something that had no commercial gain, no political backing, and honestly, no guarantee of impact. Everyone understood the risks involved, which is why anonymity became an important part of the campaign.

Over the next two weeks, the campaign unexpectedly snowballed. It was covered in multiple newspaper articles, discussed on radio shows, and widely shared online. Some roads were repaired soon after. But the bigger takeaway was seeing how strongly people connected with the act itself. Sometimes all it takes is one simple visual idea to make an entire city stop and pay attention.`,
  },
  {
    id: 6,
    slug: 'flying-machine-denims',
    cat: 'production',
    tag: 'Ad Shoot · Flying Machine Denims · 2019',
    title: 'Underground Street Culture Ended Up Selling Denim for Flying Machine',
    desc: 'A story about timing, youth culture, and how a Bboy named Flying Machine became the perfect face for a brand called Flying Machine.',
    stat: '3 shoots · 7 athletes',
    glyph: '👖',
    gradient: 'radial-gradient(ellipse at 60% 40%, rgba(46,107,79,0.22), rgba(15,15,13,0.12) 65%, var(--bg-cream))',
    article: `Story coming soon.`,
  },

  // ── Documentary ──────────────────────────────────────────
  {
    id: 18,
    slug: 'this-is-my-hood',
    cat: 'production',
    tag: 'Documentary · Red Bull · Marol',
    title: 'This Is My Hood — S1 E1: Marol',
    desc: 'Curated and featured in this Red Bull documentary on the hip-hop scene in Marol, Mumbai — winner of Best Series (Unscripted) at the Critics Choice Series and Shorts Awards.',
    stat: 'Best Series Award',
    glyph: '🎬',
    gradient: 'radial-gradient(ellipse at 50% 40%, rgba(200,20,20,0.22), rgba(15,15,13,0.12) 65%, var(--bg-cream))',
    url: 'https://redbull.tv/en_IN/page/page:rrn:content:episode-videos:a67100ad-399c-4546-a386-454b1d4b7a5b/this-is-my-hood-s1-e1',
  },

  // ── New projects ─────────────────────────────────────────
  {
    id: 7,
    slug: 'bmw-joytown',
    cat: 'performance',
    tag: 'Performance · Brand · BMW',
    title: 'BMW Joytown',
    desc: 'A live performance experience across Mumbai and Bengaluru for BMW — blending flow arts and movement to bring the brand to life on stage.',
    stat: '2 cities',
    glyph: '🚗',
    gradient: 'radial-gradient(ellipse at 50% 40%, rgba(0,100,200,0.22), rgba(15,15,13,0.12) 65%, var(--bg-cream))',
    article: `Details and images coming soon.`,
  },
  {
    id: 8,
    slug: 'phantom-films-art-direction',
    cat: 'production',
    tag: 'Art Direction · Production · Phantom Films',
    title: 'Phantom Films — Art Direction',
    desc: 'Art directed and hand-built 17 DIY prop devices for a Phantom Films production — every device designed and fabricated from scratch.',
    stat: '17 DIY devices',
    glyph: '🎬',
    gradient: 'radial-gradient(ellipse at 45% 55%, rgba(150,50,200,0.2), rgba(15,15,13,0.12) 65%, var(--bg-cream))',
    article: `Details and images coming soon.`,
  },
  {
    id: 9,
    slug: 'under-neon-sky',
    cat: 'installation',
    tag: 'Installation · Light Art',
    title: 'Under Neon Sky',
    desc: 'A neon-lit installation exploring the intersection of light, movement, and urban space. Images coming soon.',
    stat: 'Installation',
    glyph: '💡',
    gradient: 'radial-gradient(ellipse at 50% 50%, rgba(255,50,150,0.2), rgba(15,15,13,0.12) 65%, var(--bg-cream))',
    yt: 'M8aD0NU1akw',
    article: `Details and images coming soon.`,
  },
  {
    id: 10,
    slug: 'indias-first-graffiti-hyperlapse',
    cat: 'production',
    tag: 'Production · Graffiti · Hyperlapse',
    title: "India's First Graffiti Hyperlapse",
    desc: "A pioneering hyperlapse capturing the making of a graffiti mural from blank wall to finished piece — a first for India.",
    stat: 'First in India',
    glyph: '🎥',
    gradient: 'radial-gradient(ellipse at 55% 45%, rgba(200,100,50,0.22), rgba(15,15,13,0.12) 65%, var(--bg-cream))',
    yt: 'fP4Xm5gmTGI',
    article: `Details and images coming soon.`,
  },
  {
    id: 11,
    slug: 'now-we-here-podcast',
    cat: 'production',
    tag: 'Production · Podcast',
    title: 'Now We Here Podcast',
    desc: '21 days, 21 interviews. A rapid-fire podcast series documenting creative voices and untold stories — filmed and released daily.',
    stat: '21 days · 21 interviews',
    glyph: '🎙️',
    gradient: 'radial-gradient(ellipse at 40% 60%, rgba(46,107,79,0.2), rgba(15,15,13,0.12) 65%, var(--bg-cream))',
    article: `Details and video links coming soon.`,
  },
  {
    id: 12,
    slug: 'stand-tall-lee-denims',
    cat: 'brand',
    tag: 'Brand · Campaign · Lee Denims',
    title: 'Stand Tall — Lee Denims',
    desc: 'Conceptualised and performed for the Stand Tall campaign by Lee Denims — a brand activation anchored in authentic movement and self-expression.',
    stat: 'Campaign',
    glyph: '👕',
    gradient: 'radial-gradient(ellipse at 50% 40%, rgba(191,155,69,0.2), rgba(15,15,13,0.12) 65%, var(--bg-cream))',
    article: `Details and images coming soon.`,
  },
  {
    id: 13,
    slug: 'hermes-window-displays',
    cat: 'installation',
    tag: 'Installation · Window Display · Design',
    title: 'Hermès-Styled Window Display Boxes',
    desc: 'Three display boxes, three distinct themes, 10+ materials. Designed and executed with artist Sajid Wajid Shaikh — meticulous craft in visual storytelling.',
    stat: '3 displays · 10+ materials',
    glyph: '🖼️',
    gradient: 'radial-gradient(ellipse at 60% 40%, rgba(180,140,70,0.22), rgba(15,15,13,0.12) 65%, var(--bg-cream))',
    article: `Details and images coming soon.`,
  },
  {
    id: 14,
    slug: 'hasanat-international-school',
    cat: 'education',
    tag: 'Education · Flow Arts · Teaching',
    title: 'Flow Arts at Hasanat International School',
    desc: 'Taught flow arts to students at Hasanat International School over six months — bringing movement, coordination, and creative play into the classroom.',
    stat: '6 months',
    glyph: '🎓',
    gradient: 'radial-gradient(ellipse at 45% 50%, rgba(46,107,79,0.22), rgba(15,15,13,0.12) 65%, var(--bg-cream))',
    article: `Details and images coming soon.`,
  },
  {
    id: 15,
    slug: 'flow-arts-workshops',
    cat: 'education',
    tag: 'Workshop · Flow Arts · Community',
    title: 'Flow Arts Workshops',
    desc: 'Workshops conducted for Shri Chitrapur Math, Agatsu Foundation, and others — using movement as a tool for focus, community, and creative play.',
    stat: 'Multiple orgs · Ongoing',
    glyph: '🌀',
    gradient: 'radial-gradient(ellipse at 50% 55%, rgba(100,150,200,0.2), rgba(15,15,13,0.12) 65%, var(--bg-cream))',
    yt: '7TiL9bafibs',
    article: `Details coming soon.`,
  },
  {
    id: 16,
    slug: 'wall-murals',
    cat: 'art',
    tag: 'Art · Street Art · Murals',
    title: 'Wall Murals',
    desc: 'A portfolio of wall murals painted across Mumbai and beyond — from street interventions to commissioned pieces in public and private spaces.',
    stat: 'Ongoing',
    glyph: '🎨',
    gradient: 'radial-gradient(ellipse at 40% 50%, rgba(191,155,69,0.22), rgba(15,15,13,0.12) 65%, var(--bg-cream))',
    article: `Images and details coming soon.`,
  },
  {
    id: 17,
    slug: 'illustrations',
    cat: 'art',
    tag: 'Art · Illustration',
    title: 'Illustrations',
    desc: 'A collection of illustrations spanning editorial work, personal projects, and collaborations — drawing as thinking made visible.',
    stat: 'Ongoing',
    glyph: '✏️',
    gradient: 'radial-gradient(ellipse at 55% 45%, rgba(200,100,80,0.18), rgba(15,15,13,0.12) 65%, var(--bg-cream))',
    article: `Images and details coming soon.`,
  },
];

export const getWorkBySlug = (slug: string) => WORK.find((w) => w.slug === slug);
