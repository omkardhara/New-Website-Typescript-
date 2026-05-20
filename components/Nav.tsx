'use client';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NAV_LINKS = [
  { label: 'Offerings', href: '/#offerings' },
  { label: 'About', href: '/about' },
  { label: 'Story', href: '/story' },
];

export function Nav() {
  const [cream, setCream] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const FOCUSABLE = 'a[href], button:not([disabled])';

  useEffect(() => {
    if (!isHome) {
      setCream(true);
      return;
    }
    const hero = document.querySelector('.hero');
    if (!hero) {
      // fallback: no hero element found
      const onScroll = () => setCream(window.scrollY > window.innerHeight - 64);
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    }
    // Go cream when the hero section has fully scrolled behind the nav
    const obs = new IntersectionObserver(
      ([entry]) => setCream(!entry.isIntersecting),
      { threshold: 0, rootMargin: '-74px 0px 0px 0px' }
    );
    obs.observe(hero);
    return () => obs.disconnect();
  }, [isHome]);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Move focus into the mobile menu when it opens
  useEffect(() => {
    if (!menuOpen || !menuRef.current) return;
    const first = menuRef.current.querySelector<HTMLElement>(FOCUSABLE);
    first?.focus();
  }, [menuOpen]);

  // Lock body scroll when menu is open + Escape to close
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    if (!menuOpen) return () => { document.body.style.overflow = ''; };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setMenuOpen(false); hamburgerRef.current?.focus(); return; }
      if (e.key === 'Tab' && menuRef.current) {
        const focusable = Array.from(menuRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) { e.preventDefault(); last.focus(); }
        } else {
          if (document.activeElement === last) { e.preventDefault(); first.focus(); }
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  return (
    <>
      <nav className={`nav${cream ? ' scrolled-into-cream' : ''}`} aria-label="Main navigation">
        <Link className="nav-logo" href="/" onClick={() => setMenuOpen(false)} aria-current={pathname === '/' ? 'page' : undefined}>
          <span>Omkar</span>
          <span className="nav-logo-mark">×</span>
          <span className="nav-logo-mark">MW3B</span>
        </Link>
        <div className="nav-right">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              className="nav-link"
              href={l.href}
              aria-current={pathname === l.href ? 'page' : undefined}
            >
              {l.label}
            </Link>
          ))}
          <Link className="nav-cta" href="/contact" aria-current={pathname === '/contact' ? 'page' : undefined}>
            Let&apos;s work
          </Link>
          {/* Hamburger — mobile only */}
          <button
            ref={hamburgerRef}
            className={`nav-hamburger${cream ? ' cream' : ''}${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="nav-mobile-menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="nav-mobile-overlay"
          onClick={() => setMenuOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div ref={menuRef} id="nav-mobile-menu" className="nav-mobile-menu" onClick={(e) => e.stopPropagation()}>
            <div className="nav-mobile-links">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="nav-mobile-link"
                  onClick={() => setMenuOpen(false)}
                  aria-current={pathname === l.href ? 'page' : undefined}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="nav-mobile-cta"
                onClick={() => setMenuOpen(false)}
                aria-current={pathname === '/contact' ? 'page' : undefined}
              >
                Let&apos;s work →
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
