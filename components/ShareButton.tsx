'use client';
import { useState, useEffect, useRef } from 'react';

type Props = { title: string; text?: string };

const ITEM: React.CSSProperties = {
  display: 'block',
  width: '100%',
  padding: '10px 16px',
  fontFamily: 'var(--font-mono)',
  fontSize: '10px',
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: 'var(--text-dark)',
  textDecoration: 'none',
  background: 'none',
  border: 'none',
  borderBottom: '1px solid var(--line-faint)',
  cursor: 'pointer',
  textAlign: 'left',
  transition: 'background 0.15s',
  whiteSpace: 'nowrap',
};

export function ShareButton({ title, text }: Props) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [pageUrl, setPageUrl] = useState('');
  const wrapRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click or Escape
  useEffect(() => {
    if (!open) return;
    const onMouse = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onMouse);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onMouse);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  async function handleClick() {
    const url = window.location.href;
    // Mobile: use native share sheet
    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
      } catch (e) {
        if ((e as Error).name !== 'AbortError') {
          setPageUrl(url);
          setOpen((o) => !o);
        }
      }
    } else {
      // Desktop: open dropdown
      setPageUrl(url);
      setOpen((o) => !o);
    }
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopied(true);
      setTimeout(() => { setCopied(false); setOpen(false); }, 1800);
    } catch { /* blocked */ }
  }

  const enc = encodeURIComponent(pageUrl);
  const encTitle = encodeURIComponent(title);

  const PLATFORMS = [
    { label: 'WhatsApp',   href: `https://wa.me/?text=${encTitle}%20${enc}` },
    { label: 'LinkedIn',   href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc}` },
    { label: 'X / Twitter', href: `https://x.com/intent/tweet?text=${encTitle}&url=${enc}` },
  ];

  return (
    <div ref={wrapRef} style={{ position: 'relative', flexShrink: 0 }}>
      <button
        onClick={handleClick}
        aria-label="Share this page"
        aria-expanded={open}
        aria-haspopup="menu"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: open ? 'var(--gold)' : 'var(--text-dark)',
          padding: '10px 16px',
          border: `1px solid ${open ? 'var(--gold)' : 'var(--line-dark)'}`,
          background: 'var(--surface)',
          cursor: 'pointer',
          transition: 'color 0.2s, border-color 0.2s',
        }}
      >
        Share ↗
      </button>

      {open && (
        <div
          role="menu"
          style={{
            position: 'absolute',
            top: 'calc(100% + 6px)',
            right: 0,
            background: 'var(--surface)',
            border: '1px solid var(--line-dark)',
            minWidth: '164px',
            zIndex: 200,
            boxShadow: '0 4px 20px rgba(15,15,13,0.10)',
          }}
        >
          {PLATFORMS.map((p) => (
            <a
              key={p.label}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              role="menuitem"
              style={ITEM}
              onClick={() => setOpen(false)}
            >
              {p.label}
            </a>
          ))}
          <button
            role="menuitem"
            onClick={copyLink}
            style={{
              ...ITEM,
              borderBottom: 'none',
              color: copied ? 'var(--gold)' : 'var(--text-dark)',
            }}
          >
            {copied ? 'Copied ✓' : 'Copy link'}
          </button>
        </div>
      )}
    </div>
  );
}
