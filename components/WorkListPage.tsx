'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { WORK, WORK_FILTERS } from '@/data/work';

export function WorkListPage() {
  const [active, setActive] = useState<string>('all');
  const visible = WORK.filter((w) => !w.hidden).sort((a, b) => (a.image ? 0 : 1) - (b.image ? 0 : 1));
  const filtered = active === 'all' ? visible : visible.filter((w) => w.cat === active);

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
          padding: '74px clamp(20px,5vw,32px) 14px',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          <Link
            href="/#tab-work"
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
            <span style={{ fontSize: '14px' }}>←</span> Back
          </Link>
        </div>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px clamp(20px,5vw,32px) clamp(48px,6vw,80px)' }}>
        <div style={{ marginBottom: '40px' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '12px',
            }}
          >
            Case Files · 2014–2025
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(28px,4.5vw,52px)',
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'var(--text-dark)',
            }}
          >
            Things I&apos;ve created,{' '}
            <em>done, and survived.</em>
          </h1>
        </div>

        <div className="filter-row" role="group" aria-label="Filter projects by category" style={{ marginBottom: '32px' }}>
          {WORK_FILTERS.map((f) => (
            <button
              key={f.id}
              className={`filter-chip${active === f.id ? ' active' : ''}`}
              onClick={() => setActive(f.id)}
              aria-pressed={active === f.id}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          {filtered.length} project{filtered.length !== 1 ? 's' : ''} shown
        </div>

        <div className="work-grid">
          {filtered.map((item, idx) => (
            <Link
              key={item.id}
              href={item.url ?? `/work/${item.slug}`}
              target={item.url ? '_blank' : undefined}
              rel={item.url ? 'noopener noreferrer' : undefined}
              className="work-card"
            >
              <div
                className="work-card-img"
                style={item.image ? undefined : { background: item.gradient }}
              >
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 720px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: 'cover', objectPosition: item.imagePosition || 'center' }}
                    priority={idx === 0}
                  />
                ) : (
                  <span className="work-card-glyph">{item.glyph}</span>
                )}
                <span className="work-card-stat">{item.stat}</span>
              </div>
              <div className="work-card-body">
                <div className="work-card-tag">{item.tag}</div>
                <h3 className="work-card-title">{item.title}</h3>
                <p className="work-card-desc">{item.desc}</p>
                <div className="work-card-link">
                  {item.linkLabel ?? 'View project'} <span>{item.url ? '↗' : '→'}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
