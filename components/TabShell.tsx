'use client';
import { useState, useEffect, useRef, type ReactNode } from 'react';

export type TabDef = {
  id: string;
  label: string;
  num: string;
  content: ReactNode;
};

export function TabShell({ tabs }: { tabs: TabDef[] }) {
  const [active, setActive] = useState(tabs[0].id);
  const [stuck, setStuck] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Detect when the tab bar has become sticky
  useEffect(() => {
    if (!sentinelRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => setStuck(!entry.isIntersecting),
      { threshold: 0, rootMargin: '0px 0px 0px 0px' }
    );
    obs.observe(sentinelRef.current);
    return () => obs.disconnect();
  }, []);

  const handleSelect = (id: string) => {
    setActive(id);
    // Scroll to content panel, clearing the sticky tab bar height (~90px)
    setTimeout(() => {
      if (contentRef.current) {
        const top = contentRef.current.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <div className="tab-shell">
      {/* Sentinel just above the tab bar — tells us when the bar is stuck */}
      <div ref={sentinelRef} style={{ height: 1 }} />

      <div className={`tab-bar-wrap${stuck ? ' stuck' : ''}`}>
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

      <div className="tab-content" ref={contentRef}>
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
