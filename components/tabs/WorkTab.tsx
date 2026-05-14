'use client';
import { useState } from 'react';
import Link from 'next/link';
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
            Things I&apos;ve made,
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
        {filtered.map((item) => (
          <Link key={item.id} href={`/work/${item.slug}`} className="work-card">
            <div className="work-card-img" style={{ background: item.gradient }}>
              <span className="work-card-glyph">{item.glyph}</span>
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
