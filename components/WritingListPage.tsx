import Link from 'next/link';
import Image from 'next/image';
import { NOTES } from '@/data/site';
import type { NoteType } from '@/data/types';

const TYPE_LABELS: Record<NoteType, string> = {
  article: 'Articles',
  poem: 'Poems',
  'short-story': 'Short Stories',
};

const TYPE_HREFS: Record<NoteType, string> = {
  article: '/writing/articles',
  poem: '/writing/poems',
  'short-story': '/writing/short-stories',
};

export function WritingListPage({ type }: { type: NoteType }) {
  const notes = NOTES.filter((n) => n.type === type);
  const label = TYPE_LABELS[type];

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
          padding: '74px clamp(20px,5vw,64px) 14px',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Link
            href="/#tab-notes"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--text-dark)',
              textDecoration: 'none',
              padding: '10px 18px',
              border: '1px solid var(--line-dark)',
              background: 'var(--surface)',
              transition: 'all 0.25s',
            }}
            className="back-btn"
          >
            <span style={{ fontSize: '14px' }}>←</span> Back to main page
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {(Object.keys(TYPE_LABELS) as NoteType[]).map((t) => (
              <Link
                key={t}
                href={TYPE_HREFS[t]}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  padding: '7px 14px',
                  border: `1px solid ${t === type ? 'var(--line-dark)' : 'var(--line-faint)'}`,
                  color: t === type ? 'var(--text-dark)' : 'var(--text-dark-3)',
                  background: t === type ? 'var(--surface)' : 'transparent',
                  transition: 'all 0.2s',
                }}
              >
                {TYPE_LABELS[t]}
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
          {label}
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
                    style={{ objectFit: 'cover' }}
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
                <p className="note-excerpt">{n.excerpt}</p>
                <div className="note-read">{n.url ? `Read on ${n.publication ?? 'site'} →` : 'Read →'}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
