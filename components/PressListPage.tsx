'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PRESS } from '@/data/site';
import type { PressCategory } from '@/data/types';

type Cat = PressCategory | 'all';

const CATS: { id: Cat; label: string }[] = [
  { id: 'all',          label: 'All' },
  { id: 'street-art',  label: 'Street Art' },
  { id: 'juggling',    label: 'Juggling' },
  { id: 'activism',    label: 'Activism' },
  { id: 'installation',label: 'Installation' },
];

const SORTED = [...PRESS].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

export function PressListPage({ defaultCategory = 'all' }: { defaultCategory?: Cat }) {
  const [cat, setCat] = useState<Cat>(defaultCategory);

  const filtered = cat === 'all' ? SORTED : SORTED.filter((p) => p.category === cat);

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
            href="/#tab-press"
            scroll={false}
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
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--text-dark-3)',
            }}
          >
            {filtered.length} {cat === 'all' ? 'features' : CATS.find((c) => c.id === cat)?.label}
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
            marginBottom: '32px',
          }}
        >
          Press
        </h1>

        <div className="filter-row" role="group" aria-label="Filter press by category" style={{ marginBottom: '32px' }}>
          {CATS.map((c) => (
            <button
              key={c.id}
              className={`filter-chip${cat === c.id ? ' active' : ''}`}
              onClick={() => setCat(c.id)}
              aria-pressed={cat === c.id}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          {filtered.length} feature{filtered.length !== 1 ? 's' : ''} shown
        </div>

        <div className="press-grid">
          {filtered.map((p) => (
            <Link
              key={p.id}
              href={`/press/${p.slug}`}
              className="press-card"
              aria-label={`${p.publication} — ${p.title}, ${p.year}`}
            >
              <div className="press-card-bg">
                <Image
                  src={p.thumb ?? p.src}
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
