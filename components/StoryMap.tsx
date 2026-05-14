'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { CHAPTERS_FULL, eventsForChapter, type TimelineEvent } from '@/data/timeline';
import { TimelineIcon } from './TimelineIcons';
import s from './StoryMap.module.css';

// Node positions in viewBox 0 0 1400 500.
// Zigzag pattern so the winding path reads as a "journey."
const NODES: { x: number; y: number }[] = [
  { x: 120, y: 130 },
  { x: 360, y: 360 },
  { x: 600, y: 130 },
  { x: 840, y: 360 },
  { x: 1080, y: 130 },
  { x: 1280, y: 360 },
];

// Curved winding path through all 6 nodes (Bezier quadratic curves between them).
const PATH =
  'M120,130 Q240,245 360,360 Q480,245 600,130 Q720,245 840,360 Q960,245 1080,130 Q1180,245 1280,360';

export function StoryMap() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [openEventIdx, setOpenEventIdx] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const activeIdx = CHAPTERS_FULL.findIndex((c) => c.id === activeId);
  const active = activeIdx >= 0 ? CHAPTERS_FULL[activeIdx] : null;
  const events: TimelineEvent[] = active ? eventsForChapter(active) : [];

  // Sub-path length up to the active node, used to "fill in" the gold journey line.
  // 6 nodes → 5 segments. Each Q in the path produces one segment.
  // 0 → 0%, 1 → 20%, 2 → 40%, …
  const progress = activeIdx >= 0 ? (activeIdx + 1) / CHAPTERS_FULL.length : 0;

  function handleSelectChapter(id: string) {
    setOpenEventIdx(null);
    setActiveId((prev) => (prev === id ? null : id));
  }

  return (
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

        <div className={s.hint}>
          {active
            ? `↓ Reading chapter ${active.roman} · ${active.label}`
            : '↓ Select a chapter to explore'}
        </div>

        {/* Map canvas */}
        <div className={s.canvasWrap}>
          {!isMobile && (
            <svg className={s.svg} viewBox="0 0 1400 500" preserveAspectRatio="none">
              <defs>
                <pattern id="storyDots" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="rgba(15,15,13,0.07)" />
                </pattern>
              </defs>
              <rect width="1400" height="500" fill="url(#storyDots)" />

              {/* Base dashed path — full journey */}
              <motion.path
                d={PATH}
                stroke="rgba(15,15,13,0.18)"
                strokeWidth="2"
                strokeDasharray="8 6"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.6, ease: 'easeInOut' }}
              />

              {/* Gold path — progress up to active chapter */}
              <motion.path
                d={PATH}
                stroke="#2E6B4F"
                strokeWidth="2.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: progress }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              />
            </svg>
          )}

          {/* Mobile vertical connecting line */}
          {isMobile && <div className={s.nodesMobileLine} />}

          {/* Nodes */}
          <div className={isMobile ? s.nodes : undefined}>
            {CHAPTERS_FULL.map((c, i) => {
              const n = NODES[i];
              const isActive = c.id === activeId;
              const isVisited = activeIdx >= 0 && i < activeIdx;
              const positionStyle = isMobile
                ? undefined
                : { left: `${(n.x / 1400) * 100}%`, top: `${(n.y / 500) * 100}%` };
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
                  <span className={s.nodePeriod}>{c.period}</span>
                  <div className={s.nodeCircle}>
                    <span className={s.nodeRoman}>{c.roman}</span>
                    <span className={s.nodePulse} />
                  </div>
                  <span className={s.nodeLabel}>{c.label}</span>
                  <span className={s.nodeDesc}>{c.desc}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detail panel */}
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
