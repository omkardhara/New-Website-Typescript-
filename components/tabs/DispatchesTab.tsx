export function DispatchesTab() {
  return (
    <>
      <div className="panel-head">
        <div className="panel-head-left">
          <div className="panel-dispatch">Field Reports · Off-Script</div>
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
          <svg className="dispatch-svg" viewBox="0 0 400 500" preserveAspectRatio="none">
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
          <a href="#" className="btn-ghost dark" style={{ alignSelf: 'flex-start' }}>
            Read the full dispatch →
          </a>
        </div>
      </div>
    </>
  );
}
