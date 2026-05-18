'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PRESS } from '@/data/site';
import type { PressCategory } from '@/data/types';
import { PressLightbox } from '@/components/PressLightbox';

type Cat = PressCategory | 'all';

const CATS: { id: Cat; label: string }[] = [
  { id: 'all',          label: 'All' },
  { id: 'street-art',  label: 'Street Art' },
  { id: 'juggling',    label: 'Juggling' },
  { id: 'activism',    label: 'Activism' },
  { id: 'installation',label: 'Installation' },
];

const PREVIEW = 3;

// Featured first, then by id
const SORTED = [...PRESS].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

export function PressTab() {
  const [cat, setCat] = useState<Cat>('all');
  const [lbIndex, setLbIndex] = useState<number | null>(null);

  const filtered = cat === 'all' ? SORTED : SORTED.filter((p) => p.category === cat);
  const preview  = filtered.slice(0, PREVIEW);

  return (
    <>
      <div className="panel-head">
        <div className="panel-head-left">
          <div className="panel-dispatch">Press · Street Art · Juggling · Activism</div>
          <h2>
            From walls to stages
            <br />
            <em>to the front page.</em>
          </h2>
        </div>
        <div className="panel-meta">
          <strong>{PRESS.length}</strong>
          Features
        </div>
      </div>

      <div className="filter-row">
        {CATS.map((c) => (
          <button
            key={c.id}
            className={`filter-chip${cat === c.id ? ' active' : ''}`}
            onClick={() => { setCat(c.id); setLbIndex(null); }}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="press-grid">
        {preview.map((p) => (
          <div
            key={p.id}
            className="press-card"
            onClick={() => setLbIndex(filtered.indexOf(p))}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setLbIndex(filtered.indexOf(p))}
            aria-label={`${p.publication} — ${p.title}`}
          >
            <div className="press-card-bg">
              <Image
                src={p.src}
                alt={p.title}
                fill
                sizes="(max-width: 720px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={90}
                style={{ objectFit: 'cover', objectPosition: p.thumbPosition ?? 'top' }}
              />
            </div>
            <div className="press-card-overlay" />
            <div className="press-card-content">
              <div className="press-card-pub">{p.publication}</div>
              <div className="press-card-title">{p.title}</div>
              <div className="press-card-meta">{p.year}</div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length > PREVIEW && (
        <div className="writings-see-all">
          <Link
            href={`/press${cat !== 'all' ? `?cat=${cat}` : ''}`}
            className="writings-see-all-btn"
          >
            View all {filtered.length} features →
          </Link>
        </div>
      )}

      {lbIndex !== null && (
        <PressLightbox
          items={filtered}
          index={lbIndex}
          onClose={() => setLbIndex(null)}
          onChange={setLbIndex}
        />
      )}
    </>
  );
}
