import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { WORK, getWorkBySlug } from '@/data/work';
import { ReadingProgress } from '@/components/ReadingProgress';

export function generateStaticParams() {
  return WORK.filter((w) => !w.url).map((w) => ({ slug: w.slug }));
}

const SITE_URL = 'https://www.omkardhareshwar.com';

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = getWorkBySlug(params.slug);
  if (!item) return { title: 'Project not found' };
  return {
    title: item.title,
    description: item.desc,
    alternates: { canonical: `${SITE_URL}/work/${item.slug}` },
    openGraph: {
      type: 'article',
      title: item.title,
      description: item.desc,
      url: `${SITE_URL}/work/${item.slug}`,
      images: item.image ? [`${SITE_URL}${item.image}`] : [`${SITE_URL}/og-image.jpg`],
    },
    twitter: {
      card: 'summary_large_image',
      title: item.title,
      description: item.desc,
      images: item.image ? [`${SITE_URL}${item.image}`] : [`${SITE_URL}/og-image.jpg`],
    },
  };
}

function buildWorkSchema(item: ReturnType<typeof getWorkBySlug>) {
  if (!item) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: item.title,
    description: item.desc,
    url: `${SITE_URL}/work/${item.slug}`,
    creator: { '@type': 'Person', name: 'Omkar Dhareshwar', url: SITE_URL },
    ...(item.image ? { image: `${SITE_URL}${item.image}` } : {}),
  };
}

function renderWithLinks(text: string) {
  // Split on markdown links [text](url) and **bold**
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const isExternal = link[2].startsWith('http');
      return (
        <a
          key={i}
          href={link[2]}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          style={{ color: 'var(--gold)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
        >
          {link[1]}
        </a>
      );
    }
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
}

type Block =
  | { kind: 'text'; value: string; first: boolean }
  | { kind: 'image'; src: string; idx: number; caption?: string };

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const item = getWorkBySlug(params.slug);
  if (!item) notFound();
  const schema = buildWorkSchema(item);

  const paragraphs = item.article
    ? item.article.split('\n\n').map((p) => p.trim()).filter(Boolean)
    : [];
  const images = item.images || [];

  const blocks: Block[] = [];
  const len = Math.max(paragraphs.length, images.length);
  for (let i = 0; i < len; i++) {
    if (paragraphs[i]) blocks.push({ kind: 'text', value: paragraphs[i], first: i === 0 });
    if (images[i])
      blocks.push({
        kind: 'image',
        src: images[i],
        idx: i,
        caption: item.captions?.[i],
      });
  }

  return (
    <article style={{ background: 'var(--bg-cream)', minHeight: '100vh' }}>
      <ReadingProgress />
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      {/* #10: prominent sticky back button */}
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
            href="/#tab-work"
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
            <span style={{ fontSize: '14px' }}>←</span> Back to all work
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
            paddingBottom: '32px',
            borderBottom: '1px solid var(--line-faint)',
          }}
        >
          {item.stat}
        </div>
      </div>

      <div style={{ paddingBottom: 'clamp(48px,6vw,80px)' }}>
        {item.yt && (
          <figure style={{ margin: 'clamp(40px,5vw,60px) auto', maxWidth: '960px', padding: '0' }}>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', background: '#000' }}>
              <iframe
                src={`https://www.youtube.com/embed/${item.yt}`}
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
              />
            </div>
          </figure>
        )}
        {blocks.map((block, i) => {
          if (block.kind === 'text') {
            const isHeading = block.value.startsWith('## ') || block.value.startsWith('# ');
            if (isHeading) {
              const text = block.value.replace(/^#+\s/, '');
              return (
                <h2
                  key={`t-${i}`}
                  className="article-h2"
                  style={{ maxWidth: '720px', margin: '0 auto', padding: '0 clamp(20px,5vw,32px)' }}
                >
                  {text}
                </h2>
              );
            }
            return (
              <p
                key={`t-${i}`}
                style={{
                  fontSize: '17px',
                  fontWeight: 400,
                  lineHeight: 1.85,
                  color: 'var(--text-dark)',
                  maxWidth: '720px',
                  margin: '0 auto',
                  marginTop: i === 0 ? '0' : 'clamp(28px,4vw,44px)',
                  padding: '0 clamp(20px,5vw,32px)',
                }}
              >
                {renderWithLinks(block.value)}
              </p>
            );
          }
          const isInset = block.idx % 2 === 1;
          return (
            <figure
              key={`i-${i}`}
              style={{
                margin: 'clamp(40px,5vw,60px) auto',
                maxWidth: isInset ? '720px' : '960px',
                padding: isInset ? '0 clamp(20px,5vw,32px)' : '0',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '4/3',
                  background: 'var(--surface-3)',
                  border: '1px solid var(--line-faint)',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={block.src}
                  alt={block.caption || `${item.title} — image ${block.idx + 1}`}
                  fill
                  sizes="(max-width: 960px) 100vw, 960px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <figcaption
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px 14px',
                  borderTop: '1px solid var(--line-faint)',
                  background: 'var(--surface)',
                  borderLeft: '1px solid var(--line-faint)',
                  borderRight: '1px solid var(--line-faint)',
                  borderBottom: '1px solid var(--line-faint)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--text-dark-4)',
                    letterSpacing: '0.18em',
                  }}
                >
                  {String(block.idx + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
                </span>
                {block.caption && (
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      fontStyle: 'italic',
                      color: 'var(--text-dark-3)',
                      letterSpacing: '0.04em',
                      textAlign: 'right',
                    }}
                  >
                    {block.caption}
                  </span>
                )}
              </figcaption>
            </figure>
          );
        })}
      </div>

      {/* Closing back button at end of article */}
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
          href="/#tab-work"
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
          <span style={{ fontSize: '14px' }}>←</span> Browse more work
        </Link>
      </div>
    </article>
  );
}
