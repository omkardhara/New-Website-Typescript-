'use client';
import { useState, useEffect, useRef, type ReactNode } from 'react';

// Must match --nav-h in globals.css
const NAV_H = 74;

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
      { threshold: 0, rootMargin: `-${NAV_H}px 0px 0px 0px` }
    );
    obs.observe(sentinelRef.current);
    return () => obs.disconnect();
  }, []);

  // Hide on scroll down, show on scroll up — only while sticky
  useEffect(() => {
    lastScrollY.current = window.scrollY;
    const onScroll = () => {
      if (isProgrammatic.current) return;
      const y = window.scrollY;
      const delta = y - lastScrollY.current;
      lastScrollY.current = y;
      if (Math.abs(delta) < 4) return;
      setBarVisible(delta < 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSelect = (id: string) => {
    setActive(id);
    setBarVisible(true);

    // Scroll so the sentinel sits just below the nav — puts the bar and content into view
    if (!sentinelRef.current) return;
    const targetY =
      sentinelRef.current.getBoundingClientRect().top + window.scrollY - NAV_H;

    isProgrammatic.current = true;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
    setTimeout(() => {
      isProgrammatic.current = false;
      lastScrollY.current = window.scrollY;
    }, 700);
  };

  return (
    <div className="tab-shell">
      {/* Sentinel — tells us when the bar has become sticky */}
      <div ref={sentinelRef} style={{ height: 1 }} />

      {/*
        Outer: handles sticky positioning + height collapse (no dead zone).
        grid-template-rows: 0fr collapses the layout footprint to zero,
        so the cream content rises flush with the nav when bar is hidden.
      */}
      <div className={`tab-bar-outer${stuck && !barVisible ? ' bar-hidden' : ''}`}>
        <div ref={tabBarRef} className={`tab-bar-wrap${stuck ? ' stuck' : ''}`}>
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
      </div>

      <div className="tab-content">
        {tabs.map((t) => (
          <div
            key={t.id}
            id={`tab-${t.id}`}
            className={`tab-panel${active === t.id ? ' active' : ''}`}
            role="tabpanel"
          >
            {t.content}
          </div>
        ))}
      </div>
    </div>
  );
}
