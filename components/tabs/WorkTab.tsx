'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { WORK, WORK_FILTERS } from '@/data/work';

const PREVIEW_COUNT = 3;

export function WorkTab() {
  const [active, setActive] = useState<string>('all');
  const visible = WORK.filter((w) => !w.hidden).sort((a, b) => (a.image ? 0 : 1) - (b.image ? 0 : 1));
  const filtered = active === 'all' ? visible : visible.filter((w) => w.cat === active);
  const preview = filtered.slice(0, PREVIEW_COUNT);

  return (
    <>
      <div className="panel-head">
        <div className="panel-head-left">
          <div className="panel-dispatch">Case Files · 2014–2025</div>
          <h2>
            Things I&apos;ve created,
            <br />
            <em>done, and survived.</em>
          </h2>
        </div>
        <div className="panel-meta">
          <strong>{WORK.length}</strong>
          Projects on file
        </div>
      </div>

      <div className="filter-row" role="group" aria-label="Filter projects by category">
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
        {preview.map((item, idx) => (
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

      {filtered.length > PREVIEW_COUNT && (
        <div className="writings-see-all">
          <Link href="/work" className="writings-see-all-btn">
            See all {filtered.length} projects →
          </Link>
        </div>
      )}
    </>
  );
}
