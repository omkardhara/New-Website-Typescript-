'use client';
import { useState } from 'react';

type Props = { title: string; text?: string };

export function ShareButton({ title, text }: Props) {
  const [status, setStatus] = useState<'idle' | 'copied' | 'done'>('idle');

  async function handleShare() {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
        setStatus('done');
      } catch (e) {
        if ((e as Error).name === 'AbortError') return;
        await copyLink(url);
      }
    } else {
      await copyLink(url);
    }
    setTimeout(() => setStatus('idle'), 2200);
  }

  async function copyLink(url: string) {
    try {
      await navigator.clipboard.writeText(url);
      setStatus('copied');
    } catch {
      // clipboard blocked — nothing to do
    }
  }

  const label =
    status === 'copied' ? 'Link copied ✓' :
    status === 'done'   ? 'Shared ✓' :
    'Share';

  return (
    <button
      onClick={handleShare}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        fontFamily: 'var(--font-mono)',
        fontSize: '10px',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: status !== 'idle' ? 'var(--gold)' : 'var(--text-dark)',
        padding: '10px 16px',
        border: `1px solid ${status !== 'idle' ? 'var(--gold)' : 'var(--line-dark)'}`,
        background: 'var(--surface)',
        cursor: 'pointer',
        transition: 'color 0.2s, border-color 0.2s',
        flexShrink: 0,
      }}
      aria-label="Share this page"
    >
      {label}
    </button>
  );
}
