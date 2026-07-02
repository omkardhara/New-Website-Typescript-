'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Stat = { num: number; label: string; suffix?: string };

const STATS: Stat[] = [
  { num: 12, label: 'Years' },
  { num: 500, label: 'Murals' },
  { num: 17, label: 'Press Features' },
  { num: 4000, label: 'Rickshaw Run', suffix: ' km' },
];

function animateCounter(el: HTMLElement, target: number, suffix = '') {
  const duration = 1400;
  const start = performance.now();
  function tick(t: number) {
    const p = Math.min(1, (t - start) / duration);
    const eased = 1 - Math.pow(1 - p, 3);
    const value = Math.floor(target * eased);
    el.textContent = value.toLocaleString() + suffix;
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = target.toLocaleString() + suffix;
  }
  requestAnimationFrame(tick);
}

export function Hero() {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      statsRef.current?.querySelectorAll<HTMLElement>('[data-target]').forEach((el) => {
        const target = parseFloat(el.dataset.target || '0');
        const suffix = el.dataset.suffix || '';
        el.textContent = target.toLocaleString() + suffix;
      });
      return;
    }
    const t = setTimeout(() => {
      statsRef.current?.querySelectorAll<HTMLElement>('[data-target]').forEach((el) => {
        const target = parseFloat(el.dataset.target || '0');
        const suffix = el.dataset.suffix || '';
        el.textContent = '0' + suffix;
        animateCounter(el, target, suffix);
      });
    }, 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero-grid">
        <div className="hero-left">
          <div className="hero-eyebrow">Artist · Storyteller · Educator</div>

          <h1 className="hero-headline">
            I craft experiences that bring people together, inspire and
            <br />
            <em>leave a lasting impression.</em>
          </h1>

          <div className="hero-aside">
            <span className="hero-aside-tag">MW3B ▸</span>Mechanical engineer by degree. Everything
            else by choice.
          </div>

          <div className="hero-ctas">
            <Link href="/contact" className="btn-primary">
              Let&apos;s work <span>→</span>
            </Link>
            <a href="#tab-work" className="btn-ghost">
              See the work
            </a>
            <Link href="/story" className="story-link">
              Know the story →
            </Link>
          </div>

          <div className="hero-offerings" id="offerings">
            <span className="offering-label">Available for</span>
            <span className="offering-chip"><span className="offering-chip-num">01</span> Performances</span>
            <span className="offering-chip"><span className="offering-chip-num">02</span> Workshops</span>
            <span className="offering-chip"><span className="offering-chip-num">03</span> Brand Collaborations</span>
          </div>

          <div className="hero-stats" ref={statsRef}>
            {STATS.map((s) => (
              <div
                className="hero-stat"
                key={s.label}
                aria-label={`${s.num.toLocaleString()}${s.suffix ?? ''} ${s.label}`}
              >
                <span className="hero-stat-num" data-target={s.num} data-suffix={s.suffix || ''} aria-hidden="true">
                  {s.num.toLocaleString()}{s.suffix ?? ''}
                </span>
                <span className="hero-stat-label" aria-hidden="true">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-right">
          <div className="portrait-frame">
            <Image
              src="/images/portrait.jpg"
              alt="Omkar Dhareshwar, juggling three glowing balls in a suit"
              fill
              priority
              sizes="(max-width: 1024px) 380px, 480px"
              className="portrait-img"
            />
          </div>
          <p className="hero-portrait-quote">
            &ldquo;Not all those who wander are lost&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}