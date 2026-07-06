'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { APPROVED_TESTIMONIALS } from '@/data/testimonials';

// Must match the CSS animation duration for testimonials-scroll
const ANIM_DURATION_S = 80;

const items = [
  ...APPROVED_TESTIMONIALS.map((t) => ({ ...t, _aria: false })),
  ...APPROVED_TESTIMONIALS.map((t) => ({ ...t, _aria: true })),
];

export function TestimonialsStrip() {
  const [paused, setPaused] = useState(false);
  const [swipeX, setSwipeX] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const handlePrev = () =>
    setCurrentIndex((i) => (i - 1 + APPROVED_TESTIMONIALS.length) % APPROVED_TESTIMONIALS.length);
  const handleNext = () =>
    setCurrentIndex((i) => (i + 1) % APPROVED_TESTIMONIALS.length);

  const stepDesktop = (dir: 1 | -1) => {
    const marquee = marqueeRef.current;
    if (!marquee) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setPaused(true);
    const matrix = new DOMMatrix(window.getComputedStyle(marquee).transform);
    const totalW = marquee.scrollWidth / 2;
    const cardStep = totalW / APPROVED_TESTIMONIALS.length;
    let pos = (matrix.m41 - dir * cardStep) % totalW;
    if (pos > 0) pos -= totalW;
    const progress = Math.abs(pos) / totalW;
    marquee.style.animationDelay = `${-(progress * ANIM_DURATION_S)}s`;
    timeoutRef.current = setTimeout(() => setPaused(false), 2500);
  };

  useEffect(() => {
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, []);

  if (items.length === 0) return null;

  const current = APPROVED_TESTIMONIALS[currentIndex];

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

      {/* Mobile: fixed card + arrow navigation */}
      <div className="testimonials-strip-mobile" aria-label="Testimonials">
        <button
          className="testimonials-strip-arrow"
          onClick={handlePrev}
          aria-label="Previous testimonial"
        >
          ←
        </button>
        <figure className="testimonials-strip-card testimonials-strip-card-mobile">
          <blockquote className="testimonials-strip-quote">
            &ldquo;{current.quote}&rdquo;
          </blockquote>
          <figcaption className="testimonials-strip-attribution">
            {current.image && (
              <Image
                src={current.image}
                alt={current.name}
                width={40}
                height={40}
                className="testimonials-strip-avatar"
              />
            )}
            <div>
              <span className="testimonials-strip-name">{current.name}</span>
              <span className="testimonials-strip-role">{current.role}</span>
            </div>
          </figcaption>
        </figure>
        <button
          className="testimonials-strip-arrow"
          onClick={handleNext}
          aria-label="Next testimonial"
        >
          →
        </button>
      </div>
      <div className="testimonials-strip-dots" aria-hidden="true">
        {APPROVED_TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            className={`testimonials-strip-dot${i === currentIndex ? ' active' : ''}`}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>

      {/* Desktop: auto-scroll marquee */}
      <div className="testimonials-strip-desktop">
        <button
          className="testimonials-strip-desktop-arrow prev"
          onClick={() => stepDesktop(-1)}
          aria-label="Previous testimonial"
        >
          ←
        </button>
        <button
          className="testimonials-strip-desktop-arrow next"
          onClick={() => stepDesktop(1)}
          aria-label="Next testimonial"
        >
          →
        </button>
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
              {items.map((t) => (
                <figure
                  key={`${t.id}-${t._aria ? 'b' : 'a'}`}
                  className="testimonials-strip-card"
                  aria-hidden={t._aria || undefined}
                >
                  <blockquote className="testimonials-strip-quote">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="testimonials-strip-attribution">
                    {t.image && (
                      <Image
                        src={t.image}
                        alt={t.name}
                        width={40}
                        height={40}
                        className="testimonials-strip-avatar"
                      />
                    )}
                    <div>
                      <span className="testimonials-strip-name">{t.name}</span>
                      <span className="testimonials-strip-role">{t.role}</span>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
