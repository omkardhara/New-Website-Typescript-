'use client';
import { useState, useRef, useEffect } from 'react';

type Logo =
  | { name: string; type: 'image'; src: string; h?: number }
  | { name: string; type: 'icon';  src: string };

const LOGOS: Logo[] = [
  { name: 'Red Bull',        type: 'icon',  src: '/images/logos/redbull.svg' },
  { name: 'National Geographic', type: 'image', src: '/images/logos/natgeo.png',         h: 36 },
  { name: 'Britannia',       type: 'image', src: '/images/logos/britannia.jpg',       h: 32 },
  { name: 'Universal Music', type: 'image', src: '/images/logos/universal-music.png', h: 38 },
  { name: 'Mumbai Metro',    type: 'image', src: '/images/logos/mumbai-metro.jpg',    h: 40 },
  { name: 'Museum of Goa',   type: 'image', src: '/images/logos/museum-of-goa.png',   h: 32 },
  { name: 'Phantom',         type: 'image', src: '/images/logos/phantom.jpg',         h: 44 },
  { name: 'Puma',            type: 'icon',  src: '/images/logos/puma.svg' },
  { name: 'Flying Machine',  type: 'image', src: '/images/logos/flying-machine.jpg',  h: 36 },
  { name: 'Camlin Kokuyo',   type: 'image', src: '/images/logos/camlin-kokuyo.jpg',   h: 36 },
  { name: 'BMW',             type: 'icon',  src: '/images/logos/bmw.svg' },
];

const items = [...LOGOS, ...LOGOS];

export function CredStrip() {
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const togglePause = () => {
    setPaused((p) => !p);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setPaused(false), 4000);
  };

  useEffect(() => {
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, []);

  return (
    <div className="cred-strip-wrap">
      <div className="cred-strip-label">Featured &amp; trusted by</div>
      <div
        className="cred-strip-viewport"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={togglePause}
        aria-label="Featured publications and clients"
      >
        <div
          className="cred-strip-marquee"
          style={{ animationPlayState: paused ? 'paused' : 'running' }}
        >
          {items.map((logo, i) => (
            <span className="cred-strip-item" key={i}>
              {logo.type === 'icon' ? (
                <span className="cred-strip-icon-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.src}
                    alt=""
                    width={28}
                    height={28}
                    style={{ display: 'block', flexShrink: 0 }}
                    draggable={false}
                  />
                  <span className="cred-strip-icon-name">{logo.name}</span>
                </span>
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={logo.src}
                  alt={logo.name}
                  height={logo.h ?? 32}
                  style={{ display: 'block', width: 'auto' }}
                  draggable={false}
                />
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
