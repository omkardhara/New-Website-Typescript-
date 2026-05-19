import type { Metadata } from 'next';
import type React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { NOTES, getNoteBySlug } from '@/data/site';
import { ReadingProgress } from '@/components/ReadingProgress';

export function generateStaticParams() {
  return NOTES.filter((n) => !n.url).map((n) => ({ slug: n.slug }));
}

const SITE_URL = 'https://www.omkardhareshwar.com';

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const note = getNoteBySlug(params.slug);
  if (!note) return { title: 'Not found' };
  return {
    title: note.title,
    description: note.excerpt,
    alternates: { canonical: `${SITE_URL}/writing/${note.slug}` },
    openGraph: {
      type: 'article',
      title: note.title,
      description: note.excerpt,
      url: `${SITE_URL}/writing/${note.slug}`,
      images: [{ url: note.image ? `${SITE_URL}${note.image}` : `${SITE_URL}/og-image.jpg`, alt: note.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: note.title,
      description: note.excerpt,
      images: [{ url: note.image ? `${SITE_URL}${note.image}` : `${SITE_URL}/og-image.jpg`, alt: note.title }],
    },
  };
}

function buildBreadcrumb(note: ReturnType<typeof getNoteBySlug>) {
  if (!note) return null;
  const isPoem = note.type === 'poem';
  const sectionLabel = isPoem ? 'Poems' : 'Essays';
  const sectionHref = isPoem ? `${SITE_URL}/writing/poems` : `${SITE_URL}/writing/essays`;
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Writing', item: `${SITE_URL}/writing/essays` },
      { '@type': 'ListItem', position: 3, name: sectionLabel, item: sectionHref },
      { '@type': 'ListItem', position: 4, name: note.title },
    ],
  };
}

function buildArticleSchema(note: ReturnType<typeof getNoteBySlug>) {
  if (!note) return null;
  return {
    '@context': 'https://schema.org',
    '@type': note.type === 'poem' ? 'CreativeWork' : 'Article',
    headline: note.title,
    description: note.excerpt,
    url: `${SITE_URL}/writing/${note.slug}`,
    datePublished: note.date,
    author: { '@type': 'Person', name: 'Omkar Dhareshwar', url: SITE_URL },
    publisher: { '@type': 'Person', name: 'Omkar Dhareshwar', url: SITE_URL },
    ...(note.image ? { image: `${SITE_URL}${note.image}` } : {}),
    ...(note.publication ? { isPartOf: { '@type': 'Periodical', name: note.publication } } : {}),
  };
}

// Inline renderer for bold/italic within a paragraph
function renderInline(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    return part;
  });
}

function getSectionNotes(type: string) {
  const internal = NOTES.filter((n) => !n.url);
  if (type === 'poem') return internal.filter((n) => n.type === 'poem');
  return internal.filter(
    (n) => (n.type === 'article' || n.type === 'short-story') && n.publication !== 'Red Bull'
  );
}

