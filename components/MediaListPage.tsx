'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { VIDEOS } from '@/data/videos';
import type { Video } from '@/data/types';

export function MediaListPage() {
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  return (
    <div style={{ background: 'var(--bg-cream)', minHeight: '100vh' }}>
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 40,
          background: 'rgba(248,246,241,0.95)',
          backdropFilter: 'blur(20px) saturate(1.4)',
          borderBottom: '1px solid var(--line-faint)',
          padding: '74px clamp(20px,5vw,64px) 14px',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Link
            href="/#tab-media"
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
            <span style={{ fontSize: '14px' }}>←</span> Back to main page
          </Link>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--text-dark-3)',
            }}
          >
            {VIDEOS.length} Videos
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '48px clamp(20px,5vw,64px) clamp(48px,6vw,80px)',
        }}
      >
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(36px,5vw,64px)',
            fontWeight: 400,
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
            color: 'var(--text-dark)',
            marginBottom: '48px',
          }}
        >
          All Videos
        </h1>

        <div className="media-list-grid">
          {VIDEOS.map((v, i) => (
            <div
              key={v.yt}
              className="video-card"
              onClick={() => setActiveVideo(v)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setActiveVideo(v);
              }}
            >
              <div className="video-thumb">
                <Image
                  src={v.thumb}
                  alt={v.title}
                  fill
                  sizes="(max-width: 720px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  unoptimized
                />
                <span className="play-icon" />
                <span className="video-num">
                  {String(i + 1).padStart(2, '0')} / {String(VIDEOS.length).padStart(2, '0')}
                </span>
              </div>
              <h4 className="video-title">{v.title}</h4>
              <p className="video-sub">{v.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {activeVideo && (
        <div
          onClick={() => setActiveVideo(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(10,10,8,0.92)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(8px)',
            padding: '20px',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: activeVideo.portrait ? '380px' : '900px',
              aspectRatio: activeVideo.portrait ? '9/16' : '16/9',
              position: 'relative',
            }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo.yt}?autoplay=1&rel=0`}
              title={activeVideo.title}
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
              style={{ width: '100%', height: '100%', border: 'none' }}
            />
            <button
              onClick={() => setActiveVideo(null)}
              style={{
                position: 'fixed',
                top: '16px',
                right: '20px',
                zIndex: 1001,
                background: 'none',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'rgba(255,255,255,0.7)',
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                padding: '8px 16px',
                cursor: 'pointer',
              }}
            >
              Close ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
