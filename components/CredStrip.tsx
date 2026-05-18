'use client';
import { useState, useRef, useEffect } from 'react';

// w: display width in px at h=32. Square Simple Icons logos use 32x32.
const LOGOS = [
  { name: 'Red Bull',           src: '/images/logos/redbull.svg',        w: 32  },
  { name: 'National Geographic',src: '/images/logos/natgeo.svg',         w: 90  },
  { name: 'Britannia',          src: '/images/logos/britannia.svg',       w: 106 },
  { name: 'BMW',                src: '/images/logos/bmw.svg',             w: 32  },
  { name: 'The Adventurists',   src: '/images/logos/adventurists.svg',    w: 164 },
  { name: 'Universal Music',    src: '/images/logos/universal-music.svg', w: 148 },
  { name: 'Mumbai Metro',       src: '/images/logos/mumbai-metro.svg',    w: 136 },
  { name: 'Museum of Goa',      src: '/images/logos/museum-of-goa.svg',   w: 120 },
  { name: 'Puma',               src: '/images/logos/puma.svg',            w: 32  },
  { name: 'Flying Machine',     src: '/images/logos/flying-machine.svg',  w: 138 },
];

const items = [...LOGOS, ...LOGOS]; // duplicate for seamless loop

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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.name}
                width={logo.w}
                height={32}
                style={{ display: 'block', opacity: 0.5 }}
                draggable={false}
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
