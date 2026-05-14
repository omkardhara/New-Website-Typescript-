import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { WORK, getWorkBySlug } from '@/data/work';

export function generateStaticParams() {
  return WORK.map((w) => ({ slug: w.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = getWorkBySlug(params.slug);
  if (!item) return { title: 'Project not found' };
  return {
    title: item.title,
    description: item.desc,
    openGraph: {
      title: item.title,
      description: item.desc,
      images: item.image ? [item.image] : undefined,
    },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const item = getWorkBySlug(params.slug);
  if (!item) notFound();

  const paragraphs = item.article
    ? item.article.split('\n\n').map((p) => p.trim()).filter(Boolean)
    : [];

  return (
    <article
      style={{
        background: 'var(--bg-cream)',
        paddingTop: '110px',
        minHeight: '100vh',
      }}
    >
      <div
        style={{
          maxWidth: '780px',
          margin: '0 auto',
          padding: 'clamp(40px,6vw,80px) clamp(20px,5vw,32px)',
        }}
      >
        <Link
          href="/#tab-work"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--text-dark-3)',
            textDecoration: 'none',
            marginBottom: '32px',
            display: 'inline-block',
          }}
        >
          ← Back to all work
        </Link>

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
          {item.tag}
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(34px,5.5vw,60px)',
            fontWeight: 400,
            lineHeight: 1.05,
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
            marginBottom: '36px',
            paddingBottom: '32px',
            borderBottom: '1px solid var(--line-faint)',
          }}
        >
          {item.stat}
        </div>

        {paragraphs.map((p, i) => (
          <p
            key={i}
            style={{
              fontSize: i === 0 ? '17px' : '15.5px',
              lineHeight: 1.85,
              color: i === 0 ? 'var(--text-dark)' : 'var(--text-dark-2)',
              marginBottom: '28px',
              fontWeight: i === 0 ? 400 : 300,
            }}
          >
            {p}
          </p>
        ))}

        {item.images && item.images.length > 0 && (
          <div style={{ marginTop: '48px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {item.images.map((src, i) => (
              <figure key={i}>
                <div
                  style={{
                    position: 'relative',
                    aspectRatio: '4/3',
                    background: 'var(--surface-3)',
                    border: '1px solid var(--line-faint)',
                  }}
                >
                  <Image
                    src={src}
                    alt={item.captions?.[i] || `${item.title} — image ${i + 1}`}
                    fill
                    sizes="(max-width: 780px) 100vw, 780px"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                {item.captions?.[i] && (
                  <figcaption
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      fontStyle: 'italic',
                      color: 'var(--text-dark-3)',
                      letterSpacing: '0.04em',
                      marginTop: '10px',
                    }}
                  >
                    {item.captions[i]}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
