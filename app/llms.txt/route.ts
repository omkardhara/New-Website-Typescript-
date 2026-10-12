import { WORK } from '@/data/work';
import { NOTES, PRESS } from '@/data/site';

export const dynamic = 'force-static';

const BASE = 'https://www.omkardhareshwar.com';

export function GET() {
  const work = WORK.filter((w) => !w.url && !w.hidden);
  const adventures = WORK.filter((w) => !w.url && w.hidden);
  const essays = NOTES.filter((n) => !n.url && n.type !== 'poem');
  const poems = NOTES.filter((n) => !n.url && n.type === 'poem');

  const lines = [
    '# Omkar Dhareshwar',
    '',
    '> Omkar Dhareshwar is a flow artist, performer and street artist based in Mumbai, India. He runs flow arts and juggling workshops, brand activations and community art projects, and co-founded Wicked Broz and Marol Art Village. He has been featured in National Geographic Traveller India, the World Atlas of Street Art, Mid-Day, Times of India and Free Press Journal.',
    '',
    `Contact: omkar.dhara@gmail.com · WhatsApp +91 99204 99089 · ${BASE}/contact`,
    '',
    '## Main pages',
    `- [Home](${BASE}): work, media, press and writing at a glance`,
    `- [About](${BASE}/about): background and what he does`,
    `- [Story](${BASE}/story): timeline of his work and adventures`,
    `- [Press](${BASE}/press): media coverage`,
    `- [Media](${BASE}/media): videos`,
    `- [Contact](${BASE}/contact): book a workshop, performance or collaboration`,
    '',
    '## Work',
    ...work.map((w) => `- [${w.title}](${BASE}/work/${w.slug}): ${w.desc}`),
    '',
    '## Adventures',
    ...adventures.map((w) => `- [${w.title}](${BASE}/work/${w.slug}): ${w.desc}`),
    '',
    '## Press',
    ...PRESS.map((p) => `- [${p.publication}: ${p.title}](${BASE}/press/${p.slug}) (${p.year})`),
    '',
    '## Writing',
    ...essays.map((n) => `- [${n.title}](${BASE}/writing/${n.slug}): ${n.excerpt}`),
    '',
    '## Poems',
    ...poems.map((n) => `- [${n.title}](${BASE}/writing/${n.slug})`),
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
