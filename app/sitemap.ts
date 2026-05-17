import type { MetadataRoute } from 'next';
import { WORK } from '@/data/work';
import { NOTES } from '@/data/site';

const BASE = 'https://www.omkardhareshwar.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/story`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    ...WORK.map((w) => ({
      url: `${BASE}/work/${w.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...NOTES.map((n) => ({
      url: `${BASE}/writing/${n.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
