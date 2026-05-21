'use client';
import { useEffect, useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';

const useBrowserLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export function ScrollToTop() {
  const pathname = usePathname();
  useBrowserLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
