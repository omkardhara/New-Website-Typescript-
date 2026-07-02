'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NOTES } from '@/data/site';
import type { WritingSection } from '@/components/WritingListPage';

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

const SUB_TABS: { id: WritingSection; label: string; href: string }[] = [
  { id: 'essays',  label: 'Essays',   href: '/writing/essays'  },
  { id: 'redbull', label: 'Red Bull', href: '/writing/redbull' },
  { id: 'poems',   label: 'Poems',    href: '/writing/poems'   },
];

function getFiltered(section: WritingSection) {
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

const PREVIEW_COUNT = 3;

export function NotesTab() {
  const [active, setActive] = useState<WritingSection>('essays');
  const filtered = getFiltered(active);
  const preview = filtered.slice(0, PREVIEW_COUNT);
  const [featured, ...rest] = preview;
  const activeTab = SUB_TABS.find((t) => t.id === active)!;

  return (
    <>
      <div className="panel-head">
        <div className="panel-head-left">
          <div className="panel-dispatch">Writing · Long-form</div>
          <h2>
            Words carry what
            <br />
            <em>walls can&apos;t hold.</em>
          </h2>
        </div>
        <div className="panel-meta">
          <strong>{NOTES.length}</strong>
          Pieces filed
        </div>
      </div>

      <div className="filter-row" role="group" aria-label="Filter writing by section">
        {SUB_TABS.map((t) => (
          <button
            key={t.id}
            className={`filter-chip${active === t.id ? ' active' : ''}`}
            onClick={() => setActive(t.id)}
            aria-pressed={active === t.id}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {filtered.length} piece{filtered.length !== 1 ? 's' : ''} in {activeTab.label}
      </div>

      {filtered.length === 0 ? (
        <div className="writings-empty">
          <span>Nothing here yet.</span>
          <em>Something is being written.</em>
        </div>
      ) : (
        <>
          <div className="notes-grid">
            <Link
              href={featured.url ?? `/writing/${featured.slug}`}
              target={featured.url ? '_blank' : undefined}
              rel={featured.url ? 'noopener noreferrer' : undefined}
              className="note-card featured"
            >
              {featured.image && (
                <div className="note-img-wrap">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    style={{ objectFit: 'cover', objectPosition: featured.imagePosition ?? 'center' }}
                  />
                </div>
              )}
              <div className="note-card-body">
                <div className="note-meta">
                  <span className="note-tag">✦ Featured · {featured.tag}</span>
                  <span className="note-date">
                    {featured.date} · {featured.read}
                    {featured.aiAssisted && <span className="note-ai-note"> · AI-assisted</span>}
                  </span>
                </div>
                <h3 className="note-title">{featured.title}</h3>
                <p className="note-excerpt"><Excerpt text={featured.excerpt} /></p>
                <div className="note-read">
                  {featured.url ? `Read on ${featured.publication ?? 'site'} →` : 'Read the piece →'}
                </div>
              </div>
            </Link>

            {rest.map((n) => (
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
                      {n.aiAssisted && <span className="note-ai-note"> · AI-assisted</span>}
                    </span>
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

          {filtered.length > PREVIEW_COUNT && (
            <div className="writings-see-all">
              <Link href={activeTab.href} className="writings-see-all-btn">
                See all {filtered.length} {activeTab.label} →
              </Link>
            </div>
          )}
        </>
      )}
    </>
  );
}
