'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { WORK, WORK_FILTERS } from '@/data/work';

export function WorkTab() {
  const [active, setActive] = useState<string>('all');
  const filtered = active === 'all' ? WORK : WORK.filter((w) => w.cat === active);

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

      <div className="filter-row">
        {WORK_FILTERS.map((f) => (
          <button
            key={f.id}
            className={`filter-chip${active === f.id ? ' active' : ''}`}
            onClick={() => setActive(f.id)}
          >
            {f.label}
          </button>
        ))}
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
                  style={{ objectFit: 'cover' }}
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
                View project <span>→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
