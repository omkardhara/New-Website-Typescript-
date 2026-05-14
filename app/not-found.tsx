import Link from 'next/link';

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
        <p style={{ color: 'var(--text-dark-2)', marginBottom: '32px' }}>
          The page you&apos;re looking for doesn&apos;t exist — yet.
        </p>
        <Link href="/" className="btn-ghost dark">
          Back to home →
        </Link>
      </div>
    </main>
  );
}
