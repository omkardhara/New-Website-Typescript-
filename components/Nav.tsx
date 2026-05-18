'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function Nav() {
  const [cream, setCream] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    // On non-home pages, always show the cream nav (no dark hero behind it).
    if (!isHome) {
      setCream(true);
      return;
    }
    const onScroll = () => setCream(window.scrollY > window.innerHeight - 64);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  return (
    <nav className={`nav${cream ? ' scrolled-into-cream' : ''}`}>
      <Link className="nav-logo" href="/">
        <span>Omkar</span>
        <span className="nav-logo-mark">×</span>
        <span className="nav-logo-mark">MW3B</span>
      </Link>
      <div className="nav-right">
        <Link className="nav-link" href="/#offerings">
          Offerings
        </Link>
        <Link className="nav-link" href="/about">
          About
        </Link>
        <Link className="nav-link" href="/story">
          Story
        </Link>
        <Link className="nav-cta" href="/contact">
          Let&apos;s work
        </Link>
      </div>
    </nav>
  );
}