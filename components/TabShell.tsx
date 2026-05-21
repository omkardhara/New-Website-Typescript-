'use client';
import { useState, useEffect, useLayoutEffect, useRef, type ReactNode } from 'react';

const useBrowserLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

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

  // Activate the tab matching the URL hash and jump to the tab bar before first paint
  useBrowserLayoutEffect(() => {
    const hash = window.location.hash; // e.g. "#tab-notes"
    if (!hash.startsWith('#tab-')) return;
    const tabId = hash.slice('#tab-'.length);
    const match = tabs.find((t) => t.id === tabId);
    if (!match) return;
    setActive(match.id);
    if (!sentinelRef.current) return;
    const y = sentinelRef.current.getBoundingClientRect().top + window.scrollY - NAV_H;
    window.scrollTo({ top: y, behavior: 'instant' });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelect = (id: string) => {
    setActive(id);
    // Only scroll to the tab bar if it's not already visible (stuck = visible at top)
    if (stuck) return;
    if (!sentinelRef.current) return;
    const targetY =
      sentinelRef.current.getBoundingClientRect().top + window.scrollY - NAV_H;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  // WAI-ARIA Tabs: arrow-key navigation
  const handleKeyDown = (e: React.KeyboardEvent, currentId: string) => {
    const ids = tabs.map((t) => t.id);
    const idx = ids.indexOf(currentId);
    let next = -1;
    if (e.key === 'ArrowRight') next = (idx + 1) % ids.length;
    if (e.key === 'ArrowLeft') next = (idx - 1 + ids.length) % ids.length;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = ids.length - 1;
    if (next >= 0) {
      e.preventDefault();
      handleSelect(ids[next]);
      // Move focus to the newly active tab button
      const bar = e.currentTarget.closest('[role="tablist"]');
      (bar?.querySelector(`#tab-btn-${ids[next]}`) as HTMLElement | null)?.focus();
    }
  };

  return (
    <div className="tab-shell">
      <div ref={sentinelRef} style={{ height: 1 }} aria-hidden="true" />

      <div className={`tab-bar-outer${stuck ? ' stuck' : ''}`}>
        <div className="tab-bar-wrap">
          <div className="tab-bar" role="tablist" aria-label="Portfolio sections">
            <span className="tab-bar-label" aria-hidden="true">Browse the work →</span>
            {tabs.map((t) => (
              <button
                key={t.id}
                id={`tab-btn-${t.id}`}
                className={`tab-btn${active === t.id ? ' active' : ''}`}
                role="tab"
                aria-selected={active === t.id}
                aria-controls={`tab-${t.id}`}
                tabIndex={active === t.id ? 0 : -1}
                data-tab={t.id}
                onClick={() => handleSelect(t.id)}
                onKeyDown={(e) => handleKeyDown(e, t.id)}
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
            aria-labelledby={`tab-btn-${t.id}`}
            tabIndex={0}
          >
            {t.content}
          </div>
        ))}
      </div>
    </div>
  );
}
