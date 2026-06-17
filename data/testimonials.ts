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
      "On Trapped, Omkar wasn't just building props — he was engineering solutions. Every device had to work on camera and make sense as something a person could actually build alone in the jungle. He'd disappear for an hour and come back with a functioning prototype. Art direction is half vision and half stubborn problem-solving. He had both.",
    name: 'Janhavi Mallapur',
    role: 'Art Director · Trapped, Phantom Films',
    context: 'Jr. Art Director on Trapped (2015) under Janhavi — fabricated 17 survival devices',
  },
  {
    id: 2,
    quote:
      "He managed me when I was still figuring out if b-boying could be a career in India. He didn't just book shows — he told the story. Because of that, the right people started paying attention. Five national championships later, I still credit that early belief.",
    name: 'Arif Chaudhary',
    role: 'B-Boy Flying Machine · 5× Red Bull BC One India Champion',
    context: "Omkar managed Arif's career in the early years",
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
    context: "India's First Graffiti Hyperlapse (2016) and multiple Ema Films collabs",
  },
  {
    id: 9,
    quote:
      "We wanted the Khel-Spel exhibition to do more than show objects — we wanted visitors to play. The Flow Simulator became the beating heart of that exhibition. People who had never juggled stood at it for thirty minutes, completely absorbed. That's the mark of an installation that genuinely understands its audience.",
    name: 'Sharada Kerkar',
    role: 'Museum of Goa',
    context: 'Flow Simulator installation — Khel-Spel HomoLudens: The Art of Play (2025)',
  },
  {
    id: 10,
    quote:
      "This Is My Hood was a story that could only be told from the inside. Omkar gave us access to a community he'd spent years building trust with. The documentary won Best Series because that trust comes through in every frame. You cannot manufacture that kind of access — you have to earn it over years.",
    name: 'Nisha Vasudevan',
    role: 'Supari Studios',
    context: 'This Is My Hood — Red Bull documentary, Best Series (Unscripted) Critics Choice (2018)',
  },
  {
    id: 11,
    quote:
      "Getting seven athletes to show up authentically on camera is harder than it sounds. Omkar made the shoot feel like a day in the neighbourhood rather than a campaign. The energy was real because he understood the people involved. It didn't look like advertising because it wasn't.",
    name: 'Dhwani Mankad',
    role: 'Flying Machine Denims',
    context: 'Flying Machine denim campaign (2019) — 3 shoots, 7 athletes',
  },
  {
    id: 12,
    quote:
      "We came to Marol for the Ladies First festival expecting an event. We found a movement. Omkar has built something in that neighbourhood that most cities would spend crores trying to recreate and still not get right. Our audience felt it too — it became one of our most responded-to pieces.",
    name: 'Abhi & Niyu',
    role: 'Content Creators · @abhiandniyu',
    context: 'Covered Ladies First Street Art Festival, Marol Art Village',
  },
  {
    id: 13,
    quote:
      "Working with someone who understands both the culture and the commercial side is rare. Omkar knows the music, the artists, and the scene — and he knows how to translate that into something that works for a label without hollowing out what made it interesting in the first place.",
    name: 'Tanay Pradhan',
    role: 'Universal Music India',
    context: 'Music industry collaboration',
  },
  {
    id: 14,
    quote:
      "What struck me about Omkar is that he has done the work across every layer — underground hip-hop, national campaigns, live performance, literary writing. He doesn't just bridge worlds; he genuinely belongs to several of them at once. That's someone you want when you're trying to reach an audience that doesn't want to be marketed to.",
    name: 'Ayonjeet Mukherjee',
    role: 'Saregama',
    context: 'Music industry collaboration',
  },
  {
    id: 15,
    quote:
      "Our students had never seen anything like flow arts. Omkar didn't teach it as a trick — he taught it as a practice. By the end of the six months, children were coming in before school just to practise. What he left behind was a habit of attention and focus. That's rare in any teacher, not just an artist.",
    name: 'Behlah Badri',
    role: 'Principal · Hasanat International School',
    context: 'Taught 6-month flow arts programme at the school',
  },
];
