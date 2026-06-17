'use client';
import { useState, useRef, useEffect } from 'react';
import { TESTIMONIALS } from '@/data/testimonials';

// Must match the CSS animation duration for testimonials-scroll
const ANIM_DURATION_S = 80;

const items = [
  ...TESTIMONIALS.map((t) => ({ ...t, _aria: false })),
  ...TESTIMONIALS.map((t) => ({ ...t, _aria: true })),
];

export function TestimonialsStrip() {
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
      const matrix = new DOMMatrix(window.getComputedStyle(marquee).transform);
      const animX = matrix.m41;
      const combined = animX + swipeX;
      const totalW = marquee.scrollWidth / 2;
      let pos = combined % totalW;
      if (pos > 0) pos -= totalW;
      const progress = Math.abs(pos) / totalW;
      marquee.style.animationDelay = `${-(progress * ANIM_DURATION_S)}s`;
    }
    setSwipeX(0);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setPaused(false), 1500);
  };

  useEffect(() => {
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, []);

  return (
    <section
      className="testimonials-strip-wrap"
      aria-labelledby="testimonials-heading"
    >
      <p
        id="testimonials-heading"
        className="testimonials-strip-label"
        aria-label="What collaborators say"
      >
        What collaborators say
      </p>

      <div
        className="testimonials-strip-viewport"
        onMouseEnter={() => { if (timeoutRef.current) clearTimeout(timeoutRef.current); setPaused(true); }}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        role="region"
        aria-label="Scrolling testimonials"
      >
        <div style={{ transform: `translateX(${swipeX}px)` }}>
          <div
            ref={marqueeRef}
            className="testimonials-strip-marquee"
            style={{ animationPlayState: paused ? 'paused' : 'running' }}
          >
            {items.map((t, i) => (
              <figure
                key={`${t.id}-${t._aria ? 'b' : 'a'}`}
                className="testimonials-strip-card"
                aria-hidden={t._aria || undefined}
              >
                <blockquote className="testimonials-strip-quote">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="testimonials-strip-attribution">
                  <span className="testimonials-strip-name">{t.name}</span>
                  <span className="testimonials-strip-role">{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
