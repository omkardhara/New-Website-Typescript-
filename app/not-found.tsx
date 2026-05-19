import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: false },
};

const QUICK_LINKS = [
  { href: '/#tab-work',    label: 'Work'    },
  { href: '/writing/essays', label: 'Writing' },
  { href: '/about',        label: 'About'   },
  { href: '/contact',      label: 'Contact' },
];

export default function NotFound() {
  return (
    <main
      style={{
        background: 'var(--bg-cream)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: 'var(--ember)',
            marginBottom: '20px',
          }}
        >
          Off-map · Error 404
        </div>
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(48px,8vw,96px)',
            fontWeight: 300,
            lineHeight: 1.0,
            marginBottom: '24px',
          }}
        >
          Nothing here.
        </h1>
        <p
          style={{
            color: 'var(--text-dark-3)',
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            letterSpacing: '0.04em',
            marginBottom: '48px',
            maxWidth: '360px',
          }}
        >
          The page you&apos;re looking for doesn&apos;t exist — yet.
        </p>

        <nav aria-label="Quick links" style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
          {QUICK_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--text-dark)',
                textDecoration: 'none',
                padding: '10px 20px',
                border: '1px solid var(--line-dark)',
                background: 'var(--surface)',
                transition: 'all 0.2s',
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link href="/" className="btn-ghost dark">
          ← Back to home
        </Link>
      </div>
    </main>
  );
}
