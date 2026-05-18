'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CHAPTERS_FULL, eventsForChapter, type TimelineEvent } from '@/data/timeline';
import { TimelineIcon } from './TimelineIcons';
import s from './StoryMap.module.css';

// One representative tag per chapter so each node gets a distinct illustrated icon.
const CHAPTER_ICON_TAG: Record<string, string> = {
  genesis: 'Genesis',
  marol: 'Origin',
  expansion: 'International',
  recognition: 'Recognition',
  mw3b: 'Reinvention',
  present: 'Present',
};

// Each chapter has its own color "biome" — primary fills, accent strokes
// Roughly inspired by the eras' character.
type ChapterTheme = { primary: string; secondary: string; accent: string };
const THEMES: Record<string, ChapterTheme> = {
  genesis:     { primary: '#C97A4A', secondary: '#A85215', accent: '#F4D9B0' }, // terracotta — earthy beginnings
  marol:       { primary: '#E04F1C', secondary: '#B83A0E', accent: '#F2A372' }, // street art orange — vibrant urban
  expansion:   { primary: '#3A8FA8', secondary: '#1F5F73', accent: '#A6D8E0' }, // teal — international, world
  recognition: { primary: '#C9A227', secondary: '#8B6F0E', accent: '#F0DC8F' }, // gold — awards, spotlight
  mw3b:        { primary: '#9B4A8A', secondary: '#6E2E60', accent: '#E0B3D6' }, // magenta — the three balls / reinvention
  present:     { primary: '#3D8264', secondary: '#1F4D38', accent: '#A8D4BB' }, // emerald — growth, current
};

// Node positions in a 1400×900 viewBox — wider spacing, no overlapping
const NODES: { x: number; y: number; biomeR: number }[] = [
  { x: 180,  y: 230, biomeR: 200 },
  { x: 420,  y: 670, biomeR: 220 },
  { x: 680,  y: 230, biomeR: 200 },
  { x: 920,  y: 670, biomeR: 220 },
  { x: 1180, y: 230, biomeR: 200 },
  { x: 1320, y: 670, biomeR: 180 },
];

const PATH =
  'M180,230 Q300,450 420,670 Q550,450 680,230 Q800,450 920,670 Q1050,450 1180,230 Q1250,450 1320,670';

// Decorative scatter elements — generated once
const DECOR_DOTS = [
  { x: 90,  y: 100, r: 3, color: 'rgba(196,98,29,0.5)' },
  { x: 280, y: 60,  r: 2, color: 'rgba(46,107,79,0.4)' },
  { x: 750, y: 80,  r: 4, color: 'rgba(196,98,29,0.35)' },
  { x: 1080,y: 110, r: 2, color: 'rgba(46,107,79,0.5)' },
  { x: 1340,y: 90,  r: 3, color: 'rgba(196,98,29,0.4)' },
  { x: 50,  y: 480, r: 2, color: 'rgba(46,107,79,0.3)' },
  { x: 1370,y: 380, r: 4, color: 'rgba(196,98,29,0.45)' },
  { x: 90,  y: 820, r: 3, color: 'rgba(46,107,79,0.4)' },
  { x: 550, y: 850, r: 2, color: 'rgba(196,98,29,0.35)' },
  { x: 1100,y: 850, r: 3, color: 'rgba(46,107,79,0.5)' },
];

// Hand-drawn stars + plus marks (decorative)
const DECOR_STARS = [
  { x: 200,  y: 60,  size: 10, color: '#C4621D' },
  { x: 550,  y: 110, size: 8,  color: '#2E6B4F' },
  { x: 1000, y: 50,  size: 12, color: '#C4621D' },
  { x: 1300, y: 180, size: 8,  color: '#9B4A8A' },
  { x: 70,   y: 380, size: 9,  color: '#3A8FA8' },
  { x: 1370, y: 550, size: 10, color: '#C9A227' },
  { x: 350,  y: 870, size: 8,  color: '#C4621D' },
  { x: 770,  y: 850, size: 10, color: '#3D8264' },
];

const DECOR_PLUS = [
  { x: 130,  y: 530 }, { x: 600,  y: 470 }, { x: 1050, y: 530 },
  { x: 290,  y: 850 }, { x: 1280, y: 110 }, { x: 50,   y: 240 },
  { x: 1100, y: 870 },
];

// Hand-drawn arc squiggles (decorative atmosphere)
const DECOR_SQUIGGLES = [
  'M 80,180 q 30,-20 60,0 q 30,20 60,0',
  'M 1240,820 q 30,-20 60,0 q 30,20 60,0',
  'M 480,90  q 40,-25 80,0',
];

