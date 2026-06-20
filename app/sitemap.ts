import type { MetadataRoute } from 'next';
import { WORK } from '@/data/work';
import { NOTES, PRESS } from '@/data/site';

const BASE = 'https://www.omkardhareshwar.com';

// Parse loose date strings from content data ("2024", "Oct 2024", "Jun 2023")
function parseDate(dateStr: string): Date {
  if (/^\d{4}$/.test(dateStr)) return new Date(`${dateStr}-06-01`);
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? new Date('2024-01-01') : d;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                       lastModified: new Date('2025-06-01'), changeFrequency: 'weekly',  priority: 1   },
    { url: `${BASE}/about`,            lastModified: new Date('2025-06-01'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/story`,            lastModified: new Date('2025-06-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/press`,            lastModified: new Date('2025-06-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/media`,            lastModified: new Date('2025-06-01'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/contact`,          lastModified: new Date('2025-01-01'), changeFrequency: 'yearly',  priority: 0.5 },
    { url: `${BASE}/writing/essays`,   lastModified: new Date('2025-06-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/writing/redbull`,  lastModified: new Date('2025-06-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/writing/poems`,    lastModified: new Date('2025-06-01'), changeFrequency: 'monthly', priority: 0.7 },
    ...WORK.filter((w) => !w.url).map((w) => ({
      url: `${BASE}/work/${w.slug}`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...NOTES.filter((n) => !n.url).map((n) => ({
      url: `${BASE}/writing/${n.slug}`,
      lastModified: parseDate(n.date),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    })),
    ...PRESS.map((p) => ({
      url: `${BASE}/press/${p.slug}`,
      lastModified: new Date(`${p.year}-06-01`),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    })),
  ];
}
