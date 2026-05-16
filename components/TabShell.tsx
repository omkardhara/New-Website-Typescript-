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
  const tabBarRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Detect when the tab bar has become sticky
  useEffect(() => {
    if (!sentinelRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => setStuck(!entry.isIntersecting),
      { threshold: 0 }
    );
    obs.observe(sentinelRef.current);
    return () => obs.disconnect();
  }, []);

  // Update active tab button as user scrolls through sections
  useEffect(() => {
    const barHeight = tabBarRef.current?.getBoundingClientRect().height ?? 90;
    const observers: IntersectionObserver[] = [];

    tabs.forEach((t) => {
      const el = panelRefs.current[t.id];
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(t.id);
        },
        { rootMargin: `-${barHeight}px 0px -55% 0px`, threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [tabs]);

  const handleSelect = (id: string) => {
    setActive(id);
    const el = panelRefs.current[id];
    if (!el) return;
    const barHeight = tabBarRef.current?.getBoundingClientRect().height ?? 90;
    const top = el.getBoundingClientRect().top + window.scrollY - barHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <div className="tab-shell">
      {/* Sentinel just above the tab bar — tells us when the bar is stuck */}
      <div ref={sentinelRef} style={{ height: 1 }} />

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