export default function WritingPage({ params }: { params: { slug: string } }) {
  const note = getNoteBySlug(params.slug);
  if (!note) notFound();

  const isPoem = note.type === 'poem';
  const backHref = note.type === 'poem' ? '/writing/poems' : '/writing/essays';
  const backLabel = note.type === 'poem' ? 'Poems' : 'Essays';
  const blocks = note.content
    ? note.content.split('\n\n').map((b) => b.trim()).filter(Boolean)
    : [];

  // Next/prev navigation within same section
  const sectionNotes = getSectionNotes(note.type);
  const idx = sectionNotes.findIndex((n) => n.slug === note.slug);
  const prevNote = idx > 0 ? sectionNotes[idx - 1] : null;
  const nextNote = idx < sectionNotes.length - 1 ? sectionNotes[idx + 1] : null;

  const schema = buildArticleSchema(note);
  const breadcrumb = buildBreadcrumb(note);

  return (
    <main style={{ display: 'contents' }}>
    <article style={{ background: 'var(--bg-cream)', minHeight: '100vh' }} aria-labelledby="article-title">
      <ReadingProgress />
      {schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      )}
      {breadcrumb && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
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
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <Link
            href={backHref}
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
            <span style={{ fontSize: '14px' }}>←</span> Back to {backLabel}
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
            }}
          >
            {note.tag}
          </div>
          {note.aiAssisted && (
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--ember-light)',
                border: '1px solid var(--ember-light)',
                padding: '3px 10px',
                opacity: 0.8,
              }}
            >
              AI assisted
            </div>
          )}
        </div>

        <h1
          id="article-title"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(30px,5vw,54px)',
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '20px',
            color: 'var(--text-dark)',
          }}
        >
          {note.title}
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
          <time dateTime={note.date}>{note.date}</time> · {note.read} read
        </div>
      </div>

      {note.image && (
        <div
          style={{
            maxWidth: '960px',
            margin: '40px auto',
            padding: '0',
            position: 'relative',
            aspectRatio: '16/9',
          }}
        >
          <Image
            src={note.image}
            alt={note.title}
            fill
            sizes="(max-width: 960px) 100vw, 960px"
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      )}

      <div
        style={{
          maxWidth: isPoem ? '560px' : '780px',
          margin: '0 auto',
          padding: '0 clamp(20px,5vw,32px)',
          paddingBottom: 'clamp(48px,6vw,80px)',
        }}
      >
        {blocks.length === 0 ? (
          <p
            style={{
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: 1.85,
              color: 'var(--text-dark)',
              marginTop: 'clamp(28px,4vw,44px)',
              fontStyle: 'italic',
            }}
          >
            {note.excerpt}
          </p>
        ) : isPoem ? (
          // Poem: render each stanza as a block, lines within stanza separated by <br>
          <div
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(17px,2vw,20px)',
              fontWeight: 400,
              lineHeight: 1.9,
              color: 'var(--text-dark)',
              marginTop: 'clamp(40px,5vw,64px)',
            }}
          >
            {blocks.map((stanza, i) => (
              <p key={i} style={{ marginBottom: 'clamp(24px,3vw,36px)' }}>
                {stanza.split('\n').map((line, j, arr) => (
                  <span key={j}>
                    {line}
                    {j < arr.length - 1 && <br />}
                  </span>
                ))}
              </p>
            ))}
          </div>
        ) : (
          // Article: paragraphs + optional ## headings and **bold**
          blocks.map((para, i) => {
            if (para.startsWith('## ') || para.startsWith('# ')) {
              const text = para.replace(/^#+\s/, '');
              return <h2 key={i} className="article-h2">{text}</h2>;
            }
            return (
              <p
                key={i}
                style={{
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: 1.85,
                  color: 'var(--text-dark)',
                  marginTop: 'clamp(28px,4vw,44px)',
                }}
              >
                {renderInline(para)}
              </p>
            );
          })
        )}
      </div>

      <div
        style={{
          maxWidth: '780px',
          margin: '0 auto',
          padding: '24px clamp(20px,5vw,32px) 48px',
          borderTop: '1px solid var(--line-faint)',
          textAlign: 'center',
        }}
      >
        <Link
          href={backHref}
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
          <span style={{ fontSize: '14px' }}>←</span> More {backLabel}
        </Link>
      </div>

      {(prevNote || nextNote) && (
        <nav aria-label="Article navigation" className="article-nav">
          {prevNote ? (
            <Link href={`/writing/${prevNote.slug}`} className="article-nav-item">
              <span className="article-nav-dir">← Previous</span>
              <span className="article-nav-title">{prevNote.title}</span>
            </Link>
          ) : <div />}
          {nextNote ? (
            <Link href={`/writing/${nextNote.slug}`} className="article-nav-item next">
              <span className="article-nav-dir">Next →</span>
              <span className="article-nav-title">{nextNote.title}</span>
            </Link>
          ) : <div />}
        </nav>
      )}
    </article>
    </main>
  );
}
