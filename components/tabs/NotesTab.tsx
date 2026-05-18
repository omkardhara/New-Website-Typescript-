'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NOTES } from '@/data/site';
import type { NoteType } from '@/data/types';

const SUB_TABS: { id: NoteType; label: string; href: string }[] = [
  { id: 'article', label: 'Articles', href: '/writing/articles' },
  { id: 'poem', label: 'Poems', href: '/writing/poems' },
  { id: 'short-story', label: 'Short Stories', href: '/writing/short-stories' },
];

const PREVIEW_COUNT = 3;

export function NotesTab() {
  const [activeType, setActiveType] = useState<NoteType>('article');
  const filtered = NOTES.filter((n) => n.type === activeType);
  const preview = filtered.slice(0, PREVIEW_COUNT);
  const [featured, ...rest] = preview;
  const activeTab = SUB_TABS.find((t) => t.id === activeType)!;

  return (
    <>
      <div className="panel-head">
        <div className="panel-head-left">
          <div className="panel-dispatch">Writing · Long-form</div>
          <h2>
            Thoughts that wouldn&apos;t
            <br />
            <em>fit in a caption.</em>
          </h2>
        </div>
        <div className="panel-meta">
          <strong>{NOTES.length}</strong>
          Pieces filed
        </div>
      </div>

      <div className="filter-row">
        {SUB_TABS.map((t) => (
          <button
            key={t.id}
            className={`filter-chip${activeType === t.id ? ' active' : ''}`}
            onClick={() => setActiveType(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="writings-empty">
          <span>Nothing here yet.</span>
          <em>Something is being written.</em>
        </div>
      ) : (
        <>
          <div className="notes-grid">
            <Link href={`/writing/${featured.slug}`} className="note-card featured">
              {featured.image && (
                <div className="note-img-wrap">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              )}
              <div className="note-card-body">
                <div className="note-meta">
                  <span className="note-tag">✦ Featured · {featured.tag}</span>
                  <span className="note-date">
                    {featured.date} · {featured.read}
                  </span>
                  {featured.aiAssisted && (
                    <span className="note-ai-badge">AI assisted</span>
                  )}
                </div>
                <h3 className="note-title">{featured.title}</h3>
                <p className="note-excerpt">{featured.excerpt}</p>
                <div className="note-read">Read the piece →</div>
              </div>
            </Link>

            {rest.map((n) => (
              <Link key={n.id} href={`/writing/${n.slug}`} className="note-card">
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
                  <div className="note-read">Read →</div>
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
