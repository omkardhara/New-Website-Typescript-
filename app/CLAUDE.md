# app/ — routing, metadata, SEO patterns

## Routes
| Path | What it is |
|---|---|
| `/` | Homepage — TabShell (Work/Media/Notes tabs) + hero |
| `/work` | Full work list with filter chips |
| `/work/[slug]` | Project detail (static; skips items with `url` set) |
| `/media` | Full video list |
| `/writing/essays` `/writing/redbull` `/writing/poems` | Full writing lists |
| `/writing/[slug]` | Individual writing page (skips items with `url`); has next/prev nav |
| `/writing/articles` `/writing/short-stories` | Redirect → `/writing/essays` |
| `/about` `/story` `/press` `/contact` | Static pages |
| `/press/[slug]` | Individual press item page |

## Metadata pattern (every page must have)
```ts
export function generateMetadata(): Metadata {
  return {
    title: '...',
    description: '...',
    alternates: { canonical: `${SITE_URL}/path` },
    openGraph: { type: 'article', title, description, url, images: [{ url, alt }] },
    twitter: { card: 'summary_large_image', title, description, images: [{ url, alt }] },
  };
}
```

## JSON-LD / Schema patterns
- Article pages (`work/[slug]`, `writing/[slug]`, `press/[slug]`): emit **two** scripts — content schema + BreadcrumbList
- `layout.tsx` `<head>`: Person schema
- Press page: CollectionPage + per-item NewsArticle/Book
- Writing section pages: CollectionPage with hasPart items
- `/about`: AboutPage schema; `/contact`: ContactPage schema; `/media`: ItemList + VideoObject
- `/work`: CollectionPage with hasPart CreativeWork items

## OG image
- Default fallback: `/public/og-2025.jpg` (referenced in layout.tsx)
- Page-specific: use the item's own image where available (`note.image`, `item.image`, `item.src`)
- Never reuse the old `/og-image.jpg` path — it was renamed to bust WhatsApp's cache
