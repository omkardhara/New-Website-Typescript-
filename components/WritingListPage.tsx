import Link from 'next/link';
import Image from 'next/image';
import { NOTES } from '@/data/site';

function Excerpt({ text }: { text: string }) {
  if (!text.includes(' / ')) return <>{text}</>;
  const lines = text.split(' / ');
  return (
    <>
      {lines.map((line, i) => (
        <span key={i}>{line}{i < lines.length - 1 && <br />}</span>
      ))}
    </>
  );
}

export type WritingSection = 'essays' | 'redbull' | 'poems';

const SECTIONS: { id: WritingSection; label: string; href: string }[] = [
  { id: 'essays',  label: 'Essays',   href: '/writing/essays'  },
  { id: 'redbull', label: 'Red Bull', href: '/writing/redbull' },
  { id: 'poems',   label: 'Poems',    href: '/writing/poems'   },
];

const SECTION_TITLES: Record<WritingSection, string> = {
  essays:  'Essays',
  redbull: 'Red Bull',
  poems:   'Poems',
};

function getNotesForSection(section: WritingSection) {
  switch (section) {
    case 'essays':
      return NOTES.filter(
        (n) => (n.type === 'article' || n.type === 'short-story') && n.publication !== 'Red Bull'
      );
    case 'redbull':
      return NOTES.filter((n) => n.publication === 'Red Bull');
    case 'poems':
      return NOTES.filter((n) => n.type === 'poem');
  }
}

export function WritingListPage({ section }: { section: WritingSection }) {
  const notes = getNotesForSection(section);
  const title = SECTION_TITLES[section];

  return (
    <div style={{ background: 'var(--bg-cream)', minHeight: '100vh' }}>
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 40,
          background: 'rgba(248,246,241,0.95)',
          backdropFilter: 'blur(20px) saturate(1.4)',
          borderBottom: '1px solid var(--line-faint)',
          padding: '74px clamp(20px,5vw,64px) 12px',
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <Link
              href="/#tab-notes"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--text-dark)',
                textDecoration: 'none',
                padding: '8px 14px',
                border: '1px solid var(--line-dark)',
                background: 'var(--surface)',
                transition: 'all 0.25s',
                flexShrink: 0,
              }}
              className="back-btn"
            >
              <span style={{ fontSize: '13px' }}>←</span> Writing
            </Link>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              overflowX: 'auto',
              paddingBottom: '2px',
              scrollbarWidth: 'none',
            }}
          >
            {SECTIONS.map((s) => (
              <Link
                key={s.id}
                href={s.href}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  padding: '7px 16px',
                  border: `1px solid ${s.id === section ? 'var(--line-dark)' : 'var(--line-faint)'}`,
                  color: s.id === section ? 'var(--text-dark)' : 'var(--text-dark-3)',
                  background: s.id === section ? 'var(--surface)' : 'transparent',
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '48px clamp(20px,5vw,64px) clamp(48px,6vw,80px)',
        }}
      >
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(36px,5vw,64px)',
            fontWeight: 400,
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
            color: 'var(--text-dark)',
            marginBottom: '48px',
          }}
        >
          {title}
        </h1>

        <div className="writing-list-grid">
          {notes.map((n) => (
            <Link
              key={n.id}
              href={n.url ?? `/writing/${n.slug}`}
              target={n.url ? '_blank' : undefined}
              rel={n.url ? 'noopener noreferrer' : undefined}
              className="note-card"
            >
              {n.image && (
                <div className="note-img-wrap small">
                  <Image
                    src={n.image}
                    alt={n.title}
                    fill
                    sizes="(max-width: 720px) 100vw, 400px"
                    style={{ objectFit: 'cover', objectPosition: n.imagePosition ?? 'center' }}
                  />
                </div>
              )}
              <div className="note-card-body">
                <div className="note-meta">
                  <span className="note-tag">{n.tag}</span>
                  <span className="note-date">
                    {n.date} · {n.read}
                  </span>
                  {n.aiAssisted && (
                    <span className="note-ai-badge">AI assisted</span>
                  )}
                </div>
                <h3 className="note-title">{n.title}</h3>
                <p className="note-excerpt"><Excerpt text={n.excerpt} /></p>
                <div className="note-read">
                  {n.url ? `Read on ${n.publication ?? 'site'} →` : 'Read →'}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
