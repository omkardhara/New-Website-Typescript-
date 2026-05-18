'use client';

import { useEffect } from 'react';
import type { PressItem } from '@/data/types';

interface Props {
  items: PressItem[];
  index: number;
  onClose: () => void;
  onChange: (i: number) => void;
}

export function PressLightbox({ items, index, onClose, onChange }: Props) {
  const item = items[index];

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && index < items.length - 1) onChange(index + 1);
      if (e.key === 'ArrowLeft' && index > 0) onChange(index - 1);
    };
    window.addEventListener('keydown', handler);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', handler);
    };
  }, [index, items.length, onClose, onChange]);

  if (!item) return null;

  return (
    <div className="press-lightbox" onClick={onClose}>
      <div className="press-lightbox-inner" onClick={(e) => e.stopPropagation()}>
        <button className="press-lightbox-close" onClick={onClose} aria-label="Close">✕</button>
        <div className="press-lightbox-img-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={item.src} alt={item.title} />
        </div>
        <div className="press-lightbox-footer">
          <div className="press-lightbox-info">
            <div className="press-lightbox-pub">{item.publication}</div>
            <div className="press-lightbox-title">{item.title}</div>
            <div className="press-lightbox-year">{item.year}</div>
            {item.url && (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="press-lightbox-link"
                onClick={(e) => e.stopPropagation()}
              >
                Read article →
              </a>
            )}
          </div>
          {items.length > 1 && (
            <div className="press-lightbox-nav">
              <button onClick={() => onChange(index - 1)} disabled={index === 0}>←</button>
              <span>{index + 1} / {items.length}</span>
              <button onClick={() => onChange(index + 1)} disabled={index === items.length - 1}>→</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
