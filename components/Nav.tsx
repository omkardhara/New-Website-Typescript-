'use client';
import { useEffect, useState } from 'react';
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

  useEffect(() => {
    if (!isHome) {
      setCream(true);
      return;
    }
    const onScroll = () => setCream(window.scrollY > window.innerHeight - 64);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Lock body scroll when menu is open + Escape to close
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    if (!menuOpen) return () => { document.body.style.overflow = ''; };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false); };
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
            className={`nav-hamburger${cream ? ' cream' : ''}${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
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
          <div className="nav-mobile-menu" onClick={(e) => e.stopPropagation()}>
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
