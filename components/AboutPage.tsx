import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { PRESS } from '@/data/site';

const extLink = (href: string) => ({ target: '_blank' as const, rel: 'noopener noreferrer', href });
const linkStyle = { color: 'inherit', textDecoration: 'underline', textUnderlineOffset: '2px' };

const OFFERS: { num: string; title: string; desc: ReactNode }[] = [
  {
    num: '01',
    title: 'Performances',
    desc: 'Fire, flow, and object manipulation — for festivals, brand activations, corporate events, and cultural programmes. I build acts that make audiences remember why they came.',
  },
  {
    num: '02',
    title: 'Workshops',
    desc: 'Flow workshops for teams, schools, and communities. Less circus trick, more embodied intelligence — the kind of focus and presence that translates beyond the juggling.',
  },
  {
    num: '03',
    title: 'Brand Storytelling',
    desc: <>Writing, direction, and on-screen work for brands that want cultural credibility. I&apos;ve written for <Link href="/writing/redbull" style={linkStyle}>Red Bull</Link>, appeared for <a {...extLink('https://www.youtube.com/watch?v=jyzFUHqmjsQ')} style={linkStyle}>Britannia</a>, and collaborated with <Link href="/press/natgeo-marol" style={linkStyle}>Nat Geo</Link> — I know how to make a brand feel human.</>,
  },
];

const FEATURED_PRESS = PRESS.filter((p) => p.featured).slice(0, 4);

