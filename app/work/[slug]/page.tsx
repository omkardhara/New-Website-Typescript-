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

type Block =
  | { kind: 'text'; value: string; first: boolean }
  | { kind: 'image'; src: string; idx: number; caption?: string };

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const item = getWorkBySlug(params.slug);
  if (!item) notFound();

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
        {blocks.map((block, i) => {
          if (block.kind === 'text') {
            return (
              <p
                key={`t-${i}`}
                style={{
                  fontSize: block.first ? '17px' : '15.5px',
                  fontWeight: block.first ? 400 : 300,
                  lineHeight: 1.85,
                  color: block.first ? 'var(--text-dark)' : 'var(--text-dark-2)',
                  maxWidth: '720px',
                  margin: '0 auto',
                  marginTop: i === 0 ? '0' : 'clamp(28px,4vw,44px)',
                  padding: '0 clamp(20px,5vw,32px)',
                }}
              >
                {block.value}
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
