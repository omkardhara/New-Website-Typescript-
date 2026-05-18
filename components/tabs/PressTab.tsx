import Image from 'next/image';
import { PRESS } from '@/data/site';

export function PressTab() {
  const featured = PRESS.filter((p) => p.featured);
  const regular = PRESS.filter((p) => !p.featured);

  return (
    <>
      <div className="panel-head">
        <div className="panel-head-left">
          <div className="panel-dispatch">Press Wire · 2019–2026</div>
          <h2>
            Apparently juggling
            <br />
            in public is <em>newsworthy.</em>
          </h2>
        </div>
        <div className="panel-meta">
          <strong>{PRESS.length}</strong>
          Features
        </div>
      </div>

      <div className="press-grid">
        {[...featured, ...regular].map((p) => (
          <div
            key={p.id}
            className={`press-card${p.featured ? ' featured' : ''}`}
            role="article"
            aria-label={`${p.publication} — ${p.title}`}
          >
            <div className="press-card-bg">
              <Image
                src={p.src}
                alt={p.title}
                fill
                sizes="(max-width: 720px) 100vw, (max-width: 1024px) 50vw, 25vw"
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
            </div>
            <div className="press-card-overlay" />
            {p.featured && <span className="press-card-badge">✦ Featured</span>}
            <div className="press-card-content">
              <div className="press-card-pub">{p.publication}</div>
              <div className="press-card-title">{p.title}</div>
              <div className="press-card-meta">{p.year}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
