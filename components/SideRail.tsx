'use client';

type TabInfo = { id: string; num: string; label: string };

export function SideRail({
  tabs,
  activeId,
  onSelect,
}: {
  tabs: TabInfo[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <nav className="side-rail" aria-label="Tab quick navigation">
      {tabs.map((t) => (
        <button
          key={t.id}
          className={`side-rail-item${activeId === t.id ? ' active' : ''}`}
          onClick={() => onSelect(t.id)}
          aria-label={`Jump to ${t.label}`}
          aria-current={activeId === t.id ? 'true' : undefined}
        >
          <span className="side-rail-label">
            <span className="side-rail-num">{t.num}</span> {t.label}
          </span>
          <span className="side-rail-dot" />
        </button>
      ))}
    </nav>
  );
}
