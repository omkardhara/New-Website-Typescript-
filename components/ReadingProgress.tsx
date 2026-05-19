'use client';
import { useEffect, useState } from 'react';

export function ReadingProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setPct(max > 0 ? (el.scrollTop / max) * 100 : 0);
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div
      role="progressbar"
      aria-label="Reading progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pct)}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '2px',
        width: `${pct}%`,
        background: 'var(--gold)',
        zIndex: 9999,
        transition: 'width 0.1s linear',
        pointerEvents: 'none',
      }}
    />
  );
}
