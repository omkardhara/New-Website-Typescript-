import type { Metadata } from 'next';
import { CHAPTERS } from '@/data/site';

export const metadata: Metadata = {
  title: 'Story — A decade of building things that didn\'t exist before',
  description:
    'Ten years, six chapters. The career arc of Omkar Dhareshwar — from engineering to ManWith3Balls.',
};

export default function StoryPage() {
  return (
    <main style={{ background: 'var(--bg-cream)', paddingTop: '110px', minHeight: '100vh' }}>
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: 'clamp(40px,6vw,80px) clamp(20px,5vw,64px)',
        }}
      >
        <div className="panel-dispatch">Career Arc · 2014–Present</div>
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(48px,7vw,96px)',
            fontWeight: 300,
            lineHeight: 1.0,
            letterSpacing: '-0.02em',
            marginBottom: '40px',
            color: 'var(--text-dark)',
          }}
        >
          A decade of <em style={{ color: 'var(--gold)' }}>building things</em>
          <br />
          that didn&apos;t exist before.
        </h1>

        {/* Placeholder for the videogame-map Story. Real interactive map ships in next session. */}
        <div
          style={{
            border: '1px dashed var(--line-dark)',
            padding: '64px 32px',
            textAlign: 'center',
            margin: '60px 0',
            background: 'rgba(46,107,79,0.03)',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: 'var(--ember)',
              marginBottom: '14px',
            }}
          >
            Building the map · Coming next
          </div>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(20px,2.5vw,28px)',
              fontStyle: 'italic',
              color: 'var(--text-dark-2)',
              maxWidth: '560px',
              margin: '0 auto',
              lineHeight: 1.5,
            }}
          >
            The interactive videogame-style chapter map ships in the next session. For now,
            here&apos;s the chapter list as a placeholder.
          </p>
        </div>

        <div style={{ display: 'grid', gap: '4px' }}>
          {CHAPTERS.map((c) => (
            <div
              key={c.id}
              id={c.id}
              style={{
                display: 'grid',
                gridTemplateColumns: '60px 80px 1fr',
                gap: '24px',
                padding: '24px 0',
                borderTop: '1px solid var(--line-faint)',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: '24px',
                  color: 'var(--gold)',
                }}
              >
                {c.roman}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  letterSpacing: '0.18em',
                  color: 'var(--text-dark-3)',
                }}
              >
                {c.period}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '24px',
                    fontWeight: 500,
                    color: 'var(--text-dark)',
                    marginBottom: '4px',
                  }}
                >
                  {c.label}
                </div>
                <div style={{ fontSize: '14px', color: 'var(--text-dark-2)' }}>{c.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
