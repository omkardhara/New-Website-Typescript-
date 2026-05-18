import type { MetadataRoute } from 'next';
import { WORK } from '@/data/work';
import { NOTES, PRESS } from '@/data/site';

const BASE = 'https://www.omkardhareshwar.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                       lastModified: new Date(), changeFrequency: 'weekly',  priority: 1   },
    { url: `${BASE}/about`,            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/story`,            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/press`,            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/contact`,          lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.5 },
    { url: `${BASE}/writing/essays`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/writing/redbull`,  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/writing/poems`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    ...WORK.map((w) => ({
      url: `${BASE}/work/${w.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    // Internal writing pages only (skip external-URL notes)
    ...NOTES.filter((n) => !n.url).map((n) => ({
      url: `${BASE}/writing/${n.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...PRESS.map((p) => ({
      url: `${BASE}/press/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
