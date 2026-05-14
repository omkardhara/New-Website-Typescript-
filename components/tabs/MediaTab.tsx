'use client';
import { useState } from 'react';
import Image from 'next/image';
import { VIDEOS } from '@/data/videos';

export function MediaTab() {
  const [activeYt, setActiveYt] = useState<string | null>(null);

  return (
    <>
      <div className="panel-head">
        <div className="panel-head-left">
          <div className="panel-dispatch">Footage Reel · TV · Performance · Vlogs</div>
          <h2>
            Some things only make sense
            <br />
            <em>when they&apos;re moving.</em>
          </h2>
        </div>
        <div className="panel-meta">
          <strong>{VIDEOS.length}</strong>
          Films loaded
        </div>
      </div>

      <div className="media-grid">
        {VIDEOS.map((v, i) => (
          <div
            key={v.yt}
            className="video-card"
            onClick={() => setActiveYt(v.yt)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setActiveYt(v.yt);
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

      {activeYt && (
        <div
          onClick={() => setActiveYt(null)}
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
            style={{ width: '100%', maxWidth: '900px', aspectRatio: '16/9', position: 'relative' }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${activeYt}?autoplay=1&rel=0`}
              title="Video"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
              style={{ width: '100%', height: '100%', border: 'none' }}
            />
            <button
              onClick={() => setActiveYt(null)}
              style={{
                position: 'absolute',
                top: '-44px',
                right: 0,
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
    </>
  );
}
