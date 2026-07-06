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
    article: `The Flow Simulator 1.0 is an interactive installation commissioned for 'Khel-Spel HomoLudens: The Art of Play' at the [Museum of Goa](https://museumofgoa.com/program/homo-ludens-the-art-of-play/), Pilerne.

The Museum of Goa has built a reputation as a space where art feels alive and participatory. Inspired by [Johan Huizinga](https://en.wikipedia.org/wiki/Johan_Huizinga)'s idea that play is central to culture, the exhibition brings together artists from India and the Netherlands to explore how play shapes the way we think, create, and connect.

The piece draws from Craig Quat's juggling board and combines elements of juggling and functional movement. Built using PVC pipes, the work reflects ideas like Jugaad and Zuinig, where simple materials are used thoughtfully to create something meaningful.

The installation works as both an art piece and a hands-on experience. Participants use it to move multiple balls through the system, which naturally brings focus to their movement and timing. This experience connects to the idea of a flow state, where attention becomes steady and the body and mind feel in sync.

One of the most memorable parts was leading a juggling workshop for children. Seeing a group of 10-year-olds learn and successfully perform a three-ball cascade was incredibly rewarding.`,
  },
  {
    id: 6,
    slug: 'flying-machine-denims',
    cat: ['brand', 'production'],
    tag: 'Ad Shoot · Flying Machine Denims · 2021',
    title: 'Underground Street Culture Ended Up Selling Denim for Flying Machine',
    desc: 'A story about timing, youth culture, and how a Bboy named Flying Machine became the perfect face for a brand called Flying Machine.',
    stat: '3 shoots · 7 athletes',
    glyph: '👖',
    gradient: 'radial-gradient(ellipse at 60% 40%, rgba(46,107,79,0.22), rgba(15,15,13,0.12) 65%, var(--bg-cream))',
    image: '/images/flying-machine-denims/flying-machine-tshirt-reveal.jpg',
    images: [
      '/images/flying-machine-denims/arif-green-beanie-portrait.jpg',
      '/images/flying-machine-denims/skateboard-flying-machine-hoodie.jpg',
      '/images/flying-machine-denims/graffiti-artist-spraying.jpg',
      '/images/flying-machine-denims/krypt-one-portrait.jpg',
      '/images/flying-machine-denims/arif-low-angle-kick.jpg',
      '/images/flying-machine-denims/side-kick-reflection.jpg',
      '/images/flying-machine-denims/handstand-bowl-edge.jpg',
      '/images/flying-machine-denims/kick-pose-bowl-edge.jpg',
      '/images/flying-machine-denims/arif-red-hoodie-mask-kick.jpg',
      '/images/flying-machine-denims/retro-nostalgia-hoodie.jpg',
      '/images/flying-machine-denims/human-flag-fm180-tag.jpg',
    ],
    captions: [
      'Arif Chaudhary between takes',
      'Rolling down the promenade in the Flying Machine hoodie, between takes',
      'Dheeraj Singh, aka Krypt One, adding a graffiti piece that was never part of the original plan',
      'Krypt One between setups',
      'Arif mid-kick, shot low against the sky',
      'A kick caught in a rain puddle\'s reflection — the same rain that almost called off the shoot',
      'Rajesh mid-handstand on the skate bowl\'s edge',
      'Rajesh working the bowl\'s rim between setups',
      'Arif, hooded and masked, mid-kick',
      'No changing room on site — outfit changes happened wherever there was space',
      'Rajesh holding a human flag off the platform edge — the FM180 bib tag reading Flying Machine',
    ],
    article: `In July 2021, Flying Machine Denims came knocking through a connection I already had. I'd spent years around Arif Chaudhary — the Bboy known as Flying Machine — going back to when I managed his early career. A brand called Flying Machine wanting a bboy nicknamed Flying Machine as one of its faces wasn't a hard sell to anyone. I ended up curating and producing the campaign for Seesaw Productions, alongside Dhwani Mankad and Yash Gupta: three shoots, seven athletes, built around a simple idea — that street culture wasn't a marketing layer on top of the brand, it was the brand.

This particular shoot brought together Arif, parkour athlete [Rajesh, aka Monkkey](https://www.instagram.com/monkkey_00/), and graffiti artist [Dheeraj Singh, aka Krypt One](https://www.instagram.com/krypt.one/) at a skate park in Mumbai. [Rohit Khetle](https://www.instagram.com/fastshutterguy/) shot stills across the day.

Graffiti was never part of the original plan. It got added at the last minute once we saw the blank concrete at the park, and Krypt One's piece ended up becoming one of the strongest visuals of the day. Rain played spoilsport for most of the afternoon, and with no changing room on site, outfit changes happened wherever there was space, between ramps, behind a wall, wherever worked.

The campaign ran digitally and was displayed across Flying Machine's retail stores. No hard numbers to report, but the brief was met: a brand named Flying Machine, fronted by a bboy nicknamed Flying Machine, selling denim through the exact street culture it borrowed its energy from.

Video from this shoot, by [Kevin Joseph, aka Void](https://www.instagram.com/k.void/) and [Karan Shelar, aka Canfuse](https://www.instagram.com/canfuse/), is coming soon. Two more shoots from this campaign are yet to be added.`,
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
    image: '/images/this-is-my-hood-cover.jpg',
    url: 'https://redbull.tv/en_IN/page/page:rrn:content:episode-videos:a67100ad-399c-4546-a386-454b1d4b7a5b/this-is-my-hood-s1-e1',
    linkLabel: 'View on Red Bull',
  },
  {
    id: 8,
    slug: 'phantom-films-art-direction',
    cat: 'production',
    tag: 'Art Direction · Production · Phantom Films',
    title: 'Building Survival, One Broken Appliance at a Time — Trapped',
    desc: 'Jr. Art Director on Vikramaditya Motwane\'s Trapped — reverse-engineered and hand-built 17 DIY survival devices for Rajkumaar Rao\'s one-man performance.',
    stat: '17 DIY devices · 4 in final cut',
    glyph: '🎬',
    gradient: 'radial-gradient(ellipse at 45% 55%, rgba(150,50,200,0.2), rgba(15,15,13,0.12) 65%, var(--bg-cream))',
    imagePosition: 'top',
    image: '/images/trapped/omkar-with-rajkumaar-rao.jpg',
    images: [
      '/images/trapped/omkar-diy-guitar.jpg',
      '/images/trapped/rooftop-water-collector.jpg',
      '/images/trapped/rat-trap-prop.jpg',
      '/images/trapped/phrew-crew-badge.jpg',
      '/images/trapped/ice-cube-battery.jpg',
      '/images/trapped/fan-generator.jpg',
      '/images/trapped/wire-cage-trap.jpg',
    ],
    article: `In 2015, I was supposed to be in Germany on an exchange programme, studying automobile engineering. Instead, I was on the 30th floor of a vacant Mumbai high-rise, taking apart a television with my bare hands.

The film was **Trapped** — [Vikramaditya Motwane](https://en.wikipedia.org/wiki/Vikramaditya_Motwane)'s survival thriller about a man sealed inside a locked apartment with no food, no water, and no way out. Rajkumaar Rao played the lead entirely alone for most of the film's runtime, and every object he improvised to stay alive had to exist as a real, working prop. My job was to make his survival believable, one reverse-engineered device at a time.

I was 22, freshly graduated as a Mechanical Engineer. My job title was Jr. Associate Art Director. I barely understood what that meant at the time — but I understood machines, materials, and how things come apart.

Over the course of a month, I designed and fabricated 17 DIY survival devices: a rainwater collector rigged on a high-rise balcony, a catapult, a firestarter fashioned from steel wool and a dead battery, a rat trap, a urine-powered battery, and a guitar made from wooden sticks and a paint can with rope for strings. Four of the seventeen made the final cut of the film.

## The Film and the People Behind It

[Vikramaditya Motwane](https://en.wikipedia.org/wiki/Vikramaditya_Motwane) is one of Hindi cinema's most precise directors — the mind behind **Udaan**, **Lootera**, and **AK vs AK**. Trapped was his most stripped-down work: a near-dialogue-free survival film set almost entirely in one locked apartment.

[Rajkumaar Rao](https://en.wikipedia.org/wiki/Rajkummar_Rao) had already won a National Award for **Shahid** before Trapped. Here he lost significant weight for the role and carried almost every frame alone — his performance and the props around him were the entire movie.

## How the Film Was Received

Trapped released in 2017 to widespread critical acclaim. Critics called it a masterclass in minimalist filmmaking — a survival thriller that worked not through spectacle but through the slow, grinding logic of a man forced to improvise his way back to life. Rao's performance was recognised at multiple award ceremonies, and the film has since been cited as one of the more formally ambitious Indian films of that decade.

None of it worked without the props being real. You cannot fake a firestarter in close-up. The rainwater collector had to actually collect water. The guitar had to have strings that vibrated. That is what the month on the 30th floor was for.`,
  },
  {
    id: 12,
    slug: 'stand-tall-lee-denims',
    cat: 'brand',
    tag: 'Brand · Influencer Campaign · Lee Jeans',
    title: 'Stand Tall For All — Lee Jeans',
    desc: 'Featured as an opinion leader in Lee Jeans\' Stand Tall For All campaign — spotlighting changemakers, artists, and community builders across India.',
    stat: 'National Campaign',
    glyph: '👕',
    gradient: 'radial-gradient(ellipse at 50% 40%, rgba(191,155,69,0.2), rgba(15,15,13,0.12) 65%, var(--bg-cream))',
    image: '/images/lee-denims/omkar-yellow-shirt.jpg',
    images: [
      '/images/lee-denims/omkar-blue-mural.jpg',
      '/images/lee-denims/omkar-spray-can.jpg',
      '/images/lee-denims/quote-street-art.jpg',
      '/images/lee-denims/quote-inclusive.jpg',
      '/images/lee-denims/omkar-nano.jpg',
      '/images/lee-denims/quote-one-wall.jpg',
    ],
    imagePositions: ['', '', '', '', 'top', ''],
    yt: 'RonBTMdFFq0',
    ytStart: 909,
    article: `Lee Jeans built **Stand Tall For All** on a simple premise: the most compelling brand stories don't come from celebrities — they come from people who are actually doing the work. The campaign sought out advocates, artists, and community builders whose impact was felt in neighbourhoods and lives, not just on screens.

Wicked Broz — the Marol-based street art collective co-founded by Omkar Dhareshwar and Zain Siddiqui — were chosen as one of the campaign's central voices. For years, the collective had been transforming blank walls across Mumbai into living, breathing conversation pieces: works that grew with the communities around them, absorbed their stories, and gave people something to recognise themselves in.

For Wicked Broz, street art was never decoration. It was dialogue. Every wall they touched became a shared space — something the neighbourhood could claim as its own. As Omkar put it: "Street art is like a living being. It never fades away. We grow alongside it. It becomes a part of the community. Within it, we find our space, our expression."

The driving idea behind their work was radical in its simplicity — make art available to everyone, not just those with access to galleries. By painting in public spaces, they turned the street itself into a democratic canvas. "In the beginning, we wanted to make art more inclusive. In our case, walls brought people together, rather than pulling them apart."

The campaign ran as an influencer series across Instagram under [#standtallforall](https://www.instagram.com/explore/tags/standtallforall/), with each changemaker sharing their story through portrait shoots, quote cards, and personal narratives. It was anchored by a podcast — embedded above — that gave these voices room to speak at length about what standing tall actually looks like from the inside.

What Lee Jeans captured in the campaign was something Wicked Broz had always understood: you don't need a stage, a grant, or a gallery to make something meaningful. A can of paint and the conviction that one wall can shift how a neighbourhood sees itself — that's enough to start. "All it takes for a street artist to stand tall — all you really need, is to believe in yourself. You can change the world, one wall at a time."

## The Other Changemakers

The campaign was a collective, not a solo feature. Wicked Broz shared the series with four others, each standing tall in a completely different arena.

[Malhar Kalambe](https://www.instagram.com/kalambemalhar/) is an environmentalist and the founder of **Beach Please** — a grassroots weekly clean-up movement that has removed over 8.5 million kilograms of waste from Mumbai's beaches and rivers since 2017. Recognised by Forbes India, awarded by the UN, and honoured with the National Creators Award 2024 by the Prime Minister of India.

[Taba Chake](https://www.instagram.com/taba.chake/) is a singer-songwriter from Arunachal Pradesh whose finger-style guitar and multilingual songwriting has carried the sounds of India's Northeast to a national audience. The first artist from his state to make his Bollywood playback debut, he now serves as the Government of Arunachal Pradesh's official Ambassador for Art and Culture.

[Arnab Biswas](https://www.instagram.com/urnavishwas/) is a finance professional and LGBTIQA+ inclusion evangelist whose candid, personal storytelling on social media gave visibility to a community rarely seen in mainstream brand campaigns.

[Amit Vaidya](http://www.live4todayamit.com/) is the author of **Holy Cancer: How A Cow Saved My Life** — a stage IV cancer survivor who turned remission into a life's purpose. Through the Healing Vaidya Foundation, he has supported over 35,000 patients across the globe as a wellness advocate, speaker, and motivator.`,
  },

  {
    id: 10,
    slug: 'indias-first-graffiti-hyperlapse',
    cat: 'production',
    tag: 'Production · Graffiti · Hyperlapse',
    title: "India's First Graffiti Hyperlapse",
    desc: "A pioneering hyperlapse capturing the making of a 130x25 ft graffiti mural at IIT Techfest 2016. A first for India.",
    stat: 'First in India',
    glyph: '🎥',
    gradient: 'radial-gradient(ellipse at 55% 45%, rgba(200,100,50,0.22), rgba(15,15,13,0.12) 65%, var(--bg-cream))',
    image: '/images/graffiti-hyperlapse/mural-in-progress.jpg',
    images: [
      '/images/graffiti-hyperlapse/space-expedition-panel.jpg',
      '/images/graffiti-hyperlapse/astronaut-detail.jpg',
      '/images/graffiti-hyperlapse/warrior-panel.jpg',
      '/images/graffiti-hyperlapse/artist-detailing.jpg',
      '/images/graffiti-hyperlapse/buyu-finishing-touches.jpg',
      '/images/graffiti-hyperlapse/full-wall-portrait.jpg',
      '/images/graffiti-hyperlapse/characters-panel.jpg',
    ],
    captions: [
      '',
      '',
      '',
      'Zake with his predator inspired character',
      'Buyu adding the finishing touches',
      'Lobster with his psychedelic character',
      '',
    ],
    yt: 'nJsgRSVcq5g',
    ytCaption: 'Watch the Video',
    article: `In 2016, six artists, a 130 by 25-foot wall, and seven days of spray cans came together at IIT Techfest in Powai, Mumbai. It was Asia's largest science and technology festival, and what came out of that week became India's first graffiti hyperlapse. The project was curated by [Wicked Broz](https://www.instagram.com/wickedbroz).

**The Wall**

Stretching 130 feet across and rising 25 feet high, the canvas was one of the largest walls ever handed to graffiti artists in India. The theme was space exploration and futurism, painted live across seven days as tens of thousands of Techfest attendees watched the mural grow in real time.

**The Artists**

Five artists built the wall: [NME](https://www.instagram.com/nmegraffiti), [Lobster](https://www.instagram.com/lobster__l), [Mooz](https://www.instagram.com/mooz.one), [Zake](https://www.instagram.com/zake_india), and Brazilian artist [Julio Torquetti](https://www.instagram.com/juliotorquetti) (known as Buyu). Indian street art talent alongside international energy. Each claimed a section of the narrative: robots, astronauts, cosmic warriors, and cartoon characters that turned a campus wall into an intergalactic world.

**The Grind**

Working at that scale came with its own set of problems. The heat was relentless. The wall was 130 feet wide and 25 feet tall, and we had only two scaffolding units to cover the entire stretch. Every few hours, we had to physically break down the platforms, shift them across, and reassemble. It sounds like a small thing until you have done it ten times in the afternoon sun. The artists absorbed it and kept painting.

**The Film**

Cinematographers [Bhumesh Das](https://www.instagram.com/bhumeshdas10) and [Jonnas Moirangthem](https://www.instagram.com/jonnasmoirangthem) of [EMA Films](https://youtube.com/@emafilmsofficial697) captured the entire seven-day process in a hyperlapse, compressing days of sketching, layering and colour-filling into a single fluid sequence. It was the first time something like this had been done for Indian street art. Seven days of work, collapsed into minutes.

Julio put the finishing touches on his section as the festival wound into its final days. IIT Techfest draws over 150,000 visitors each year and is one of Asia's biggest cultural events. Having a mural of this scale painted live in front of that crowd made the whole thing feel less like a commission and more like a shared moment. Something tens of thousands of people watched happen, start to finish.

That wall set the tone for what came next. Wicked Broz went on to curate the main wall at IIT Techfest every year after that, all the way until 2022. Each edition brought new artists, new themes, and a wall that kept getting bigger.`,
  },

  {
    id: 13,
    slug: 'hermes-window-displays',
    cat: 'installation',
    tag: 'Installation · Window Display · 2024',
    title: 'Hermès-Styled Window Display Boxes',
    desc: 'Five Hermès-style window displays designed using Midjourney on Discord, three built in physical form with artist Sajid Wajid Shaikh — fiberglass, 220kg of metal, laser-cut MDF, resin waterfalls. The client never paid.',
    stat: '3 displays · 10+ materials',
    glyph: '🖼️',
    gradient: 'radial-gradient(ellipse at 60% 40%, rgba(180,140,70,0.22), rgba(15,15,13,0.12) 65%, var(--bg-cream))',
    image: '/images/hermes-displays/final-air-balloon-box.jpg',
    images: [
      '/images/hermes-displays/hermes-air-balloon.jpg',
      '/images/hermes-displays/hermes-clock.jpg',
      '/images/hermes-displays/hermes-mountain.jpg',
      '/images/hermes-displays/hermes-moon.jpg',
      '/images/hermes-displays/hermes-underwater.jpg',
      '/images/hermes-displays/process-balloon-fiberglass-mold.jpg',
      '/images/hermes-displays/process-balloon-finished.jpg',
      '/images/hermes-displays/final-air-balloon-box.jpg',
      '/images/hermes-displays/process-clock-gears-cutout.jpg',
      '/images/hermes-displays/final-clock-box.jpg',
      '/images/hermes-displays/process-mountain-layers-green.jpg',
      '/images/hermes-displays/final-mountain-box.jpg',
      '/images/hermes-displays/team-sajid-khalil.jpg',
      '/images/hermes-displays/final-air-balloon-box.jpg',
      '/images/hermes-displays/final-clock-box.jpg',
      '/images/hermes-displays/final-mountain-box.jpg',
    ],
    captions: [
      'Midjourney design: air balloon theme',
      'Midjourney design: clock theme',
      'Midjourney design: mountain theme',
      'Midjourney design: moon theme',
      'Midjourney design: underwater theme',
      'Fiberglass mould for the balloons',
      'Finished balloon ready for assembly',
      'Completed air balloon display box',
      'Metal gears before assembly',
      'Completed clock box — 220kg of metal, lit from behind',
      'Laser-cut MDF mountain layers before painting',
      'Completed mountain and waterfall box',
      'With Sajid Wajid Shaikh and Khalil bhai',
      'The air balloon box',
      'The clock box',
      'The mountain and waterfall box',
    ],
    article: `In January 2024, an architect came to me with a brief: design five Hermès-style window display boxes across five themes — moon, underwater, clock, air balloon, mountain.

I had just taken my first Midjourney subscription on Discord. I had never used generative AI as a design tool, and I had never designed for installations. Both those firsts happened on this project.

Midjourney turned ideas into reference images fast. What would have taken days of sketching was now hours of prompting and refining. All five designs got approved by the client.

Then came the question of how to actually build them.

I reached out to [Sajid Wajid Shaikh](https://www.instagram.com/sajidwajidshaikh/), a long-time friend and one of the most skilled artists I know. He said we could do it. His team worked out of a small workshop in New Panvel, led by Sunny Sathe, with Khalil bhai handling the heavy fabrication work. This collaboration also later became the reason I got to take [Flow Simulator 1.0](/work/flow-simulator-museum-of-goa) to the Museum of Goa — Sajid was curating the exhibition there.

We started with the air balloon box.

## Air balloon box

The balloons were made in fiberglass — moulded, laminated, sanded smooth, then painted and striped by hand. The rain drops were carved from wood. The airplane and the houses were cut from sunboard and foam. The wave and mountain backdrop was MDF. It took a month. The finished box had seven balloons at different heights, fiberglass clouds cast from clay moulds, layered painted waves, small houses on the ground floor, and a vintage airplane cutting through the top.

[yt:K8bAoWlZqko]

The air balloon box took a month from start to finish. Then we moved to the clock.

## Clock box

We made the clock entirely from metal. Every piece — the outer rings, the clock face, the gears, the hands — was cut and assembled by hand in Khalil bhai's metalwork workshop. He worked with lathes and cutting equipment to get the tolerances the design needed.

[yt:XCtEqt2xAzo]

When finished, the clock weighed over 220 kilograms. The gears were layered and interlocking, lit from behind with blue light.

## Mountain and waterfall box

This had the most steps of the three. We started with CAD drawings for each individual mountain layer, with linking holes so the layers could align and stack correctly. The assembly was simulated before anything was cut. Then each layer was laser-cut from MDF, given a base coat, and painted with a gradient from deep teal at the base to near-white at the peaks. Artificial flowers went in around the edges after assembly.

The waterfall was made from transparent resin, poured in stages to get the look of water catching light.

[yt:UOpMdCnHpVQ]

## What happened after

The client took all three boxes for review. Then went quiet for almost a year.

When he finally came back, he said he would not pay. The reason given: no wow effect.

That was a loss of ₹14 lakhs — the largest I have taken on a single project. I don't have the boxes and I don't have the money. This was also the best work I had made till that point in terms of craft, materials, and the sheer scale of what we built. That combination is its own kind of heavy.

The one thing that came out of all of this was the relationship with Sajid. When he was later curating 'Khel-Spel HomoLudens: The Art of Play' at the [Museum of Goa](https://museumofgoa.com/program/homo-ludens-the-art-of-play/), he called me. That conversation led to [Flow Simulator 1.0](/work/flow-simulator-museum-of-goa) — an installation that ended up in an actual museum, on a pedestal, in front of thousands of visitors.

Some losses open doors you wouldn't have found any other way. The 14 lakhs are gone and I can't undo that. But when things get hard, put your head down, do the work, and keep believing in yourself.`,
  },

  // ── Placeholders ──────────────────────────────────────────
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
    id: 9,
    slug: 'under-neon-sky',
    cat: 'installation',
    tag: 'Installation · Mood Indigo 2015',
    title: 'Under a Neon Sky',
    desc: 'Psychedelic decor installation for Mood Indigo 2015 at IIT Powai. 40m × 40m neon canopy built in 12 days sleeping on site with Art Can Feed. The Radio Mirchi silent disco it covered drew crowds.',
    stat: '40m × 40m · 12 days on site',
    glyph: '💡',
    gradient: 'radial-gradient(ellipse at 50% 50%, rgba(255,50,150,0.2), rgba(15,15,13,0.12) 65%, var(--bg-cream))',
    image: '/images/neon-sky/neon-sky-crowd-wide.jpg',
    images: [
      '/images/neon-sky/neon-sky-setup-night.jpg',
      '/images/neon-sky/neon-sky-team.jpg',
      '/images/neon-sky/neon-sky-silhouettes.jpg',
      '/images/neon-sky/neon-sky-lasers.jpg',
      '/images/neon-sky/neon-sky-crowd-close.jpg',
      '/images/neon-sky/neon-sky-crowd-wide.jpg',
    ],
    captions: [
      'Setting up the canopy structure on site',
      'With the Art Can Feed team under the canopy',
      'Working through the night on site',
      'At the anchor point — those streaks are fishing lines, not lasers. We used them to hold the entire canopy in tension.',
      'Crowd under the neon canopy during Radio Mirchi silent disco',
      'Full installation at night — Mood Indigo 2015',
    ],
    yt: 'M8aD0NU1akw',
    article: `After engineering, I wasn't sure what came next. I was working at The Hive, a co-working space in Khar, doing a bit of everything — building furniture out of scrap material, running lights and sound for shows, helping artists set up exhibitions. That's where I met Henry and Pradnya, who were running Art Can Feed decor at the time.

When IIT Powai came to me about painting a wall for Mood Indigo 2015, I didn't just say yes to the wall. I saw an opening and added a second item to the proposal: a full psychedelic decor installation. Something I had never done before, at a scale I had never worked at.

The quote I sent was ₹75,000 for 40 metres by 40 metres of coverage. A job of that scale in 2015 should have run ₹3 to 4 lakhs at minimum. Of that ₹75,000, we never received the last installment of ₹25,000 — so the actual payment was fifty thousand rupees. The materials alone cost more. This is the part I always skip when telling this story casually, but it's the part that explains everything about how those twelve days went.

My college friend Anirudh Shinde came on to help. We slept on site for 12 days straight, in sleeping bags, working nights into mornings. The Art Can Feed team — Henry, Pradnya and their crew — carried the bulk of the fabrication. Without them, it would not have gone up.

The installation was used for a Radio Mirchi silent disco during Mood Indigo. Crowds came in, put on headphones, and ended up standing under something we had built from scratch in under two weeks. Jonnas Moirangthem and Bhumesh Das from Ema Films shot the event — the video captures what no photo can.

I said yes to this before I knew how to do it. That's the only way I knew how to operate in 2015, and probably still is. The projects I've learnt the most from are always the ones where saying yes came before knowing the answer.`,
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
    desc: 'Using juggling, slacklining, and flow tools to help people find focus, breathe, and stay present — in classrooms, ashrams, and open fields.',
    stat: '60+ participants · Shri Chitrapur Math',
    glyph: '🌀',
    gradient: 'radial-gradient(ellipse at 50% 55%, rgba(100,150,200,0.2), rgba(15,15,13,0.12) 65%, var(--bg-cream))',
    image: '/images/chitrapur-workshop/intro.jpg',
    images: [
      '/images/chitrapur-workshop/group.jpg',
      '/images/chitrapur-workshop/activity.jpg',
      '/images/chitrapur-workshop/wide.jpg',
      '/images/chitrapur-workshop/procession.jpg',
    ],
    captions: [
      'Panchavati, Shirali',
      'Dapo star passing drill',
      'Workshop in progress under the trees',
      'Yuvadhara Sammelan proceedings',
    ],
    yt: '7TiL9bafibs',
    ytCaption: 'Full workshop session',
    article: `Panchavati, Shirali. Two days, sixty people on dhurries under open sky. Most were under thirty. The supervisors and volunteers who came with them ranged from forty-five to sixty. None of them had juggled before.

The workshop ran as part of Yuvadhara Sammelan, Shri Chitrapur Math's annual youth gathering, held under the guidance of His Holiness Shri Sadyojat Shankarashrama Swamiji. The brief was specific: use movement as a tool to deepen japa practice. Help participants find focus, learn to breathe, stay present.

The tools were slacklining, juggling balls, poi, the dapo star, and kendama. Slacklining keeps you focused on the present moment. On your breath, your core, your eyes on the anchor point. The moment you start thinking about falling, you fall. Juggling changes your relationship with failure and opens up peripheral vision. Poi is closer to dance than juggling: the whole body moves with the object, not just the hands. The dapo star asks you to stay locked on one point while staying alert enough to toss it the instant it lands on your fingers.

By day two, seven participants were juggling three balls. Fifteen were playing passing patterns with the dapo star.

I ran a separate session for the vaidiks — six students aged seven to fifteen, training to become priests. Same tools, scaled down. Same idea: that the state you reach mid-juggling and the state you reach mid-japa are closer than they look.

The video above is the full session.`,
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
  {
    id: 19,
    slug: 'adventures',
    cat: 'performance',
    tag: 'Adventures · Travel · Flow',
    title: 'Pindari to Panchachuli',
    desc: 'Train to Kathgodam. Car to Khati. Trek to Pindari. Jeep roof to Dugtu. Trek to Panchachuli. Juggled everything I could find — balls, rocks, snowballs, acorns.',
    stat: 'Uttarakhand · March 2023',
    glyph: '🏔️',
    hidden: true,
    gradient: 'radial-gradient(ellipse at 50% 40%, rgba(100,160,220,0.22), rgba(15,15,13,0.12) 65%, var(--bg-cream))',
    image: '/images/adventures/panchachuli-peaks.jpg',
    images: [
      '/images/adventures/departure.jpg',
      '/images/adventures/khati-village.jpg',
      '/images/adventures/trail-flora.jpg',
      '/images/adventures/pindari-trail.jpg',
      '/images/adventures/rain-trek.jpg',
      '/images/adventures/pindari-glacier.jpg',
      '/images/adventures/jeep-road-1.jpg',
      '/images/adventures/jeep-roof.jpg',
      '/images/adventures/jeep-road-2.jpg',
      '/images/adventures/treeline.jpg',
      '/images/adventures/snow-trail.jpg',
      '/images/adventures/panchachuli-snow.jpg',
      '/images/adventures/high-camp.jpg',
      '/images/adventures/panchachuli-peaks.jpg',
    ],
    captions: [
      'Ready to leave. Mumbai to Kathgodam.',
      'Khati village, Bageshwar',
      'Wild bhang on the trail. Uttarakhand has no shortage of it.',
      'The trail to Pindari. Stone-paved and mostly quiet.',
      'Rain on the way up. This is normal.',
      'On top of the jeep, Dharchula to Dugtu',
      'The Dharchula-Dugtu road, seen from the roof of a jeep',
      'On the roof to Dugtu',
      'The road does not get wider',
      'Near treeline, approaching Panchachuli',
      'Snow starting on the trail up',
      'Morning near Panchachuli base',
      'Looking back toward the valley',
      'Panchachuli. We went up and came back down the same day.',
    ],
    imagePositions: ['top', '', '', '', '', '', '', '', '', '', '', 'bottom', '', ''],
    yt: 'jKgetBYGMbU',
    ytCaption: 'Uttarakhand — the full trip',
    article: `Train to Kathgodam, overnight. Then a car through winding roads into the Bageshwar district. The plan was Pindari Glacier first, then Dharchula, then as far north as we could get before the snow stopped us.

Khati is the last village before the glacier trail begins. It sits at around 2,200 metres, in a valley where the Pindar river runs loud and cold. Most people passing through are trekkers. We stayed a night.

**Pindari**

The trail from Khati to Pindari is roughly 25 kilometres one way. It goes through oak and rhododendron forest, past waterfalls and small settlements. Uttarakhand grows wild bhang everywhere at this elevation. You notice it after the first hour.

Rain hit on day two. The trail becomes mud. You put your head down and keep moving.

Pindari Glacier sits at around 3,660 metres, off the flanks of Nanda Kot. Quieter than you expect for something that size. Rock, ice, and the sound of meltwater running underneath.

I juggled at the base. Altitude makes everything harder. Lungs work at about 70 percent. The balls go up the same as always but the arms feel heavier than they should.

**Dharchula and Dugtu**

From Pindari we came back down and drove west to Dharchula, a border town on the Kali river. India on one bank, Nepal on the other. From Dharchula, the road north to Dugtu is not a road in any conventional sense.

We rode on the roof of a jeep. The driver did not slow down for the places where it had partially fallen away. You hold on to whatever is strapped above the wheel arch.

Two hours of that. The valley opens up as you gain elevation. The peaks start to show.

**Panchachuli**

The trek from Dugtu climbs through forest before breaking into high alpine meadow. Tree cover thins and then stops. Above treeline it is rock, scrub, and snow.

Snow comes in patches first, then covers everything. The trail markers get harder to follow.

I juggled with snowballs near the base camp. They compact enough for two throws, maybe three. After that they fall apart.

The Panchachuli peaks, five of them, sit in a row above. At that hour, with the light low, they look like something from another country. We went up and came back down the same day. I stayed until it got too cold to stand still.

**The kids**

At every stop along the way, Khati, Dharchula, the villages between, there were kids. Juggling travels well. You do not need a common language. You hand someone a ball and they either want to try or they do not. Most of them did.`,
  },
  {
    id: 20,
    slug: 'bhagsunag',
    cat: 'performance',
    tag: 'Adventures · Travel · Flow',
    title: 'Bhagsunag, Dharamshala',
    desc: '1 month with the Wicked Broz crew near Dharamshala. Slacklining on mountain meadows, prayer flags, cooking in nature, rhododendron forests, and long days at altitude.',
    stat: 'Bhagsunag · Dharamshala',
    glyph: '🏔️',
    hidden: true,
    gradient: 'radial-gradient(ellipse at 50% 40%, rgba(80,160,120,0.22), rgba(15,15,13,0.12) 65%, var(--bg-cream))',
    image: '/images/bhagsunag/slackline-sunset.jpg',
    images: [
      '/images/bhagsunag/slackline-meadow.jpg',
      '/images/bhagsunag/slackline-forest.jpg',
      '/images/bhagsunag/slackline-sunset.jpg',
      '/images/bhagsunag/slackline-lotus.jpg',
      '/images/bhagsunag/slackline-teaching.jpg',
      '/images/bhagsunag/prayer-flags.jpg',
      '/images/bhagsunag/rhododendron-tree.jpg',
      '/images/bhagsunag/snow-peaks.jpg',
    ],
    captions: [
      'Walking the line. Bhagsunag meadows.',
      'Forest slacklining near the temple trail.',
      'Golden hour above Dharamshala valley.',
      'Lotus on a slackline. Mountains behind.',
      'Teaching Wicked Broz co-founder Zain Siddiqui to find the line.',
      'Prayer flags, pine forest, hammock. No agenda.',
      'Up a rhododendron tree above Dharamshala.',
      'Above the snowline. Somewhere above Triund.',
    ],
    yt: '4mzfupkdmBc',
    ytCaption: 'Bhagsunag — a month with Wicked Broz',
    article: `A month in Bhagsunag. That was the plan — or more precisely, that was what happened when there was no plan.

Bhagsunag sits above McLeod Ganj, above Dharamshala, in the Dhauladhar range. Most people pass through on the way to Triund. We stayed.

The Wicked Broz crew had a spot up there. Enough space for hammocks, a kitchen setup, a slackline between two solid trees. We cooked outside most nights. The altitude keeps the evenings cold even when the days are warm.

**The slackline**

Bhagsunag has good anchors. Old deodars and rhododendrons, wide enough and rooted deep. We rigged lines in the meadow, in the forest, anywhere the trees cooperated.

At that elevation the light does something specific in the late afternoon. It comes sideways across the valley. If you are on a slackline at that hour, with the Dharamshala valley dropping away below you and the Dhauladhar range behind, the whole thing feels slightly improbable.

Sitting in lotus on a slackline is a patience exercise. The line moves. You breathe. You either find the stillness inside the movement or you fall off. Most sessions ended in falling off.

We taught slacklining to whoever showed up and wanted to try. The first step is always the same: one foot, find the wobble, decide whether to fight it or follow it. Most people fight it first.

**The forest**

Above the meadows is rhododendron forest. The trees flower red in season. They are old and wide and good for climbing. You can get high enough to see across the valley.

Lower down, near the Bhagsunag temple, the trail is shaded and quiet. Prayer flags strung between the pines. On a slow afternoon with the hammock up and nowhere to be, there are worse places to be alive.

**Triund and above**

We trekked to Triund on a clear day. Above treeline it opens up into high alpine meadow. Past Triund the snow starts. The Dhauladhar peaks sit close enough to feel like walls.

**The month**

A month is long enough to stop being a visitor. You learn the chai shops, which trails go where, when the mist rolls in and when it clears. You stop thinking about what you should be doing and start noticing what is actually there.

The Wicked Broz know how to be somewhere. No agenda beyond the next meal, the next line, the next fire. That is a skill worth learning.`,
  },
  {
    id: 21,
    slug: 'jbcn-school-talk-and-performance',
    cat: ['education', 'performance'],
    tag: 'Talk · Performance · JBCN Oshiwara',
    title: 'A Flow Talk and a Juggling Royal Rumble for 2,000 Students at JBCN',
    desc: 'A talk on peripheral vision, hand-eye coordination, and flow state for JBCN Oshiwara\'s annual event, followed by a live juggling demo with student volunteers on stage.',
    stat: '2,000+ students · 1 talk',
    glyph: '🎤',
    gradient: 'radial-gradient(ellipse at 50% 45%, rgba(80,160,120,0.2), rgba(15,15,13,0.12) 65%, var(--bg-cream))',
    image: '/images/jbcn-oshiwara/stage-wide-crowd.jpg',
    images: [
      '/images/jbcn-oshiwara/volunteers-royal-rumble.jpg',
      '/images/jbcn-oshiwara/dapo-star-demo.jpg',
      '/images/jbcn-oshiwara/juggling-balls-demo.jpg',
      '/images/jbcn-oshiwara/paper-airplane-portrait.jpg',
    ],
    captions: [
      'Student volunteers on stage for the juggling royal rumble',
      'Demonstrating with the dapo star',
      'Juggling balls — the hand-eye coordination demo',
      'Between demos, keeping it light for a young crowd',
    ],
    article: `JBCN Oshiwara brought me in to speak at their annual event — a talk to a crowd of over 2,000 students on peripheral vision, hand-eye coordination, flow state, and spatial awareness, and why those things matter far beyond a stage: in a classroom, on a sports field, in everyday movement.

None of this stays on the stage. Peripheral vision is what lets you read a chessboard past the piece in front of you, or clock traffic while crossing the road without swinging your whole head around. The same hand-eye coordination and reaction time that catches a dropped ball show up on a football field, or anywhere something moves faster than you'd like. Flow state is the mental gear behind sustained focus of any kind: managing a dozen priorities at once, holding numbers in your head for mental maths, remembering a longer sequence than usual. And juggling rewires something subtler — how you relate to dropping the ball. A drop isn't the end of the round, it's information: pick it up, adjust, go again. That shift in how you treat failure is the one that travels furthest, well past the stage.

The talk wasn't just theory. Partway through, I called a few student volunteers up to join what I call the juggling royal rumble — a live, informal demo where the crowd on stage grows one dropped ball at a time. I ran through the tools that make the ideas tangible: the dapo star for reflex and reaction, juggling balls for hand-eye coordination, a balance board for core and spatial awareness, and poi for full-body flow.

Talking about flow state to a room of 2,000 kids only works if you can make them feel it, not just hear about it. Watching a volunteer land their first catch on stage, in front of the whole school, tends to do that better than any slide.`,
  },
];

export const getWorkBySlug = (slug: string) => WORK.find((w) => w.slug === slug);
