import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PRESS, getPressItemBySlug } from '@/data/site';

const SITE_URL = 'https://www.omkardhareshwar.com';

export function generateStaticParams() {
  return PRESS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = getPressItemBySlug(params.slug);
  if (!item) return { title: 'Not found' };
  const desc = `${item.publication} feature on Omkar Dhareshwar: "${item.title}" (${item.year})`;
  return {
    title: `${item.publication} — ${item.title}`,
    description: desc,
    alternates: { canonical: `${SITE_URL}/press/${item.slug}` },
    openGraph: {
      type: 'article',
      title: `${item.publication} — ${item.title}`,
      description: desc,
      url: `${SITE_URL}/press/${item.slug}`,
      images: [{ url: item.src.startsWith('http') ? item.src : `${SITE_URL}${item.src}`, alt: item.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${item.publication} — ${item.title}`,
      description: desc,
      images: [{ url: item.src.startsWith('http') ? item.src : `${SITE_URL}${item.src}`, alt: item.title }],
    },
  };
}

function buildPressSchema(item: ReturnType<typeof getPressItemBySlug>) {
  if (!item) return null;
  return {
    '@context': 'https://schema.org',
    '@type': item.publication === 'World Atlas of Street Art' ? 'Book' : 'NewsArticle',
    headline: item.title,
    datePublished: item.year,
    publisher: { '@type': 'Organization', name: item.publication },
    about: { '@type': 'Person', name: 'Omkar Dhareshwar', url: SITE_URL },
    image: item.src.startsWith('http') ? item.src : `${SITE_URL}${item.src}`,
    ...(item.url ? { url: item.url } : {}),
  };
}

export default function PressArticlePage({ params }: { params: { slug: string } }) {
  const item = getPressItemBySlug(params.slug);
  if (!item) notFound();

  const allImages = [item.src, ...(item.images ?? [])];
  const schema = buildPressSchema(item);

  return (
    <main style={{ display: 'contents' }}>
    <article style={{ background: 'var(--bg-cream)', minHeight: '100vh' }} aria-labelledby="press-title">
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 40,
          background: 'rgba(248,246,241,0.95)',
          backdropFilter: 'blur(20px) saturate(1.4)',
          borderBottom: '1px solid var(--line-faint)',
          padding: '74px clamp(20px,5vw,32px) 14px',
        }}
      >
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <Link
            href="/press"
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
            <span style={{ fontSize: '14px' }}>←</span> Back to Press
          </Link>
        </div>
      </div>

      <div
        style={{
          maxWidth: '780px',
          margin: '0 auto',
          padding: '32px clamp(20px,5vw,32px) 0',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '20px',
          }}
        >
          {item.publication}
        </div>

        <h1
          id="press-title"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(28px,4.5vw,52px)',
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '20px',
            color: 'var(--text-dark)',
          }}
        >
          {item.title}
        </h1>

        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            letterSpacing: '0.18em',
            color: 'var(--text-dark-3)',
            paddingBottom: '32px',
            borderBottom: '1px solid var(--line-faint)',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          <span>{item.year}</span>
          {allImages.length > 1 && <span>{allImages.length} pages</span>}
          {item.url && (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                textDecoration: 'none',
                borderBottom: '1px solid var(--gold)',
                paddingBottom: '1px',
              }}
            >
              Read original article →
            </a>
          )}
        </div>
      </div>

      <div
        style={{
          maxWidth: '960px',
          margin: '0 auto',
          padding: '0 clamp(20px,5vw,32px)',
          paddingBottom: 'clamp(48px,6vw,80px)',
        }}
      >
        {allImages.map((src, i) => (
          <figure
            key={i}
            style={{
              margin: i === 0 ? '40px 0 0' : 'clamp(4px,1vw,8px) 0 0',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={i === 0 ? item.title : `${item.title} — page ${i + 1}`}
              loading={i === 0 ? undefined : 'lazy'}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            {allImages.length > 1 && (
              <figcaption
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  letterSpacing: '0.16em',
                  color: 'var(--text-dark-4)',
                  padding: '8px 0 0',
                  textAlign: 'right',
                }}
              >
                {i + 1} / {allImages.length}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      <div
        style={{
          maxWidth: '780px',
          margin: '0 auto',
          padding: '24px clamp(20px,5vw,32px) 80px',
          borderTop: '1px solid var(--line-faint)',
          textAlign: 'center',
        }}
      >
        <Link
          href="/press"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--bg-cream)',
            background: 'var(--gold)',
            padding: '14px 28px',
            textDecoration: 'none',
            transition: 'all 0.25s',
            marginTop: '32px',
          }}
        >
          <span style={{ fontSize: '14px' }}>←</span> More Press
        </Link>
      </div>
    </article>
    </main>
  );
}
