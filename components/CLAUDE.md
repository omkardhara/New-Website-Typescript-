# components/ — component map, CSS variables, accessibility

## Component map
- `TabShell.tsx` — sticky Work/Media/Notes tab bar on homepage
- `tabs/WorkTab.tsx` — work grid + filter chips (3-item preview)
- `tabs/NotesTab.tsx` — writing preview (3 cards per section)
- `tabs/MediaTab.tsx` — video grid (3-item preview)
- `tabs/PressTab.tsx` — press grid + lightbox
- `WorkListPage.tsx` — full work list at /work
- `WritingListPage.tsx` — full writing list pages (/writing/essays etc.)
- `MediaListPage.tsx` — full video list at /media
- `AboutPage.tsx` — /about page
- `StoryMap.tsx` — /story page timeline
- `Hero.tsx` — homepage hero
- `Nav.tsx` — top nav bar; uses IntersectionObserver on .hero for cream transition
- `ShareButton.tsx` — gold share button with native share sheet (mobile) / dropdown (desktop)
- `ReadingProgress.tsx` — thin gold progress bar fixed at top of article pages
- `ScrollToTop.tsx` — resets scroll to top on every route change
- `CredStrip.tsx` — auto-scrolling marquee of client/press logos

## CSS variables (defined in app/globals.css)
```
--bg-cream, --bg-dark
--text-dark, --text-dark-2, --text-dark-3, --text-dark-4
--text-light, --text-light-2, --text-light-3
--gold, --gold-bright, --gold-light, --ember, --ember-light
--line-dark, --line-faint, --line-light
--font-serif, --font-mono, --font-sans
--surface, --surface-3
```

## Accessibility patterns
- `.sr-only` class in globals.css for screen-reader-only text
- Skip-to-content link in layout.tsx targets `#main-content`
- Article/media pages: `<main style={{display:'contents'}}>` adds the landmark without visual impact
- Filter chip groups: `role="group"` + `aria-label` + `aria-pressed`; follow with `<div class="sr-only" aria-live="polite">` for result count
- Tab panels: `role="tabpanel"` + `aria-labelledby` pointing to controlling tab button
- Tab buttons: `role="tab"` + `aria-selected` + `tabIndex={active ? 0 : -1}` + keyboard arrow nav
- Marquee/decorative: `aria-hidden="true"`; duplicated items also get `aria-hidden`
- Dialog pattern: `role="dialog"` + `aria-modal="true"` + `aria-label` + Escape key + focus return
- Nav hamburger: `aria-expanded` + `aria-controls` pointing to menu id
- `<article>`: `aria-labelledby` pointing to the page `<h1 id>`
- `<section>` landmarks: `aria-labelledby` pointing to section `<h2 id>`
