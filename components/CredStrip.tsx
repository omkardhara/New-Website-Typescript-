'use client';
import { useState, useRef, useEffect } from 'react';

type Logo =
  | { name: string; type: 'image'; src: string; h?: number; round?: boolean; noBg?: boolean; maxW?: number }
  | { name: string; type: 'icon';  src: string };

// h = rendered height in px. Default is 30px (Agatsu standard).
const LOGOS: Logo[] = [
  { name: 'Red Bull',            type: 'icon',  src: '/images/logos/redbull.svg' },
  { name: 'National Geographic', type: 'image', src: '/images/logos/natgeo.png',              h: 54 },
  { name: 'Britannia',           type: 'image', src: '/images/logos/britannia.jpg',            h: 52 },
  { name: 'Universal Music',     type: 'image', src: '/images/logos/universal-music.png',      h: 32, noBg: true },
  { name: 'Mumbai Metro',        type: 'image', src: '/images/logos/mumbai-metro.jpg',         h: 48 },
  { name: 'Museum of Goa',       type: 'image', src: '/images/logos/museum-of-goa.png',        h: 30 },
  { name: 'Phantom',             type: 'image', src: '/images/logos/phantom.jpg',              h: 48 },
  { name: 'Puma',                type: 'icon',  src: '/images/logos/puma.svg' },
  { name: 'Flying Machine',      type: 'image', src: '/images/logos/flying-machine.jpg',       h: 36 },
  { name: 'Camlin Kokuyo',       type: 'image', src: '/images/logos/camlin-kokuyo.jpg',        h: 44 },
  { name: 'BMW',                 type: 'icon',  src: '/images/logos/bmw.svg' },
  { name: 'The Adventurists',    type: 'image', src: '/images/logos/adventurists.png',         h: 38 },
  { name: 'BookMyShow',          type: 'image', src: '/images/logos/bookmyshow.png',           h: 42 },
  { name: 'Mid-Day',             type: 'image', src: '/images/logos/midday.png',               h: 42 },
  { name: 'The Times of India',  type: 'image', src: '/images/logos/times-of-india.png',       h: 34, maxW: 110 },
  { name: 'Homegrown',           type: 'image', src: '/images/logos/homegrown.png',            h: 46 },
  { name: 'Agatsu Foundation',   type: 'image', src: '/images/logos/agatsu.png',               h: 30 },
  { name: 'Shri Chitrapur Math', type: 'image', src: '/images/logos/chitrapur-math.jpg',       h: 44, round: true },
];

// Second copy is purely for infinite-scroll visual; hide from screen readers
const items = [
  ...LOGOS.map((l) => ({ ...l, _aria: false })),
  ...LOGOS.map((l) => ({ ...l, _aria: true })),
];

// Must match the CSS animation duration for cred-scroll
const ANIM_DURATION_S = 55;

export function CredStrip() {
  const [paused, setPaused] = useState(false);
  const [swipeX, setSwipeX] = useState(0);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef(0);
  const swipeStartX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    swipeStartX.current = swipeX;
    setPaused(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const delta = e.touches[0].clientX - touchStartX.current;
    setSwipeX(swipeStartX.current + delta);
  };

  const handleTouchEnd = () => {
    const marquee = marqueeRef.current;
    if (marquee) {
      // Read the frozen animation translateX
      const matrix = new DOMMatrix(window.getComputedStyle(marquee).transform);
      const animX = matrix.m41;
      // Combine with user's swipe delta
      const combined = animX + swipeX;
      // Total scroll distance = half the duplicated marquee width
      const totalW = marquee.scrollWidth / 2;
      // Normalize into [-totalW, 0]
      let pos = combined % totalW;
      if (pos > 0) pos -= totalW;
      // Reposition the animation so it resumes from here
      const progress = Math.abs(pos) / totalW;
      marquee.style.animationDelay = `${-(progress * ANIM_DURATION_S)}s`;
    }
    // Remove swipe offset — animation picks up from the same visual point
    setSwipeX(0);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setPaused(false), 1500);
  };

  useEffect(() => {
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, []);

  return (
    <div className="cred-strip-wrap">
      <div className="cred-strip-label">Featured &amp; trusted by</div>
      <div
        className="cred-strip-viewport"
        onMouseEnter={() => { if (timeoutRef.current) clearTimeout(timeoutRef.current); setPaused(true); }}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        role="region"
        aria-label="Featured publications and clients"
      >
        <div style={{ transform: `translateX(${swipeX}px)` }}>
          <div
            ref={marqueeRef}
            className="cred-strip-marquee"
            style={{ animationPlayState: paused ? 'paused' : 'running' }}
          >
            {items.map((logo, i) => (
              <span className="cred-strip-item" key={i} aria-hidden={logo._aria || undefined}>
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
                    style={{
                      height: logo.h ? `${logo.h}px` : undefined,
                      ...(logo.maxW && { maxWidth: `${logo.maxW}px` }),
                      ...(logo.round && { borderRadius: '50%', clipPath: 'circle(50%)' }),
                      ...(logo.noBg && { filter: 'grayscale(1) brightness(3) contrast(1.5)' }),
                    }}
                    draggable={false}
                  />
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
