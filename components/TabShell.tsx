'use client';
import { useState, type ReactNode } from 'react';

export type TabDef = {
  id: string;
  label: string;
  num: string;
  content: ReactNode;
};

export function TabShell({ tabs }: { tabs: TabDef[] }) {
  const [active, setActive] = useState(tabs[0].id);

  return (
    <div className="tab-shell">
      <div className="tab-bar-wrap">
        <div className="tab-bar" role="tablist">
          {tabs.map((t) => (
            <button
              key={t.id}
              className={`tab-btn${active === t.id ? ' active' : ''}`}
              role="tab"
              aria-selected={active === t.id}
              aria-controls={`tab-${t.id}`}
              data-tab={t.id}
              onClick={() => {
                setActive(t.id);
                if (window.innerWidth < 720) {
                  document.querySelector('.tab-bar-wrap')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }
              }}
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
          >
            {t.content}
          </div>
        ))}
      </div>
    </div>
  );
}
