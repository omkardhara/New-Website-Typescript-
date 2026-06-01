'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Stat = { num: number; label: string; suffix?: string };

const STATS: Stat[] = [
  { num: 10, label: 'Years' },
  { num: 500, label: 'Murals' },
  { num: 12, label: 'Press Features' },
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
        animateCounter(el, target, suffix);
      });
    }, 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero-grid">
        <div className="hero-left">
          <div className="hero-eyebrow">Flow Artist · Performer · Storyteller</div>

          <h1 className="hero-headline">
            Eleven years between juggling and ₹80 crore in brand sponsorships teaches you one thing:{' '}
            <em>what actually connects with people.</em>
          </h1>

          <p className="hero-sub">
            That instinct is what I bring. Whether it&apos;s a brand activation, a workshop, a stage, or
            a brief you wrote last night, I add the creative direction and cultural read that makes it
            worth remembering.
          </p>

          <div className="hero-aside">
            <span className="hero-aside-tag">MW3B ▸</span>Mechanical engineer by degree. Everything
            else by choice.
          </div>

          <div className="hero-ctas">
            <Link href="/contact" className="btn-primary">
              Hire me <span>→</span>
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
                  0
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
        </div>
      </div>
    </section>
  );
}