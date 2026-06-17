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
      "Omkar built things that looked wrong on paper but perfect on screen. He had this rare instinct — make it real, not realistic. The survival devices he fabricated for Trapped had genuine logic behind them; you could feel it. That's the difference between a craftsman and a prop department.",
    name: 'Vikramaditya Motwane',
    role: 'Director, Phantom Films',
    context: 'Jr. Art Director on Trapped (2015) — fabricated 17 survival devices',
  },
  {
    id: 2,
    quote:
      "He managed me when I was still figuring out if b-boying could be a career in India. He didn't just book shows — he told the story. Because of that, the right people started paying attention. Five national championships later, I still credit that early belief.",
    name: 'Arif Chaudhary',
    role: 'B-Boy Flying Machine · 5× Red Bull BC One India Champion',
    context: 'Omkar managed Arif\'s career in the early years',
  },
  {
    id: 3,
    quote:
      "When we made Wassup, Omkar was the one who made it feel real — not like a music video, like a moment. He pulled in Ranveer, got Puma to back it, and somehow kept the whole thing from feeling commercial. That video is what opened the first real doors for me.",
    name: 'MC Altaf',
    role: 'Rapper · Gully Gang',
    context: 'Wassup music video (2018) — Ranveer Singh cameo, Puma x HMGRWN',
  },
  {
    id: 4,
    quote:
      "I've worked with designers who hand you a mood board and disappear. Omkar is on the floor with you — cutting, measuring, figuring out why the resin won't set. The Flow Simulator at Museum of Goa was two people stubborn about getting it right. That stubbornness is what made it worth seeing.",
    name: 'Sajid Wajid Shaikh',
    role: 'Artist & Installation Fabricator',
    context: 'Hermès window displays (2024) and Museum of Goa Flow Simulator (2025)',
  },
  {
    id: 5,
    quote:
      "I gave him one wall because I wanted to see what would happen. That was 2015. Now Marol has over five hundred murals, artists from five continents have worked here, and we've made it into National Geographic. He didn't ask for permission — he showed us what was possible and let the neighbourhood decide.",
    name: 'Suresh Nair',
    role: 'Chairman, Military Road RWA · Dream Marol',
    context: 'Marol Art Village — community partner since 2015',
  },
  {
    id: 6,
    quote:
      "We started Wicked Broz with spray cans and borrowed time. What Omkar brought was the bigger picture — he was always thinking about what a neighbourhood could become, not just what a wall could look like. Eleven years later, the work speaks.",
    name: 'Zain Siddiqui',
    role: 'Co-founder, Wicked Broz',
    context: 'Co-founded Wicked Broz and Marol Art Village together',
  },
  {
    id: 7,
    quote:
      "What I noticed about Omkar at the Lee campaign is that he's exactly the same off-camera. The values aren't a pitch — they're just how he operates. That's rare in a space where everyone is selling something.",
    name: 'Malhar Kalambe',
    role: 'Founder, Beach Please · Forbes India 30 Under 30',
    context: 'Stand Tall For All campaign, Lee Jeans (2019)',
  },
  {
    id: 8,
    quote:
      "We've shot in Marol at 3am, at IIT in a crowd of thousands, and in rain that had no business stopping us. Omkar doesn't wait for perfect conditions — he works in whatever conditions show up. The hyperlapse we made together was 130 feet of mural and two people with one camera. Still one of my proudest shoots.",
    name: 'Bhumesh Das',
    role: 'Director & Cinematographer · Alphabooom',
    context: 'India\'s First Graffiti Hyperlapse (2016) and multiple Ema Films collabs',
  },
  {
    id: 9,
    quote:
      "Standing tall means something different to everyone on that campaign. For Omkar it meant showing up as a street artist in a national brand moment and not losing an inch of who he is. That's harder than it looks.",
    name: 'Taba Chake',
    role: 'Singer & North-East Brand Ambassador',
    context: 'Stand Tall For All campaign, Lee Jeans (2019)',
  },
  {
    id: 10,
    quote:
      "The Neon Sky installation was forty by forty metres of neon canopy built in twelve days. There was no budget for failure. Omkar ran that site like someone who had done it a hundred times, even though none of us had done it once. The result was a centrepiece of Asia's largest college festival.",
    name: 'Henry Tham',
    role: 'Co-founder, Art Can Feed',
    context: 'Under a Neon Sky installation, Mood Indigo IIT Powai (2015)',
  },
];
