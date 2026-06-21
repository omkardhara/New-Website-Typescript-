import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { WORK, getWorkBySlug } from '@/data/work';
import { ShareButton } from '@/components/ShareButton';
import { ReadingProgress } from '@/components/ReadingProgress';
import { YoutubeEmbed } from '@/components/YoutubeEmbed';

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
      images: [{ url: item.image ? `${SITE_URL}${item.image}` : `${SITE_URL}/og-2025.jpg`, alt: item.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: item.title,
      description: item.desc,
      images: [{ url: item.image ? `${SITE_URL}${item.image}` : `${SITE_URL}/og-2025.jpg`, alt: item.title }],
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

function buildBreadcrumb(item: ReturnType<typeof getWorkBySlug>) {
  if (!item) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Work', item: `${SITE_URL}/#tab-work` },
      { '@type': 'ListItem', position: 3, name: item.title },
    ],
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
  | { kind: 'image'; src: string; idx: number; caption?: string; position?: string }
  | { kind: 'video'; videoId: string };

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const item = getWorkBySlug(params.slug);
  if (!item) notFound();
  const schema = buildWorkSchema(item);
  const breadcrumb = buildBreadcrumb(item);

  const internalWork = WORK.filter((w) => !w.url && !w.hidden)
    .sort((a, b) => (a.image ? 0 : 1) - (b.image ? 0 : 1));
  const idx = internalWork.findIndex((w) => w.slug === item.slug);
  const prevWork = idx > 0 ? internalWork[idx - 1] : null;
  const nextWork = idx < internalWork.length - 1 ? internalWork[idx + 1] : null;

  const paragraphs = item.article
    ? item.article.split('\n\n').map((p) => p.trim()).filter(Boolean)
    : [];
  const images = item.images || [];

  const blocks: Block[] = [];
  let imgIdx = 0;
  for (let i = 0; i < paragraphs.length; i++) {
    const p = paragraphs[i];
    const ytMatch = p.match(/^\[yt:([A-Za-z0-9_-]+)\]$/);
    if (ytMatch) {
      blocks.push({ kind: 'video', videoId: ytMatch[1] });
      continue;
    }
    blocks.push({ kind: 'text', value: p, first: i === 0 });
    const isBoldHeading = p.startsWith('**') && p.endsWith('**');
    const isH2Heading = p.startsWith('## ') || p.startsWith('# ');
    if (!isBoldHeading && !isH2Heading && imgIdx < images.length) {
      blocks.push({ kind: 'image', src: images[imgIdx], idx: imgIdx, caption: item.captions?.[imgIdx], position: item.imagePositions?.[imgIdx] });
      imgIdx++;
    }
  }
  while (imgIdx < images.length) {
    blocks.push({ kind: 'image', src: images[imgIdx], idx: imgIdx, caption: item.captions?.[imgIdx], position: item.imagePositions?.[imgIdx] });
    imgIdx++;
  }

  return (
    <main style={{ display: 'contents' }}>
    <article style={{ background: 'var(--bg-cream)', minHeight: '100vh' }} aria-labelledby="project-title">
      <ReadingProgress />
      {schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      )}
      {breadcrumb && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
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
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
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
          <ShareButton title={item.title} text={item.desc} />
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
          id="project-title"
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
            <YoutubeEmbed videoId={item.yt} title={item.title} start={item.ytStart} />
            {item.ytCaption && (
              <figcaption
                style={{
                  padding: '8px 14px',
                  borderTop: '1px solid var(--line-faint)',
                  borderLeft: '1px solid var(--line-faint)',
                  borderRight: '1px solid var(--line-faint)',
                  borderBottom: '1px solid var(--line-faint)',
                  background: 'var(--surface)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  fontStyle: 'italic',
                  color: 'var(--text-dark-3)',
                  letterSpacing: '0.08em',
                }}
              >
                {item.ytCaption}
              </figcaption>
            )}
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
          if (block.kind === 'video') {
            return (
              <figure key={`v-${i}`} style={{ margin: 'clamp(40px,5vw,60px) auto', maxWidth: '960px', padding: '0' }}>
                <YoutubeEmbed videoId={block.videoId} title={item.title} />
              </figure>
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
                  style={{ objectFit: 'cover', objectPosition: block.position || 'center' }}
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
      {(prevWork || nextWork) && (
        <nav aria-label="Project navigation" className="article-nav">
          {prevWork ? (
            <Link href={`/work/${prevWork.slug}`} className="article-nav-item">
              <span className="article-nav-dir">← Previous</span>
              <span className="article-nav-title">{prevWork.title}</span>
            </Link>
          ) : <div />}
          {nextWork ? (
            <Link href={`/work/${nextWork.slug}`} className="article-nav-item next">
              <span className="article-nav-dir">Next →</span>
              <span className="article-nav-title">{nextWork.title}</span>
            </Link>
          ) : <div />}
        </nav>
      )}
    </article>
    </main>
  );
}
