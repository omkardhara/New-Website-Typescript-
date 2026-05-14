import { PRESS } from '@/data/site';

// Placeholder gradient backgrounds keyed by publication.
// Replace once real /images/press/*.jpg files are added.
const FALLBACKS: Record<string, string> = {
  'National Geographic': 'linear-gradient(135deg, #FFD700 0%, #B8860B 100%)',
  'Graffiti Magazine (DE)': 'linear-gradient(135deg, #000 0%, #1A1A17 100%)',
  'Mid-Day': 'linear-gradient(135deg, #E74C3C 0%, #C0392B 100%)',
  'Mumbai Mirror': 'linear-gradient(135deg, #3498DB 0%, #2980B9 100%)',
  'Red Bull India': 'linear-gradient(135deg, #2E6B4F 0%, #1F4D38 100%)',
  Girliyapa: 'linear-gradient(135deg, #C4621D 0%, #8B4513 100%)',
  'Local Press': 'linear-gradient(135deg, #8E44AD 0%, #6C3483 100%)',
};

export function PressTab() {
  const featured = PRESS.filter((p) => p.featured);
  const regular = PRESS.filter((p) => !p.featured);

  return (
    <>
      <div className="panel-head">
        <div className="panel-head-left">
          <div className="panel-dispatch">Press Wire · 2016–2025</div>
          <h2>
            Apparently juggling
            <br />
            in public is <em>newsworthy.</em>
          </h2>
        </div>
        <div className="panel-meta">
          <strong>{PRESS.length}+</strong>
          Publications
        </div>
      </div>

      <div className="press-grid">
        {[...featured, ...regular].map((p) => (
          <div
            key={p.id}
            className={`press-card${p.featured ? ' featured' : ''}`}
            role="button"
            tabIndex={0}
            aria-label={`${p.publication}, ${p.year}`}
          >
            <div
              className="press-card-bg"
              style={{ background: FALLBACKS[p.publication] || 'var(--surface-3)' }}
            />
            <div className="press-card-overlay" />
            {p.featured && <span className="press-card-badge">✦ Featured</span>}
            <div className="press-card-content">
              <div className="press-card-pub">{p.publication}</div>
              <div className="press-card-meta">{p.year} · {p.featured ? 'Tap to view' : 'View →'}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
