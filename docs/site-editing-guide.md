# Site Editing Guide — omkardhareshwar.com

This document covers every type of content change you might want to make, which files to edit, and worked examples for each.

No coding knowledge is required — all changes are made by editing plain text in data files. Each file is clearly structured with comments.

---

## Files You Will Ever Need to Edit

| File | What it controls |
|---|---|
| `data/site.ts` | Writings (articles, poems, short stories), Press items, Socials |
| `data/writing-content.ts` | The full text body of every writing piece |
| `data/work.ts` | Work/project portfolio (cards + detail pages) |
| `data/videos.ts` | Videos in the Media tab |
| `data/timeline.ts` | The Story page timeline events |
| `public/images/` | All uploaded images |

You will never need to touch any file in `app/`, `components/`, or `lib/`.

---

## Task 1: Add a New Writing Piece

Writing pieces live across two files: the text goes in `writing-content.ts`, the metadata goes in `site.ts`.

### Step 1 — Add the content to `data/writing-content.ts`

Open the file. At the end, before the closing `};`, add a new entry:

```ts
'my-new-slug': `Your full text goes here.

Each blank line creates a new paragraph.

For poems, each blank line creates a new stanza.`,
```

The key (`'my-new-slug'`) must be unique, lowercase, and hyphen-separated. It becomes the URL: `/writing/my-new-slug`.

### Step 2 — Add the metadata to `data/site.ts`

Open the file and find the `NOTES` array. Add a new entry in the correct section (Articles, Poems, or Short Stories):

```ts
{
  id: 39,                                    // next available number
  slug: 'my-new-slug',                       // must match the key in writing-content.ts
  title: 'My Article Title',
  date: 'May 2026',
  read: '5 min',                             // estimated read time
  tag: 'Philosophy',                         // one-word category shown in gold
  type: 'article',                           // 'article' | 'poem' | 'short-story'
  excerpt: 'The first line or two that draws people in.',
  image: '/images/my-cover-photo.jpg',       // optional — delete this line if no image
  aiAssisted: true,                          // optional — only add if AI helped write it
  content: WRITING_CONTENT['my-new-slug'],
},
```

**The first entry in each type group becomes the featured card in the preview.** To control which piece shows as featured, put it first in its section.

### Example — Adding a Poem

In `data/writing-content.ts`:
```ts
'the-open-road': `The road doesn't ask where you've been.
It only opens ahead.

Each mile a small forgetting.
Each turn a small surprise.`,
```

In `data/site.ts`, in the Poems section:
```ts
{
  id: 39,
  slug: 'the-open-road',
  title: 'The Open Road',
  date: 'May 2026',
  read: '1 min',
  tag: 'Journey',
  type: 'poem',
  excerpt: 'The road doesn\'t ask where you\'ve been. It only opens ahead.',
  content: WRITING_CONTENT['the-open-road'],
},
```

---

## Task 2: Remove a Writing Piece

1. In `data/site.ts`, find the entry in the `NOTES` array and delete the entire `{ ... }` block for that piece.
2. Optionally, remove its text from `data/writing-content.ts` (safe to leave it — it won't appear anywhere if NOTES doesn't reference it).

---

## Task 3: Change Which Poems/Articles Show in the Preview

The Writings tab shows the first 3 items of each type as a preview. Order in the `NOTES` array = order on site.

To change which 3 show: move the entries you want in positions 1, 2, 3 within their section in `data/site.ts`.

The first entry becomes the large **Featured** card. Entries 2 and 3 are the smaller cards to its right.

---

## Task 4: Add a Cover Photo to a Writing Piece

1. Upload the image to `/public/images/` (see image sizing guide for dimensions).
2. In `data/site.ts`, find the note entry and add or update the `image` field:
   ```ts
   image: '/images/your-image-filename.jpg',
   ```

---

## Task 5: Add a New Work Project

Open `data/work.ts` and add a new entry to the `WORK` array:

```ts
{
  id: 7,                                      // next available number
  slug: 'project-name',                       // URL: /work/project-name
  cat: 'performance',                         // 'performance' | 'brand' | 'installation' | 'activism' | 'production'
  tag: 'Fire Performance',
  title: 'Project Title',
  desc: 'One sentence shown on the card.',
  stat: '2025',                               // shown in the corner of the card (year, or a stat)
  glyph: '✦',                                 // decorative symbol on the card
  image: '/images/project-thumbnail.jpg',     // card thumbnail
  images: [                                   // gallery on the detail page
    '/images/project-1.jpg',
    '/images/project-2.jpg',
  ],
  captions: [                                 // one caption per image (can be empty strings)
    'Caption for image 1.',
    'Caption for image 2.',
  ],
  article: `Your project write-up goes here.

Use blank lines for paragraphs.`,
},
```

---

## Task 6: Edit an Existing Work Project

Open `data/work.ts`, find the project by its `slug` or `title`, and update any field directly. The article text is in the `article` field of the same entry.

---

## Task 7: Add a Video

Open `data/videos.ts` and add a new entry:

```ts
{
  title: 'Video Title',
  sub: 'Subtitle or context line',
  yt: 'YOUTUBE_VIDEO_ID',               // the ID from the YouTube URL (not the full URL)
  thumb: 'https://img.youtube.com/vi/YOUTUBE_VIDEO_ID/maxresdefault.jpg',
},
```

For the YouTube ID: the URL `https://www.youtube.com/watch?v=jyzFUHqmjsQ` has ID `jyzFUHqmjsQ`.

If the YouTube thumbnail doesn't load (rare), upload a local image to `/public/images/` and use `/images/your-thumb.jpg` instead.

For portrait/vertical videos, add `portrait: true` to the entry.

---

## Task 8: Add a Press Item

Open `data/site.ts` and find the `PRESS` array. Add a new entry:

```ts
{
  id: 9,                              // next available number
  publication: 'Publication Name',
  featured: false,                    // true = large card, false = regular card
  year: '2026',
  type: 'image',                     // always 'image' for photos/scans
  src: '/images/press/clipping.jpg', // upload image to /public/images/press/
},
```

---

## Task 9: Update Social Links

Open `data/site.ts` and find the `SOCIALS` array. Edit the `href` or `handle` fields directly.

---

## Task 10: Update the Story / Timeline

Open `data/timeline.ts`. Each chapter has events beneath it. Add or edit events:

```ts
{
  year: '2026',
  title: 'Event Title',
  tag: 'Category',
  desc: 'A short description of what happened.',
  image: '/images/event-photo.jpg',   // optional
},
```

---

## Deployment

Every time you save a change, you need to:

1. **Commit** the changed file(s) with git
2. **Push** to the `main` branch
3. Vercel automatically detects the push and deploys to `www.omkardhareshwar.com` within ~2 minutes

If you're working with Claude Code, just describe the change you want — Claude will edit the files, commit, and push directly.

---

## Quick Lookup: What to Edit for Common Tasks

| Task | Files to edit |
|---|---|
| Add/remove a poem or article | `data/writing-content.ts` + `data/site.ts` |
| Change preview order of poems/articles | `data/site.ts` (reorder entries) |
| Add cover photo to a writing piece | Upload to `/public/images/` + `data/site.ts` |
| Add/edit a work project | `data/work.ts` |
| Add a video | `data/videos.ts` |
| Add a press item | `data/site.ts` (PRESS array) |
| Update social links | `data/site.ts` (SOCIALS array) |
| Update story timeline | `data/timeline.ts` |
| Change hero portrait | Replace `/public/images/portrait.jpg` |
| Change OG/social share image | Replace `/public/og-image.jpg` |
