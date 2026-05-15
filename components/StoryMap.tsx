'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CHAPTERS_FULL, eventsForChapter, type TimelineEvent } from '@/data/timeline';
import { TimelineIcon } from './TimelineIcons';
import s from './StoryMap.module.css';

const CHAPTER_ICON_TAG: Record<string, string> = {
  genesis: 'Genesis',
  marol: 'Origin',
  expansion: 'International',
  recognition: 'Recognition',
  mw3b: 'Reinvention',
  present: 'Present',
};

// Taller viewBox (1400 × 800) gives nodes room without overlapping the path.
// Top row at y=180, bottom row at y=620 — well clear of path apex around y=400.
const NODES: { x: number; y: number }[] = [
  { x: 160, y: 180 },
  { x: 400, y: 620 },
  { x: 640, y: 180 },
  { x: 880, y: 620 },
  { x: 1120, y: 180 },
  { x: 1300, y: 620 },
];

const PATH =
  'M160,180 Q280,400 400,620 Q520,400 640,180 Q760,400 880,620 Q1000,400 1120,180 Q1210,400 1300,620';

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
          window.scrollTo({
            top: window.scrollY + rect.top - 80,
            behavior: 'smooth',
          });
        }
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [activeId]);

  const activeIdx = CHAPTERS_FULL.findIndex((c) => c.id === activeId);
  const active = activeIdx >= 0 ? CHAPTERS_FULL[activeIdx] : null;
  const events: TimelineEvent[] = active ? eventsForChapter(active) : [];
  const progress = activeIdx >= 0 ? (activeIdx + 1) / CHAPTERS_FULL.length : 0;

  function handleSelectChapter(id: string) {
    setOpenEventIdx(null);
    setActiveId((prev) => (prev === id ? null : id));
  }

  return (
    <>
      {/* #2: sticky back button at the very top of the story page */}
      <div className={s.stickyBack}>
        <Link href="/" className={s.backBtn}>
          <span className={s.backArrow}>←</span> Back to home
        </Link>
      </div>

      <main className={s.wrap}>
        <div className={s.inner}>
          <div className={s.header}>
            <div className={s.dispatch}>Career Arc · 2014–Present</div>
            <h1 className={s.title}>
              A decade of <em>building things</em>
              <br />
              that didn&apos;t exist before.
            </h1>
          </div>

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

          <div className={s.hint}>
            {active
              ? `Reading chapter ${active.roman} · ${active.label}`
              : '↓ Select a chapter to begin'}
          </div>

          <div className={s.canvasWrap}>
            {!isMobile && (
              <svg className={s.svg} viewBox="0 0 1400 800" preserveAspectRatio="none">
                <defs>
                  <pattern id="storyDots" width="60" height="60" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="rgba(15,15,13,0.06)" />
                  </pattern>
                  <linearGradient id="pathGold" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2E6B4F" />
                    <stop offset="50%" stopColor="#358A5F" />
                    <stop offset="100%" stopColor="#C4621D" />
                  </linearGradient>
                </defs>

                <rect width="1400" height="800" fill="url(#storyDots)" />

                {/* Base dashed path */}
                <motion.path
                  d={PATH}
                  stroke="rgba(15,15,13,0.18)"
                  strokeWidth="2"
                  strokeDasharray="10 8"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.8, ease: 'easeInOut' }}
                />

                {/* Gold progress path */}
                <motion.path
                  d={PATH}
                  stroke="url(#pathGold)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: progress }}
                  transition={{ duration: 0.9, ease: 'easeInOut' }}
                />

                {active && (
                  <motion.circle
                    r="6"
                    fill="#C4621D"
                    initial={{ offsetDistance: '0%' }}
                    animate={{ offsetDistance: `${progress * 100}%` }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                    style={{ offsetPath: `path("${PATH}")` }}
                  />
                )}
              </svg>
            )}

            {isMobile && <div className={s.nodesMobileLine} />}

            <div className={isMobile ? s.nodes : undefined}>
              {CHAPTERS_FULL.map((c, i) => {
                const n = NODES[i];
                const isActive = c.id === activeId;
                const isVisited = activeIdx >= 0 && i < activeIdx;
                const eventCount = eventsForChapter(c).length;
                const iconTag = CHAPTER_ICON_TAG[c.id] || 'Present';
                const positionStyle = isMobile
                  ? undefined
                  : { left: `${(n.x / 1400) * 100}%`, top: `${(n.y / 800) * 100}%` };

                return (
                  <button
                    key={c.id}
                    className={`${s.node} ${isActive ? s.active : ''} ${
                      isVisited ? s.visited : ''
                    }`}
                    style={positionStyle}
                    onClick={() => handleSelectChapter(c.id)}
                    aria-pressed={isActive}
                    aria-label={`Chapter ${c.roman}: ${c.label}, ${c.period}`}
                  >
                    <div className={s.nodeCard}>
                      <span className={s.nodeRoman}>{c.roman}</span>
                      <div className={s.nodeIcon}>
                        <TimelineIcon
                          tag={iconTag}
                          size={28}
                          color={isActive ? 'var(--bg-cream)' : 'var(--gold)'}
                        />
                      </div>
                      <span className={s.nodeCount}>{eventCount} events</span>
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

          <div ref={panelRef}>
            <AnimatePresence mode="wait">
              {active && (
                <motion.div
                  key={active.id}
                  className={s.panel}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className={s.panelHead}>
                    <span className={s.panelRoman}>{active.roman}</span>
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
                            <div className={s.eventIcon}>
                              <TimelineIcon
                                tag={e.tag}
                                size={20}
                                color={isOpen ? 'var(--bg-cream)' : 'var(--gold)'}
                              />
                            </div>
                            <span className={s.eventYear}>{e.year}</span>
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

                  {/* Bottom CTA for returning to home */}
                  <div className={s.panelFoot}>
                    <Link href="/" className={s.backBtnInline}>
                      <span>←</span> Back to home
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>
    </>
  );
}