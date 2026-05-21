import type { Metadata } from 'next';
import Link from 'next/link';
import { SOCIALS } from '@/data/site';

const SITE_URL = 'https://www.omkardhareshwar.com';

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Omkar Dhareshwar',
  url: `${SITE_URL}/contact`,
  description: 'Get in touch with Omkar Dhareshwar for performances, workshops, or brand collaborations.',
  mainEntity: {
    '@type': 'Person',
    name: 'Omkar Dhareshwar',
    email: 'mailto:omkar.dhara@gmail.com',
    url: SITE_URL,
  },
};

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Omkar Dhareshwar — performances, workshops, brand collaborations.',
  alternates: { canonical: 'https://www.omkardhareshwar.com/contact' },
  openGraph: {
    type: 'website',
    title: 'Contact · Omkar Dhareshwar',
    description: 'Brands, agencies, curators — reach out for performances, workshops, or brand collaborations.',
    url: 'https://www.omkardhareshwar.com/contact',
    images: [{ url: '/og-2025.jpg', alt: 'Omkar Dhareshwar — Flow Artist, Performer & Storyteller' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact · Omkar Dhareshwar',
    description: 'Brands, agencies, curators — reach out for performances, workshops, or brand collaborations.',
    images: [{ url: '/og-2025.jpg', alt: 'Omkar Dhareshwar — Flow Artist, Performer & Storyteller' }],
  },
};

export default function ContactPage() {
  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
    />
    <main style={{ background: 'var(--bg-dark)', color: 'var(--text-light)', minHeight: '100vh' }}>
      {/* Back link — sits just below the fixed nav */}
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '90px clamp(20px,5vw,64px) 0',
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
            color: 'var(--text-light-2)',
            textDecoration: 'none',
            padding: '10px 18px',
            border: '1px solid rgba(248,246,241,0.2)',
            transition: 'all 0.25s',
          }}
          className="back-btn"
        >
          <span style={{ fontSize: '14px' }}>←</span> Back to home
        </Link>
      </div>

      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '56px clamp(20px,5vw,64px) 80px',
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

        <address style={{ fontStyle: 'normal', display: 'grid', gap: '40px', maxWidth: '600px' }}>
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
        </address>
      </div>
    </main>
    </>
  );
}