// Star shape generator (5-point)
function StarPath({ cx, cy, size, color }: { cx: number; cy: number; size: number; color: string }) {
  const pts: string[] = [];
  const outer = size;
  const inner = size * 0.4;
  for (let i = 0; i < 10; i++) {
    const r = i % 2 === 0 ? outer : inner;
    const a = (Math.PI / 5) * i - Math.PI / 2;
    pts.push(`${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`);
  }
  return <polygon points={pts.join(' ')} fill={color} opacity="0.75" />;
}

export function StoryMap() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [openEventIdx, setOpenEventIdx] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (activeId && panelRef.current) {
      const timer = setTimeout(() => {
        const rect = panelRef.current?.getBoundingClientRect();
        if (rect) {
          window.scrollTo({ top: window.scrollY + rect.top - 80, behavior: 'smooth' });
        }
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [activeId]);

  const activeIdx = CHAPTERS_FULL.findIndex((c) => c.id === activeId);
  const active = activeIdx >= 0 ? CHAPTERS_FULL[activeIdx] : null;
  const events: TimelineEvent[] = active ? eventsForChapter(active) : [];
  const progress = activeIdx >= 0 ? (activeIdx + 1) / CHAPTERS_FULL.length : 0;
  const activeTheme = active ? THEMES[active.id] : null;

  function handleSelectChapter(id: string) {
    setOpenEventIdx(null);
    setActiveId((prev) => (prev === id ? null : id));
  }

  return (
    <>
      {/* Sticky back-to-home strip */}
      <div className={s.stickyBack}>
        <Link href="/" className={s.backBtn}>
          <span className={s.backArrow}>←</span> Back to home
        </Link>
      </div>

      <main className={s.wrap}>
        <div className={s.inner}>

          {/* Header */}
          <div className={s.header}>
            <div className={s.dispatch}>Career Arc · 2014–Present</div>
            <h1 className={s.title}>
              A decade of <em>building things</em>
              <br />
              that didn&apos;t exist before.
            </h1>
            <p className={s.sub}>
              Six chapters. Each one its own world. Tap a marker to enter.
            </p>
          </div>

          {/* HUD */}
          <div className={s.hud}>
            <div className={s.hudStat}>
              <span className={s.hudStatNum}>10+</span>
              <span className={s.hudStatLabel}>Years on map</span>
            </div>
            <div className={s.hudStat}>
              <span className={s.hudStatNum}>500+</span>
              <span className={s.hudStatLabel}>Murals · Marol</span>
            </div>
            <div className={s.hudStat}>
              <span className={s.hudStatNum}>12+</span>
              <span className={s.hudStatLabel}>Press features</span>
            </div>
            <div className={s.hudStat}>
              <span className={s.hudStatNum}>3,000</span>
              <span className={s.hudStatLabel}>km · Rickshaw Run</span>
            </div>
            <div className={`${s.hudStat} ${s.ember}`}>
              <span className={s.hudStatNum}>VI</span>
              <span className={s.hudStatLabel}>Chapters logged</span>
            </div>
          </div>

          {/* The illustrated map + detail panel overlay */}
          <div className={s.canvasWrap}>
            {!isMobile && (
              <svg className={s.svg} viewBox="0 0 1400 900" preserveAspectRatio="none">
                <defs>
                  {/* Each chapter has a radial gradient zone */}
                  {CHAPTERS_FULL.map((c) => {
                    const t = THEMES[c.id];
                    return (
                      <radialGradient key={c.id} id={`biome-${c.id}`} cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor={t.accent} stopOpacity="0.55" />
                        <stop offset="60%" stopColor={t.primary} stopOpacity="0.16" />
                        <stop offset="100%" stopColor={t.primary} stopOpacity="0" />
                      </radialGradient>
                    );
                  })}

                  {/* Brushstroke gradient that flows through all biome colors */}
                  <linearGradient id="pathBrush" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%"   stopColor={THEMES.genesis.primary} />
                    <stop offset="17%"  stopColor={THEMES.genesis.primary} />
                    <stop offset="34%"  stopColor={THEMES.marol.primary} />
                    <stop offset="51%"  stopColor={THEMES.expansion.primary} />
                    <stop offset="68%"  stopColor={THEMES.recognition.primary} />
                    <stop offset="85%"  stopColor={THEMES.mw3b.primary} />
                    <stop offset="100%" stopColor={THEMES.present.primary} />
                  </linearGradient>

                  {/* Paper-grain pattern */}
                  <pattern id="paperGrain" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="0.8" fill="rgba(15,15,13,0.05)" />
                    <circle cx="20" cy="22" r="0.6" fill="rgba(15,15,13,0.04)" />
                    <circle cx="35" cy="10" r="0.5" fill="rgba(15,15,13,0.06)" />
                  </pattern>

                  {/* Filter for hand-drawn wobble */}
                  <filter id="rough" x="-5%" y="-5%" width="110%" height="110%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" />
                    <feDisplacementMap in="SourceGraphic" scale="2" />
                  </filter>
                </defs>

                {/* Paper texture base */}
                <rect width="1400" height="900" fill="url(#paperGrain)" />

                {/* The 6 colored biomes — radial gradient blobs behind each node */}
                {CHAPTERS_FULL.map((c, i) => {
                  const n = NODES[i];
                  return (
                    <circle
                      key={`biome-${c.id}`}
                      cx={n.x}
                      cy={n.y}
                      r={n.biomeR}
                      fill={`url(#biome-${c.id})`}
                    />
                  );
                })}

                {/* Decorative dashed circles around active biome — atmosphere */}
                {active && activeTheme && (() => {
                  const idx = activeIdx;
                  const n = NODES[idx];
                  return (
                    <g>
                      <motion.circle
                        cx={n.x} cy={n.y} r={n.biomeR + 20}
                        fill="none" stroke={activeTheme.primary} strokeWidth="1.5"
                        strokeDasharray="4 6" opacity="0.55"
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.55 }}
                        transition={{ duration: 0.6 }}
                        style={{ transformOrigin: `${n.x}px ${n.y}px` }}
                      />
                      <motion.circle
                        cx={n.x} cy={n.y} r={n.biomeR + 50}
                        fill="none" stroke={activeTheme.secondary} strokeWidth="1"
                        strokeDasharray="2 8" opacity="0.4"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                        style={{ transformOrigin: `${n.x}px ${n.y}px` }}
                      />
                    </g>
                  );
                })()}

                {/* Scatter decoration — dots */}
                {DECOR_DOTS.map((d, i) => (
                  <circle key={`d-${i}`} cx={d.x} cy={d.y} r={d.r} fill={d.color} />
                ))}

                {/* Scatter — plus marks (compass-style) */}
                {DECOR_PLUS.map((p, i) => (
                  <g key={`p-${i}`} stroke="rgba(15,15,13,0.22)" strokeWidth="1.4" strokeLinecap="round">
                    <line x1={p.x - 5} y1={p.y} x2={p.x + 5} y2={p.y} />
                    <line x1={p.x} y1={p.y - 5} x2={p.x} y2={p.y + 5} />
                  </g>
                ))}

                {/* Scatter — stars */}
                {DECOR_STARS.map((st, i) => (
                  <StarPath key={`s-${i}`} cx={st.x} cy={st.y} size={st.size} color={st.color} />
                ))}

                {/* Scatter — hand-drawn squiggles */}
                {DECOR_SQUIGGLES.map((d, i) => (
                  <path
                    key={`sq-${i}`}
                    d={d}
                    stroke="rgba(15,15,13,0.18)"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                ))}

                {/* BASE dashed journey path */}
                <motion.path
                  d={PATH}
                  stroke="rgba(15,15,13,0.18)"
                  strokeWidth="3"
                  strokeDasharray="14 10"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.8, ease: 'easeInOut' }}
                />

                {/* COLORED progress brushstroke — thicker for impact */}
                <motion.path
                  d={PATH}
                  stroke="url(#pathBrush)"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: progress }}
                  transition={{ duration: 0.9, ease: 'easeInOut' }}
                  style={{ filter: 'drop-shadow(0 2px 4px rgba(46,107,79,0.25))' }}
                />

                {/* Traveling marker — only while active */}
                {active && activeTheme && (
                  <motion.circle
                    r="9"
                    fill={activeTheme.primary}
                    stroke="#F8F6F1"
                    strokeWidth="3"
                    initial={{ offsetDistance: '0%' }}
                    animate={{ offsetDistance: `${progress * 100}%` }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                    style={{
                      offsetPath: `path("${PATH}")`,
                      filter: 'drop-shadow(0 3px 6px rgba(15,15,13,0.3))',
                    }}
                  />
                )}
              </svg>
            )}

            {isMobile && <div className={s.nodesMobileLine} />}

            {/* Nodes */}
            <div className={isMobile ? s.nodes : undefined}>
              {CHAPTERS_FULL.map((c, i) => {
                const n = NODES[i];
                const isActive = c.id === activeId;
                const isVisited = activeIdx >= 0 && i < activeIdx;
                const eventCount = eventsForChapter(c).length;
                const iconTag = CHAPTER_ICON_TAG[c.id] || 'Present';
                const theme = THEMES[c.id];
                const positionStyle = isMobile
                  ? undefined
                  : { left: `${(n.x / 1400) * 100}%`, top: `${(n.y / 900) * 100}%` };

                return (
                  <button
                    key={c.id}
                    className={`${s.node} ${isActive ? s.active : ''} ${
                      isVisited ? s.visited : ''
                    } ${!isMobile && i % 2 === 0 ? s.topNode : ''}`}
                    style={{
                      ...positionStyle,
                      // CSS custom properties drive the per-chapter coloring
                      ['--chapter-primary' as string]: theme.primary,
                      ['--chapter-secondary' as string]: theme.secondary,
                      ['--chapter-accent' as string]: theme.accent,
                    }}
                    onClick={() => handleSelectChapter(c.id)}
                    aria-pressed={isActive}
                    aria-label={`Chapter ${c.roman}: ${c.label}, ${c.period}`}
                  >
                    <div className={s.nodeCard}>
                      {/* Decorative ring around the medallion */}
                      <span className={s.nodeRing} />
                      <span className={s.nodeRoman}>{c.roman}</span>
                      <div className={s.nodeIcon}>
                        <TimelineIcon
                          tag={iconTag}
                          size={26}
                          color={isActive ? '#F8F6F1' : theme.secondary}
                        />
                      </div>
                      <span className={s.nodeCount}>{eventCount} EVENTS</span>
                      <span className={s.nodePulse} />
                    </div>
                    <div className={s.nodeMeta}>
                      <span className={s.nodePeriod}>{c.period}</span>
                      <span className={s.nodeLabel}>{c.label}</span>
                      <span className={s.nodeDesc}>{c.desc}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detail panel — below the map, auto-scrolled into view */}
          <div ref={panelRef}>
            <AnimatePresence mode="wait">
              {active && activeTheme && (
                <motion.div
                  key={active.id}
                  className={s.panel}
                  style={{
                    borderColor: activeTheme.primary,
                    ['--panel-primary' as string]: activeTheme.primary,
                    ['--panel-secondary' as string]: activeTheme.secondary,
                    ['--panel-accent' as string]: activeTheme.accent,
                  }}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div
                    className={s.panelHead}
                    style={{
                      background: `linear-gradient(135deg, ${activeTheme.accent}33, ${activeTheme.primary}11)`,
                    }}
                  >
                    <span className={s.panelRoman} style={{ background: activeTheme.primary }}>
                      {active.roman}
                    </span>
                    <div>
                      <h2 className={s.panelTitle}>{active.label}</h2>
                      <div className={s.panelMeta}>
                        {active.period} · {events.length} event{events.length !== 1 ? 's' : ''} ·{' '}
                        {active.desc}
                      </div>
                    </div>
                    <button className={s.panelClose} onClick={() => setActiveId(null)}>
                      Close ✕
                    </button>
                  </div>

                  <div className={s.events}>
                    {events.map((e, i) => {
                      const isOpen = openEventIdx === i;
                      return (
                        <div key={`${active.id}-${i}`}>
                          <button
                            className={`${s.event} ${isOpen ? s.open : ''}`}
                            onClick={() => setOpenEventIdx(isOpen ? null : i)}
                            aria-expanded={isOpen}
                          >
                            <div
                              className={s.eventIcon}
                              style={isOpen ? { background: activeTheme.primary, borderColor: activeTheme.primary } : undefined}
                            >
                              <TimelineIcon
                                tag={e.tag}
                                size={20}
                                color={isOpen ? '#F8F6F1' : activeTheme.secondary}
                              />
                            </div>
                            <span className={s.eventYear} style={{ color: activeTheme.secondary }}>
                              {e.year}
                            </span>
                            <span className={s.eventTitle}>{e.title}</span>
                            <span className={s.eventToggle}>+</span>
                          </button>

                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                style={{ overflow: 'hidden' }}
                              >
                                <div className={`${s.eventDetail} ${!e.image ? s.noImg : ''}`}>
                                  <p className={s.eventDesc}>{e.desc}</p>
                                  {e.image && (
                                    <Image
                                      className={s.eventImg}
                                      src={e.image}
                                      alt={e.title}
                                      width={280}
                                      height={210}
                                    />
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>

                  <div className={s.panelFoot}>
                    <Link
                      href="/"
                      className={s.backBtnInline}
                      style={{ background: activeTheme.primary }}
                    >
                      <span>←</span> Back to home
                    </Link>
                    <Link href="/about" className={s.crossLink}>
                      Meet the person behind the story →
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </main>

      {/* Always-visible About crosslink */}
      <div className={s.aboutBand}>
        <div className={s.aboutBandInner}>
          <div>
            <div className={s.aboutBandLabel}>Want to know the person?</div>
            <div className={s.aboutBandText}>
              The story covers the timeline. The About page covers the human.
            </div>
          </div>
          <Link href="/about" className={s.aboutBandLink}>
            Head to the About page →
          </Link>
        </div>
      </div>
    </>
  );
}
