'use client';
import { useState, useEffect, useRef, type ReactNode } from 'react';

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
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sentinelRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => setStuck(!entry.isIntersecting),
      { threshold: 0, rootMargin: `-${NAV_H}px 0px 0px 0px` }
    );
    obs.observe(sentinelRef.current);
    return () => obs.disconnect();
  }, []);

  // Activate the tab matching the URL hash and scroll to the tab bar
  useEffect(() => {
    const hash = window.location.hash; // e.g. "#tab-notes"
    if (!hash.startsWith('#tab-')) return;
    const tabId = hash.slice('#tab-'.length);
    const match = tabs.find((t) => t.id === tabId);
    if (!match) return;
    setActive(match.id);
    setTimeout(() => {
      if (!sentinelRef.current) return;
      const y = sentinelRef.current.getBoundingClientRect().top + window.scrollY - NAV_H;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }, 80);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelect = (id: string) => {
    setActive(id);
    if (!sentinelRef.current) return;
    const targetY =
      sentinelRef.current.getBoundingClientRect().top + window.scrollY - NAV_H;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  return (
    <div className="tab-shell">
      <div ref={sentinelRef} style={{ height: 1 }} />

      <div className={`tab-bar-outer${stuck ? ' stuck' : ''}`}>
        <div className="tab-bar-wrap">
          <div className="tab-bar" role="tablist">
            <span className="tab-bar-label" aria-hidden="true">Browse the work →</span>
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
