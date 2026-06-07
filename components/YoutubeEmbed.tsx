'use client';
import { useState } from 'react';

type Props = {
  videoId: string;
  title: string;
  start?: number;
};

export function YoutubeEmbed({ videoId, title, start }: Props) {
  const [active, setActive] = useState(false);

  const src = `https://www.youtube.com/embed/${videoId}?autoplay=1${start ? `&start=${start}` : ''}&rel=0`;
  // hqdefault is guaranteed to exist for every public video; maxresdefault is not
  const thumb = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div
      style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', cursor: 'pointer', background: '#000' }}
      onClick={() => setActive(true)}
    >
      {active ? (
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
        />
      ) : (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumb}
            alt={title}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{
              width: 68, height: 68, borderRadius: '50%',
              background: 'rgba(0,0,0,0.72)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.2s',
            }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
