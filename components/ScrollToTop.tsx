'use client';
import { useEffect, useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';

const useBrowserLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export function ScrollToTop() {
  const pathname = usePathname();

  // Disable browser scroll restoration once on mount so it never fights us
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  useBrowserLayoutEffect(() => {
    // Hash URLs (/#tab-work etc.) — let TabShell handle the scroll
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}
