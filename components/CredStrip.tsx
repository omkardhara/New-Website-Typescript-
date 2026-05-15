'use client';
import { useState, useRef, useEffect } from 'react';

const CRED_CLIENTS = [
  'Red Bull India',
  'National Geographic',
  'Museum of Goa',
  'Doordarshan',
  'TEDx Talks',
  'Britannia',
  'Rickshaw Run 2024',
  'The Buskers Club',
  'Goethe-Institut',
  'Artisans of Mumbai',
  'Mid-Day',
  'Graffiti Magazine (DE)',
];

export function CredStrip() {
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const items = [...CRED_CLIENTS, ...CRED_CLIENTS]; // duplicate for seamless loop

  const togglePause = () => {
    setPaused((p) => !p);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setPaused(false), 4000);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
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
          {items.map((name, i) => (
            <span className="cred-strip-item" key={i}>
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
