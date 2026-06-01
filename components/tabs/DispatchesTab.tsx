import Link from 'next/link';

export function DispatchesTab() {
  return (
    <>
      <div className="panel-head">
        <div className="panel-head-left">
          <div className="panel-dispatch">Adventures · Off-Script</div>
          <h2>
            Occasionally, I go
            <br />
            <em>completely off-script.</em>
          </h2>
        </div>
        <div className="panel-meta">
          <strong>01</strong>
          Active log
        </div>
      </div>

      <div className="dispatch-feature">
        <div className="dispatch-img">
          <span className="dispatch-img-glyph">🛺</span>
          <svg className="dispatch-svg" viewBox="0 0 400 500" preserveAspectRatio="none" aria-hidden="true">
            <path
              d="M 80 80 Q 200 120 160 200 Q 120 280 220 340 Q 300 380 280 440"
              stroke="#F8F6F1"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="6 4"
            />
            <circle cx="80" cy="80" r="5" fill="#F8F6F1" />
            <circle cx="280" cy="440" r="5" fill="#E07A35" />
          </svg>
          <span className="dispatch-img-route">Gangtok → Kochi · 3,000 km</span>
        </div>
        <div className="dispatch-text">
          <div className="dispatch-eyebrow">The Rickshaw Run · January 2024</div>
          <h3 className="dispatch-title">
            Gangtok to Kochi.
            <br />
            <em>3,000 km.</em>
          </h3>
          <p className="dispatch-desc">
            A mechanical nightmare dressed as an adventure. We took a three-wheeled rickshaw
            across mountain passes, river crossings, and highways that showed up only on paper.
          </p>
          <div className="dispatch-stats">
            <div>
              <div className="dispatch-stat-num">3,000+</div>
              <span className="dispatch-stat-label">km covered</span>
            </div>
            <div>
              <div className="dispatch-stat-num">14</div>
              <span className="dispatch-stat-label">days</span>
            </div>
            <div>
              <div className="dispatch-stat-num">6</div>
              <span className="dispatch-stat-label">engine deaths</span>
            </div>
            <div>
              <div className="dispatch-stat-num">∞</div>
              <span className="dispatch-stat-label">chai stops</span>
            </div>
          </div>
          <button
            className="btn-ghost dark"
            disabled
            style={{ alignSelf: 'flex-start', opacity: 0.4, cursor: 'default' }}
          >
            Full dispatch coming soon →
          </button>
        </div>
      </div>

      <div className="dispatch-feature" style={{ marginTop: '48px' }}>
        <div className="dispatch-img">
          <span className="dispatch-img-glyph">🏔️</span>
          <svg className="dispatch-svg" viewBox="0 0 400 500" preserveAspectRatio="none" aria-hidden="true">
            <path
              d="M 200 60 Q 160 140 180 220 Q 200 300 160 380 Q 130 430 150 470"
              stroke="#F8F6F1"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="6 4"
            />
            <circle cx="200" cy="60" r="5" fill="#F8F6F1" />
            <circle cx="150" cy="470" r="5" fill="#E07A35" />
          </svg>
          <span className="dispatch-img-route">Kathgodam → Panchachuli · 2024</span>
        </div>
        <div className="dispatch-text">
          <div className="dispatch-eyebrow">Uttarakhand · 2024</div>
          <h3 className="dispatch-title">
            Pindari to Panchachuli.
            <br />
            <em>Juggled with snowballs.</em>
          </h3>
          <p className="dispatch-desc">
            Train to Kathgodam. Car to Khati. Trek to Pindari Glacier. Jeep roof to Dugtu.
            Trek to Panchachuli where the snowballs fell apart after the third throw.
            Juggled with kids at every stop along the way.
          </p>
          <div className="dispatch-stats">
            <div>
              <div className="dispatch-stat-num">3,660</div>
              <span className="dispatch-stat-label">m at Pindari</span>
            </div>
            <div>
              <div className="dispatch-stat-num">2</div>
              <span className="dispatch-stat-label">glaciers</span>
            </div>
            <div>
              <div className="dispatch-stat-num">1</div>
              <span className="dispatch-stat-label">jeep roof</span>
            </div>
          </div>
          <Link href="/work/adventures" className="btn-ghost dark" style={{ alignSelf: 'flex-start' }}>
            Read the dispatch →
          </Link>
        </div>
      </div>
    </>
  );
}
