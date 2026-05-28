'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { VIDEOS } from '@/data/videos';
import type { Video } from '@/data/types';

const PREVIEW_COUNT = 3;

export function MediaTab() {
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const preview = VIDEOS.slice(0, PREVIEW_COUNT);

  function openVideo(v: Video, trigger: HTMLElement) {
    triggerRef.current = trigger;
    setActiveVideo(v);
  }

  function closeVideo() {
    setActiveVideo(null);
    triggerRef.current?.focus();
    triggerRef.current = null;
  }

  useEffect(() => {
    if (!activeVideo) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeVideo(); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeVideo]);

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
        {preview.map((v, i) => (
          <button
            key={v.yt}
            type="button"
            className="video-card"
            onClick={(e) => openVideo(v, e.currentTarget)}
            aria-label={`Play: ${v.title}`}
          >
            <div className="video-thumb">
              <Image
                src={v.thumb}
                alt=""
                fill
                sizes="(max-width: 720px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                unoptimized
              />
              <span className="play-icon" aria-hidden="true" />
              <span className="video-num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')} / {String(VIDEOS.length).padStart(2, '0')}
              </span>
            </div>
            <h4 className="video-title">{v.title}</h4>
            <p className="video-sub">{v.sub}</p>
          </button>
        ))}
      </div>

      {VIDEOS.length > PREVIEW_COUNT && (
        <div className="writings-see-all">
          <Link href="/media" className="writings-see-all-btn">
            See all {VIDEOS.length} videos →
          </Link>
        </div>
      )}

      {activeVideo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Now playing: ${activeVideo.title}`}
          onClick={closeVideo}
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
              src={`https://www.youtube.com/embed/${activeVideo.yt}?autoplay=1&rel=0${activeVideo.startTime ? `&start=${activeVideo.startTime}` : ''}`}
              title={activeVideo.title}
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
              style={{ width: '100%', height: '100%', border: 'none' }}
            />
            <button
              onClick={closeVideo}
              aria-label="Close video"
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
