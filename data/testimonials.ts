export type Testimonial = {
  id: number;
  quote: string;
  name: string;
  role: string;
  context: string; // project/collaboration context — for internal reference
};

// DRAFT TESTIMONIALS — not yet approved by collaborators.
// Do NOT render this component on the site until content is confirmed.
// See GitHub issue for approval tracking.
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote:
      "He built a functional battery from steel wool and a 9-volt connector for one of the survival scenes. I didn't know that was possible before he walked in with it. Most people designing for film stop at 'looks right on camera.' Omkar stopped at 'would actually work.' Every device he built for Trapped had that — the logic was there, not just the appearance of it.",
    name: 'Janhavi Mallapur',
    role: 'Art Director · Trapped, Phantom Films',
    context: 'Jr. Art Director on Trapped (2015) under Janhavi — fabricated 17 survival devices',
  },
  {
    id: 2,
    quote:
      "In the early years I was placing well in competitions but nobody outside the breaking community knew the name. Omkar was the one calling journalists, explaining what BC One was to editors who had never heard of it. We didn't have a formal arrangement for a long time — he just thought the story was worth telling. That kind of early push matters more than people realise.",
    name: 'Arif Chaudhary',
    role: 'B-Boy Flying Machine · 5× Red Bull BC One India Champion',
    context: "Omkar managed Arif's career in the early years",
  },
  {
    id: 3,
    quote:
      "We'd been making things in Marol for a while but nobody was paying attention outside our circle. The Wassup video changed that. Omkar pulled the whole thing together — Ranveer, Puma, the crew — and kept it from turning into something that felt like a brand exercise. That video did what it was supposed to. It opened a door.",
    name: 'MC Altaf',
    role: 'Rapper · Gully Gang',
    context: 'Wassup music video (2018) — Ranveer Singh cameo, Puma x HMGRWN',
  },
  {
    id: 4,
    quote:
      "There was a week midway through the Flow Simulator where we took the whole structure apart and built it again from scratch because the balance wasn't right. Nobody asked us to. We just knew it wasn't done. I've worked with a lot of people who hand you a brief and wait for results. Omkar is not that person.",
    name: 'Sajid Wajid Shaikh',
    role: 'Artist & Installation Fabricator',
    context: 'Hermès window displays (2024) and Museum of Goa Flow Simulator (2025)',
  },
  {
    id: 5,
    quote:
      "I gave him permission for one wall on Military Road in 2015. Within a year there were twelve. Within five years there was a festival, international press, and artists flying in from Brazil and South Africa. He didn't coordinate that from the top. He just made it easy for the next person to say yes. That's its own skill.",
    name: 'Suresh Nair',
    role: 'Chairman, Military Road RWA · Dream Marol',
    context: 'Marol Art Village — community partner since 2015',
  },
  {
    id: 6,
    quote:
      "We were figuring out how to get more walls to paint. What Omkar kept adding was the bigger question — who else could be part of this. Residents, local businesses, international artists, journalists. Every new person he brought in made the next one easier to convince. A lot of what Marol became grew out of that thinking.",
    name: 'Zain Siddiqui',
    role: 'Co-founder, Wicked Broz',
    context: 'Co-founded Wicked Broz and Marol Art Village together',
  },
  {
    id: 7,
    quote:
      "The Lee campaign brought together people from pretty different backgrounds. At the shoot, Omkar didn't perform being a street artist for the brand — he just showed up as one. The way he talked about Wicked Broz and the neighbourhood, you could tell this was years of actual work, not a profile.",
    name: 'Malhar Kalambe',
    role: 'Founder, Beach Please · Forbes India 30 Under 30',
    context: 'Stand Tall For All campaign, Lee Jeans (2019)',
  },
  {
    id: 8,
    quote:
      "We've shot in Marol at 3am, at IIT Techfest in front of thousands, and in rain that should have ended the day. Omkar doesn't reschedule — he adjusts. The graffiti hyperlapse was 130 feet of mural, two people, one camera, no second chance. We hadn't done anything quite like it before. Still one of my favourite pieces.",
    name: 'Bhumesh Das',
    role: 'Director & Cinematographer · Alphabooom',
    context: "India's First Graffiti Hyperlapse (2016) and multiple Ema Films collabs",
  },
  {
    id: 9,
    quote:
      "We had visitors staying at the Flow Simulator for forty minutes at a stretch — adults who had never juggled before. It ran for eight weeks and it was the piece I got asked about most, from other institutions, from press, from people long after the exhibition closed. Something about how it was built made people feel like they could actually do it.",
    name: 'Sharada Kerkar',
    role: 'Museum of Goa',
    context: 'Flow Simulator installation — Khel-Spel HomoLudens: The Art of Play (2025)',
  },
  {
    id: 10,
    quote:
      "This Is My Hood worked because Omkar had spent years in Marol before we ever brought cameras in. Residents, shop owners, artists — they talked to us because they already knew him. That's not something you arrange in a production timeline. The documentary won Best Series because that trust reads on screen.",
    name: 'Nisha Vasudevan',
    role: 'Supari Studios',
    context: 'This Is My Hood — Red Bull documentary, Best Series (Unscripted) Critics Choice (2018)',
  },
  {
    id: 11,
    quote:
      "Athletes can be stiff in front of a camera, especially with crew around. Omkar had most of them relaxed within the first hour on each of the three shoot days. I think it's because he's a performer himself — he knows what it feels like to be watched and asked to just be yourself. The final campaign felt like a day in the neighbourhood, not a shoot day.",
    name: 'Dhwani Mankad',
    role: 'Flying Machine Denims',
    context: 'Flying Machine denim campaign (2019) — 3 shoots, 7 athletes',
  },
  {
    id: 12,
    quote:
      "We were in Marol for the Ladies First festival. We expected street art — what we found was a whole neighbourhood that had organised itself around it. Every shopkeeper knew their wall, who painted it, what year. Omkar had been building that for a decade without institutional funding. Our audience responded the way they rarely do: not just views, actual conversations in the comments.",
    name: 'Abhi & Niyu',
    role: 'Content Creators · @abhiandniyu',
    context: 'Covered Ladies First Street Art Festival, Marol Art Village',
  },
  {
    id: 13,
    quote:
      "We needed the album to land on the street before it landed on streaming. Omkar handled the locations, the visual language, the sequencing. People were photographing the walls before we had announced the artist name. By the time the official launch went out there was already a conversation running. That kind of build is very hard to plan from a desk.",
    name: 'Tanay Pradhan',
    role: 'Universal Music India',
    context: 'Designed and executed guerilla street art campaign for a music launch',
  },
  {
    id: 14,
    quote:
      "Street activations for music launches can look try-hard very fast. Omkar understood what the work needed to feel like — part of the neighbourhood, not pasted on it. People were stopping to photograph it without knowing it was a campaign. Most agencies give you a vinyl banner. This was something else.",
    name: 'Ayonjeet Mukherjee',
    role: 'Saregama',
    context: 'Designed and executed guerilla street art campaign for a music launch',
  },
  {
    id: 15,
    quote:
      "By month three, students were teaching each other at recess. He never made it feel like a lesson — more like something they were discovering for themselves. When the programme ended, a group of them asked if he was coming back. That question is usually the real measure.",
    name: 'Behlah Badri',
    role: 'Principal · Hasanat International School',
    context: 'Taught 6-month flow arts programme at the school',
  },
];
