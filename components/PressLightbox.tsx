'use client';

import { useEffect, useRef, useState } from 'react';
import type { PressItem } from '@/data/types';

interface Props {
  items: PressItem[];
  index: number;
  onClose: () => void;
  onChange: (i: number) => void;
}

export function PressLightbox({ items, index, onClose, onChange }: Props) {
  const item = items[index];
  const closingRef = useRef(false);
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const [showScrollHint, setShowScrollHint] = useState(false);

  const allImages = item ? [item.src, ...(item.images ?? [])] : [];

  const handleClose = () => {
    if (closingRef.current) return;
    closingRef.current = true;
    // Pop the history entry we pushed on mount, then close
    window.history.back();
  };

  // Reset scroll position and show hint whenever item changes
  useEffect(() => {
    if (imgWrapRef.current) imgWrapRef.current.scrollTop = 0;
    setShowScrollHint(allImages.length > 1);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  useEffect(() => {
    // Push a dummy history entry so mobile back-swipe closes the lightbox
    window.history.pushState({ pressLightbox: true }, '');
    closingRef.current = false;

    const onPopState = () => {
      // Back button / swipe triggered — just close (history already popped)
      closingRef.current = true;
      onClose();
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight' && index < items.length - 1) onChange(index + 1);
      if (e.key === 'ArrowLeft' && index > 0) onChange(index - 1);
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('popstate', onPopState);
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('popstate', onPopState);
      window.removeEventListener('keydown', onKeyDown);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  // When onClose fires (from popstate path) unmount is clean
  useEffect(() => {
    return () => {
      // If we're unmounting without having fired history.back() yet, do it now
      if (!closingRef.current && window.history.state?.pressLightbox) {
        window.history.back();
      }
    };
  }, []);

  if (!item) return null;

  return (
    <div className="press-lightbox" onClick={handleClose}>
      <div className="press-lightbox-inner" onClick={(e) => e.stopPropagation()}>
        <button className="press-lightbox-close" onClick={handleClose} aria-label="Close">✕</button>

        <div
          ref={imgWrapRef}
          className="press-lightbox-img-wrap"
          onScroll={() => setShowScrollHint(false)}
        >
          {allImages.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={src}
              alt={i === 0 ? item.title : `${item.title} — page ${i + 1}`}
            />
          ))}
        </div>

        {showScrollHint && (
          <div className="press-lightbox-scroll-hint">
            scroll for more pages ↓
          </div>
        )}

        <div className="press-lightbox-footer">
          <div className="press-lightbox-info">
            <div className="press-lightbox-pub">{item.publication}</div>
            <div className="press-lightbox-title">{item.title}</div>
            <div className="press-lightbox-year">
              {item.year}
              {allImages.length > 1 && ` · ${allImages.length} pages`}
            </div>
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
              <button
                onClick={() => onChange(index - 1)}
                disabled={index === 0}
                aria-label="Previous article"
              >←</button>
              <span>{index + 1} / {items.length}</span>
              <button
                onClick={() => onChange(index + 1)}
                disabled={index === items.length - 1}
                aria-label="Next article"
              >→</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
