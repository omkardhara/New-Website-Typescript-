import type { Metadata } from 'next';
import { SOCIALS } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Omkar Dhareshwar — performances, workshops, brand collaborations.',
};

export default function ContactPage() {
  return (
    <main style={{ background: 'var(--bg-dark)', color: 'var(--text-light)', minHeight: '100vh' }}>
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '160px clamp(20px,5vw,64px) 80px',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'var(--gold-light)',
            marginBottom: '24px',
          }}
        >
          Work With Me
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(48px,7vw,96px)',
            fontWeight: 300,
            lineHeight: 1.0,
            letterSpacing: '-0.02em',
            marginBottom: '32px',
          }}
        >
          Got something worth
          <br />
          <em style={{ color: 'var(--gold-light)' }}>building together?</em>
        </h1>

        <p
          style={{
            fontSize: '17px',
            lineHeight: 1.75,
            color: 'var(--text-light-2)',
            maxWidth: '600px',
            marginBottom: '40px',
          }}
        >
          Brands, agencies, curators, festival programmers — if you&apos;ve made it this far, you
          probably already know what you want. The easiest path is email. WhatsApp works too. A
          contact form is on the way if you&apos;d prefer one.
        </p>

        <div
          className="hero-aside"
          style={{ opacity: 1, animation: 'none', maxWidth: '500px', marginBottom: '64px' }}
        >
          <span className="hero-aside-tag">MW3B ▸</span>No deck required. An honest brief is worth
          more. I read every message personally — usually respond within 48 hours.
        </div>

        <div style={{ display: 'grid', gap: '40px', maxWidth: '600px' }}>
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--text-light-3)',
                marginBottom: '14px',
              }}
            >
              Email
            </div>
            <a
              href="mailto:omkar.dhara@gmail.com"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(22px,3vw,32px)',
                color: 'var(--gold-light)',
                textDecoration: 'none',
                wordBreak: 'break-all',
              }}
            >
              omkar.dhara@gmail.com
            </a>
          </div>

          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--text-light-3)',
                marginBottom: '14px',
              }}
            >
              WhatsApp
            </div>
            <a
              href="https://wa.me/919920499089"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(22px,3vw,32px)',
                color: 'var(--gold-light)',
                textDecoration: 'none',
              }}
            >
              Message on WhatsApp →
            </a>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--text-light-3)',
                marginTop: '8px',
              }}
            >
              Replace the placeholder number in app/contact/page.tsx with your real WhatsApp.
            </div>
          </div>

          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--text-light-3)',
                marginBottom: '14px',
              }}
            >
              Find me here
            </div>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