export function AboutPage() {
  return (
    <main style={{ background: 'var(--bg-cream)', minHeight: '100vh' }}>

      {/* ── Top bar ── */}
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
            href="/"
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
            <span style={{ fontSize: '14px' }}>←</span> Back to home
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
            About
          </div>
        </div>
      </div>

      {/* ── Intro ── */}
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '64px clamp(20px,5vw,64px) 0',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '24px',
          }}
        >
          ManWith3Balls · Flow Artist · Storyteller
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(40px,6vw,80px)',
            fontWeight: 400,
            letterSpacing: '-0.025em',
            lineHeight: 1.0,
            color: 'var(--text-dark)',
            marginBottom: '32px',
            maxWidth: '900px',
          }}
        >
          Mechanical engineer by degree.
          <br />
          <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Everything else by choice.</em>
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(16px,1.4vw,18px)',
            lineHeight: 1.75,
            color: 'var(--text-dark-2)',
            maxWidth: '620px',
            borderLeft: '2px solid var(--ember)',
            paddingLeft: '20px',
            marginBottom: '80px',
          }}
        >
          I perform, teach, write, and direct. The thread connecting all of it: putting bodies in
          space in ways people can&apos;t quite look away from.
        </p>
      </div>

      {/* ── Portrait + Bio ── */}
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 clamp(20px,5vw,64px) 80px',
        }}
        className="about-bio-grid"
      >
        {/* Portrait column */}
        <div className="about-portrait-col">
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '420px',
              aspectRatio: '4/5',
            }}
            className="about-portrait-frame"
          >
            <Image
              src="/images/portrait-river.jpg"
              alt="Omkar Dhareshwar juggling by a river"
              fill
              sizes="(max-width: 768px) 90vw, 420px"
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              priority
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '48px 20px 20px',
                background: 'linear-gradient(to top, rgba(15,15,13,0.75) 0%, transparent 100%)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '9px',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'rgba(248,246,241,0.6)',
                }}
              >
                Mumbai · India
              </div>
            </div>
          </div>

          <div className="about-quick-stats">
            {[
              { val: '10+', label: 'Years performing' },
              { val: '500+', label: 'Murals painted' },
              { val: '3,000', label: 'km by rickshaw' },
              { val: '12+', label: 'Press features' },
            ].map((s) => (
              <div key={s.label} className="about-stat">
                <span className="about-stat-val">{s.val}</span>
                <span className="about-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bio column */}
        <div className="about-bio-col">
          <p className="about-bio-p">
            I studied mechanical engineering. Then I picked up three balls.
          </p>

          <p className="about-bio-p">
            That was 2012. Since then: co-founded India&apos;s first graffiti company, drove a 2-stroke
            autorickshaw 3,600 km from Gangtok to Kochi, appeared on{' '}
            <a {...extLink('https://www.youtube.com/watch?v=5A9IgNfa7Wg')} style={linkStyle}>Doordarshan</a>,
            built a street art district in Mumbai that{' '}
            <Link href="/press/natgeo-marol" style={linkStyle}>National Geographic</Link>{' '}
            covered, managed ₹80 crore in live event sponsorships at BookMyShow, and appeared in a{' '}
            <a {...extLink('https://www.youtube.com/watch?v=jyzFUHqmjsQ')} style={linkStyle}>Britannia commercial</a>{' '}
            somewhere in between.
          </p>

          <p className="about-bio-p">
            Wicked Broz, which I started in 2014, ran campaigns for{' '}
            <Link href="/writing/redbull" style={linkStyle}>Red Bull</Link>,
            Puma, NBA, Absolut, and Harley Davidson. I spent four years advising Kokuyo Camlin
            on India&apos;s first graffiti spray can: pricing, packaging, palette, distribution, all of it.
            Three years straight of ₹1 crore revenue from a company that started with a paint can and a wall.
          </p>

          <p className="about-bio-p">
            In 2025 I joined BookMyShow Live. Three months in, I was running a team of nine and
            managing ₹80 crore in sponsorships across Lollapalooza India, Coldplay, Ed Sheeran,
            Guns N&apos; Roses, and Travis Scott. H&amp;M ranked number one in brand recall across all
            Lollapalooza 2026 sponsors. Liquid IV doubled their in-festival sales. The workflow
            systems I built were later mandated by Live Nation&apos;s global C3 team.
          </p>

          <p className="about-bio-p">
            I still juggle. Still perform. Run flow workshops. Write for{' '}
            <Link href="/writing/redbull" style={linkStyle}>Red Bull</Link>.
          </p>

          <div className="about-bio-actions">
            <Link href="/contact" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
              Work with me <span>→</span>
            </Link>
            <Link href="/story" className="btn-ghost dark">
              Read the full story
            </Link>
          </div>

          <div
            style={{
              marginTop: '32px',
              padding: '20px 24px',
              border: '1px solid var(--line-dark)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              flexWrap: 'wrap',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--text-dark-4)',
                  marginBottom: '6px',
                }}
              >
                Curious about the journey?
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '18px',
                  color: 'var(--text-dark)',
                  lineHeight: 1.3,
                }}
              >
                Ten years, six chapters — the full story is on the Story page.
              </div>
            </div>
            <Link
              href="/story"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                borderBottom: '1px solid var(--gold)',
                paddingBottom: '3px',
                flexShrink: 0,
              }}
            >
              Know the story →
            </Link>
          </div>
        </div>
      </div>

      {/* ── What I do ── */}
      <div style={{ background: 'var(--bg-dark)', color: 'var(--text-light)' }}>
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: 'clamp(56px,7vw,96px) clamp(20px,5vw,64px)',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              fontWeight: 400,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--gold-light)',
              marginBottom: '48px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            What I do
            <span style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, var(--gold), transparent)', maxWidth: '200px', display: 'block' }} />
          </h2>

          <div className="about-offers-grid">
            {OFFERS.map((o) => (
              <div key={o.num} className="about-offer-card">
                <div className="about-offer-num">{o.num}</div>
                <h3 className="about-offer-title">{o.title}</h3>
                <p className="about-offer-desc">{o.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '56px', textAlign: 'center' }}>
            <Link href="/contact" className="btn-primary">
              Get in touch →
            </Link>
          </div>
        </div>
      </div>

      {/* ── Featured press ── */}
      {FEATURED_PRESS.length > 0 && (
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: 'clamp(56px,7vw,80px) clamp(20px,5vw,64px)',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              fontWeight: 400,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--text-dark-3)',
              marginBottom: '40px',
            }}
          >
            As seen in
          </h2>

          <div className="about-press-row">
            {PRESS.slice(0, 6).map((p) => (
              <div key={p.id} className="about-press-item">
                <span>{p.publication}</span>
                <span className="about-press-year">{p.year}</span>
              </div>
            ))}
          </div>
        </div>
      )}

    </main>
  );
}
