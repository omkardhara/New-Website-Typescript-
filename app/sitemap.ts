import type { MetadataRoute } from 'next';
import { WORK } from '@/data/work';
import { NOTES, PRESS } from '@/data/site';

const BASE = 'https://www.omkardhareshwar.com';

// Bump when site content changes materially; used as lastModified for pages without their own date.
const CONTENT_UPDATED = new Date('2026-10-12');

// Parse loose date strings from content data ("2024", "Oct 2024", "Jun 2023")
function parseDate(dateStr: string): Date {
  if (/^\d{4}$/.test(dateStr)) return new Date(`${dateStr}-06-01`);
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? new Date('2024-01-01') : d;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                       lastModified: CONTENT_UPDATED, changeFrequency: 'weekly',  priority: 1   },
    { url: `${BASE}/about`,            lastModified: CONTENT_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/story`,            lastModified: CONTENT_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/press`,            lastModified: CONTENT_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/media`,            lastModified: CONTENT_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/contact`,          lastModified: CONTENT_UPDATED, changeFrequency: 'yearly',  priority: 0.5 },
    { url: `${BASE}/writing/essays`,   lastModified: CONTENT_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/writing/redbull`,  lastModified: CONTENT_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/writing/poems`,    lastModified: CONTENT_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    ...WORK.filter((w) => !w.url).map((w) => ({
      url: `${BASE}/work/${w.slug}`,
      lastModified: CONTENT_UPDATED,
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
