import Image from 'next/image';
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
          <Image
            src="/images/adventures/rickshaw-run-finish.jpg"
            alt="Rickshaw Run finish line, Kochi"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <span className="dispatch-img-route">Gangtok → Kochi · 3,000 km</span>
        </div>
        <div className="dispatch-text">
          <div className="dispatch-eyebrow">The Rickshaw Run · September 2023</div>
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
          <Image
            src="/images/adventures/panchachuli-peaks.jpg"
            alt="Panchachuli peaks, Uttarakhand"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <span className="dispatch-img-route">Kathgodam → Panchachuli · March 2023</span>
        </div>
        <div className="dispatch-text">
          <div className="dispatch-eyebrow">Uttarakhand · March 2023</div>
          <h3 className="dispatch-title">
            Pindari to Panchachuli.
            <br />
            <em>Juggled with snowballs.</em>
          </h3>
          <p className="dispatch-desc">
            Train to Kathgodam. Car to Khati. Trek to Pindari. Jeep roof to Dugtu.
            Trek to Panchachuli. Juggled everything I could find — balls, rocks, snowballs, acorns.
            Kids at every stop along the way.
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
