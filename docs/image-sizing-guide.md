# Image Sizing Guide — omkardhareshwar.com

All images go in the `/public/images/` folder unless noted otherwise.
Use lowercase, hyphen-separated filenames. No spaces.
Export as JPG for photos, PNG only if transparency is needed.
Target 72 DPI for all web images. Higher DPI has no benefit on screens.

---

## 1. Hero Portrait

**Where it appears:** Home page, left side — your main portrait frame.

| Property | Value |
|---|---|
| Aspect ratio | 4 : 5 (portrait) |
| Recommended pixel size | 960 × 1200 px |
| Object position | Centre top (your face/upper body stays in frame) |
| File format | JPG |
| Max file size | 300 KB |
| Current file | `/public/images/portrait.jpg` |

**Tips:** Keep your face and upper body in the top 60% of the frame. The image is cropped from the top down on smaller screens.

---

## 2. Work Card Thumbnail

**Where it appears:** Work tab — the grid of project cards (3 across on desktop).

| Property | Value |
|---|---|
| Aspect ratio | Any — displayed at fixed 240px height, full card width |
| Recommended pixel size | 800 × 600 px (landscape works best) |
| Object fit | Cover (centred) |
| File format | JPG |
| Max file size | 200 KB |
| Set in | `data/work.ts` → `image` field |

**Tips:** Landscape or square images work best. Avoid tall portrait images — they'll be heavily cropped to the 240px strip.

---

## 3. Work Detail Page — Gallery Images

**Where it appears:** Individual project pages (e.g. `/work/marol-art-village`) — the image gallery that alternates between inset and full-width.

| Property | Value |
|---|---|
| Aspect ratio | 4 : 3 (landscape) |
| Recommended pixel size | 1280 × 960 px |
| Max display width | 960 px (full width) or 720 px (inset) |
| Object fit | Cover |
| File format | JPG |
| Max file size | 400 KB per image |
| Set in | `data/work.ts` → `images` array |

**Tips:** Use consistent aspect ratios across a project's gallery for a clean look. You can have as many images as you want per project.

---

## 4. Writing Cover Photo — Featured Card

**Where it appears:** Writings tab — the large featured card (left, spans 2 rows). Also the first card on the `/writing/articles` (or poems/short-stories) list page.

| Property | Value |
|---|---|
| Aspect ratio | Any — displayed at fixed 300px height |
| Recommended pixel size | 1200 × 600 px (wide landscape) |
| Object fit | Cover (centred) |
| File format | JPG |
| Max file size | 250 KB |
| Set in | `data/site.ts` → `NOTES` array → `image` field |

---

## 5. Writing Cover Photo — Regular Card

**Where it appears:** Writings tab — the two smaller cards beside the featured card. Also all cards on the full list pages.

| Property | Value |
|---|---|
| Aspect ratio | Any — displayed at fixed 160px height |
| Recommended pixel size | 800 × 400 px |
| Object fit | Cover (centred) |
| File format | JPG |
| Max file size | 150 KB |
| Set in | `data/site.ts` → `NOTES` array → `image` field |

**Note:** The same `image` field is used for both the featured and regular card. If a piece is currently featured (first in its type), the image shows at 300px tall; otherwise at 160px. Design for 300px and it'll work at both sizes.

---

## 6. Writing Detail Page — Hero Image

**Where it appears:** Top of individual writing pages (e.g. `/writing/flow-arts-taught-me-stillness`) — full-width banner below the title.

| Property | Value |
|---|---|
| Aspect ratio | 16 : 9 (widescreen) |
| Recommended pixel size | 1920 × 1080 px |
| Max display width | 960 px |
| Object fit | Cover |
| File format | JPG |
| Max file size | 400 KB |
| Set in | `data/site.ts` → `NOTES` array → `image` field |

**Note:** This is the same `image` field as the card thumbnail. The detail page crops it to 16:9. If you use a wide landscape image (16:9), it works perfectly in both contexts.

**Recommended:** Use 16:9 images for writing pieces so they look good both as card thumbnails and as the hero on the detail page.

---

## 7. OG / Social Share Image

**Where it appears:** When the site (or any page) is shared on WhatsApp, Twitter, LinkedIn — the preview card image.

| Property | Value |
|---|---|
| Aspect ratio | 1200 × 630 px (Open Graph standard) |
| Recommended pixel size | 1200 × 630 px exactly |
| File format | JPG |
| Max file size | 300 KB |
| Current file | `/public/og-image.jpg` |

**Individual writing pages** use the writing's cover `image` as their OG image if one is set. If not set, no OG image is shown for that page (just text).

**Tips:** Include your name and a strong visual. Avoid fine text — it won't be legible at small sizes.

---

## 8. Video Thumbnails

**Where it appears:** Media tab — the video grid (YouTube videos with play button overlay).

| Property | Value |
|---|---|
| Aspect ratio | 16 : 9 |
| Recommended pixel size | 1280 × 720 px |
| Object fit | Cover |
| Source | YouTube auto-generates: `https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg` |
| Set in | `data/videos.ts` → `thumb` field |

**Tips:** For YouTube videos, just paste the YouTube video ID and the thumbnail is auto-fetched. Only use a local image if the YouTube auto-thumbnail doesn't load (as with the Doordarshan video).

---

## 9. Press Clipping Cards

**Where it appears:** Press tab — the grid of press mentions.

| Property | Value |
|---|---|
| Aspect ratio | Featured card: 3 : 2 · Regular cards: 3 : 4 (portrait) |
| Recommended pixel size | Featured: 900 × 600 px · Regular: 600 × 800 px |
| File format | JPG or PNG (for scanned clippings) |
| Max file size | 300 KB |
| Set in | `data/site.ts` → `PRESS` array → `src` field |

---

## 10. Story / Timeline Event Images

**Where it appears:** `/story` page — expandable timeline events in the detail panel.

| Property | Value |
|---|---|
| Fixed display size | 280 × 210 px |
| Aspect ratio | 4 : 3 |
| Recommended pixel size | 560 × 420 px (2× for retina) |
| File format | JPG |
| Max file size | 100 KB |
| Set in | `data/timeline.ts` → event `image` field |

---

## Quick Reference Table

| Slot | Ratio | Recommended Size | Max File Size |
|---|---|---|---|
| Hero portrait | 4:5 | 960 × 1200 px | 300 KB |
| Work card thumbnail | ~4:3 | 800 × 600 px | 200 KB |
| Work gallery image | 4:3 | 1280 × 960 px | 400 KB |
| Writing cover (featured card) | 16:9 | 1200 × 600 px | 250 KB |
| Writing cover (regular card) | 16:9 | 800 × 450 px | 150 KB |
| Writing detail hero | 16:9 | 1920 × 1080 px | 400 KB |
| OG / social share | 1.91:1 | 1200 × 630 px | 300 KB |
| Video thumbnail | 16:9 | 1280 × 720 px | Auto (YouTube) |
| Press clipping (featured) | 3:2 | 900 × 600 px | 300 KB |
| Press clipping (regular) | 3:4 | 600 × 800 px | 300 KB |
| Story timeline event | 4:3 | 560 × 420 px | 100 KB |

---

## File Naming Convention

Use lowercase, hyphens only, no spaces or special characters.

**Good:** `rickshaw-run-finish-line.jpg`
**Bad:** `Rikshaw Run- Gangtok to Kochi- Omkar Dhareshwar- Finish Line.jpg`

After uploading to `/public/images/`, reference it in the data file as `/images/your-file-name.jpg`.
