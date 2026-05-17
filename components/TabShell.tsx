'use client';
import { useState, useEffect, useRef, type ReactNode } from 'react';

// Must match --nav-h in globals.css
const NAV_H = 72;

export type TabDef = {
  id: string;
  label: string;
  num: string;
  content: ReactNode;
};

export function TabShell({ tabs }: { tabs: TabDef[] }) {
  const [active, setActive] = useState(tabs[0].id);
  const [stuck, setStuck] = useState(false);
  const [barVisible, setBarVisible] = useState(true);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const tabBarRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const lastScrollY = useRef(0);
  const isProgrammatic = useRef(false);

  // Detect when the tab bar has become sticky; reset visibility when it unsticks
  useEffect(() => {
    if (!sentinelRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        const isStuck = !entry.isIntersecting;
        setStuck(isStuck);
        if (!isStuck) setBarVisible(true);
      },
      // rootMargin matches the nav height so stuck fires exactly when the bar pins below the nav
      { threshold: 0, rootMargin: `-${NAV_H}px 0px 0px 0px` }
    );
    obs.observe(sentinelRef.current);
    return () => obs.disconnect();
  }, []);

  // Hide on scroll down, show on scroll up — only while the bar is sticky
  useEffect(() => {
    lastScrollY.current = window.scrollY;
    const onScroll = () => {
      if (isProgrammatic.current) return;
      const y = window.scrollY;
      const delta = y - lastScrollY.current;
      lastScrollY.current = y;
      if (Math.abs(delta) < 4) return; // ignore micro-scrolls / rubber-band
      setBarVisible(delta < 0); // negative delta = scrolling up
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Update active tab button as user scrolls through sections
  useEffect(() => {
    const barHeight = tabBarRef.current?.getBoundingClientRect().height ?? 90;
    // When stuck the bar's bottom is at NAV_H + barHeight; use that as the top dead-zone
    const topOffset = NAV_H + barHeight;
    const observers: IntersectionObserver[] = [];
    tabs.forEach((t) => {
      const el = panelRefs.current[t.id];
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(t.id);
        },
        { rootMargin: `-${topOffset}px 0px -55% 0px`, threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [tabs]);

  const handleSelect = (id: string) => {
    setActive(id);
    setBarVisible(true);
    const el = panelRefs.current[id];
    if (!el) return;
    const barHeight = tabBarRef.current?.getBoundingClientRect().height ?? 90;
    const top = el.getBoundingClientRect().top + window.scrollY - NAV_H - barHeight;

    isProgrammatic.current = true;
    window.scrollTo({ top, behavior: 'smooth' });
    // Resume direction tracking once the smooth scroll settles
    setTimeout(() => {
      isProgrammatic.current = false;
      lastScrollY.current = window.scrollY;
    }, 700);
  };

  return (
    <div className="tab-shell">
      {/* Sentinel just above the tab bar — tells us when the bar is stuck */}
      <div ref={sentinelRef} style={{ height: 1 }} />

      <div
        ref={tabBarRef}
        className={`tab-bar-wrap${stuck ? ' stuck' : ''}${stuck && !barVisible ? ' bar-hidden' : ''}`}
      >
        <div className="tab-bar" role="tablist">
          {tabs.map((t) => (
            <button
              key={t.id}
              className={`tab-btn${active === t.id ? ' active' : ''}`}
              role="tab"
              aria-selected={active === t.id}
              aria-controls={`tab-${t.id}`}
              data-tab={t.id}
              onClick={() => handleSelect(t.id)}
            >
              <span className="tab-btn-num">{t.num}</span> {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="tab-content">
        {tabs.map((t) => (
          <div
            key={t.id}
            id={`tab-${t.id}`}
            className={`tab-panel${active === t.id ? ' active' : ''}`}
            role="tabpanel"
            ref={(el) => { panelRefs.current[t.id] = el; }}
          >
            {t.content}
          </div>
        ))}
      </div>
    </div>
  );
}
