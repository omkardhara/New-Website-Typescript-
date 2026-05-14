// ─────────────────────────────────────────────────────────────
// TIMELINE ICONS — illustrated SVG per event tag
// Ported from the original CRA TimelineIcons.jsx
// ─────────────────────────────────────────────────────────────

type Props = { tag: string; size?: number; color?: string };

export function TimelineIcon({ tag, size = 18, color = 'var(--gold)' }: Props) {
  const base = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 1.25,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    style: { display: 'block', flexShrink: 0 },
    'aria-hidden': true,
  };

  switch (tag) {
    case 'Genesis':
      return (
        <svg {...base}>
          <path d="M3 21V9l9-6 9 6v12" />
          <rect x="9" y="14" width="6" height="7" />
          <circle cx="12" cy="9.5" r="1.5" />
          <path d="M12 7.5V6.5" />
          <path d="M10.1 8.1l-.7-.7" />
          <path d="M13.9 8.1l.7-.7" />
        </svg>
      );
    case 'Foundation':
      return (
        <svg {...base}>
          <rect x="8" y="9" width="8" height="12" rx="1.5" />
          <path d="M10 9V7h4v2" />
          <circle cx="12" cy="5" r="1" />
          <path d="M14.5 5h2.5M17 4v2" />
          <circle cx="10.5" cy="13" r="0.5" fill={color} strokeWidth="0" />
          <circle cx="12" cy="13" r="0.5" fill={color} strokeWidth="0" />
          <circle cx="13.5" cy="13" r="0.5" fill={color} strokeWidth="0" />
        </svg>
      );
    case 'Cinema':
      return (
        <svg {...base}>
          <rect x="2" y="7" width="20" height="14" rx="1.5" />
          <path d="M2 11h20" />
          <path d="M6.5 7l1.5-4" />
          <path d="M12 7l1.5-4" />
          <path d="M17.5 7l1.5-4" />
          <path d="M10 15.5l5-2.5-5-2.5v5z" fill={color} stroke="none" />
        </svg>
      );
    case 'Origin':
      return (
        <svg {...base}>
          <rect x="2" y="16" width="20" height="5" rx="1" />
          <path d="M9 16v-5" />
          <path d="M9 13c0 0 2.5-3.5 6-3" />
          <path d="M9 11c0 0-2-2.5-1.5-5" />
          <circle cx="15" cy="10" r="1" fill={color} strokeWidth="0" />
          <circle cx="7.5" cy="6" r="1" fill={color} strokeWidth="0" />
        </svg>
      );
    case 'Activism':
      return (
        <svg {...base}>
          <path d="M9.5 9a3 3 0 1 1 3.5 2.9c-.8.2-1 .8-1 1.6" />
          <circle cx="12" cy="17" r=".8" fill={color} strokeWidth="0" />
          <ellipse cx="12" cy="21" rx="5.5" ry="1.5" />
        </svg>
      );
    case 'International':
      return (
        <svg {...base}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3c-3.5 4-3.5 14 0 18" />
          <path d="M12 3c3.5 4 3.5 14 0 18" />
          <path d="M6 6.5c3-1.5 9-1.5 12 0" strokeDasharray="2 1.5" />
          <circle cx="18" cy="6.5" r="1" fill={color} strokeWidth="0" />
        </svg>
      );
    case 'Expansion':
      return (
        <svg {...base}>
          <rect x="2" y="11" width="5" height="10" rx="0.5" />
          <rect x="9.5" y="7" width="5" height="14" rx="0.5" />
          <rect x="17" y="14" width="5" height="7" rx="0.5" />
          <path d="M2 8l4-4 5.5 4 4-3 4 1.5" />
        </svg>
      );
    case 'Inflection':
      return (
        <svg {...base}>
          <circle cx="7.5" cy="12" r="4.5" />
          <circle cx="7.5" cy="12" r="1.5" fill={color} strokeWidth="0" />
          <path d="M11.5 12H21" />
          <path d="M18 12v3" />
          <path d="M21 12v2.5" />
        </svg>
      );
    case 'Recognition':
      return (
        <svg {...base}>
          <circle cx="12" cy="9" r="5" />
          <circle cx="12" cy="9" r="2" fill={color} strokeWidth="0" />
          <path d="M8.8 13.8L7.5 21l4.5-2.5 4.5 2.5-1.3-7.2" />
          <path d="M12 4V2.5M15.5 5l1-1.5M8.5 5l-1-1.5" />
        </svg>
      );
    case 'Reinvention':
      return (
        <svg {...base}>
          <circle cx="12" cy="18.5" r="2.5" />
          <circle cx="5.5" cy="10" r="2" />
          <circle cx="18.5" cy="10" r="2" />
          <path d="M7.5 10c1.5 2.5 2.5 5.5 4.5 8.5" />
          <path d="M16.5 10c-1.5 2.5-2.5 5.5-4.5 8.5" />
          <path d="M7.5 9.5c1.5-4 7.5-4 9 0" />
        </svg>
      );
    case 'Community':
      return (
        <svg {...base}>
          <circle cx="12" cy="5" r="2.5" />
          <path d="M8 21v-2a4 4 0 0 1 8 0v2" />
          <circle cx="4.5" cy="8.5" r="2" />
          <path d="M2 21v-1.5a3.5 3.5 0 0 1 5.3-3" />
          <circle cx="19.5" cy="8.5" r="2" />
          <path d="M22 21v-1.5a3.5 3.5 0 0 0-5.3-3" />
        </svg>
      );
    case 'Adventure':
      return (
        <svg {...base}>
          <rect x="3" y="9" width="14" height="9" rx="2" />
          <path d="M17 12h3.5v5a1 1 0 0 1-1 1H17" />
          <path d="M5 9V7a2 2 0 0 1 2-2h8l2 4" />
          <circle cx="7.5" cy="19.5" r="1.8" />
          <circle cx="14.5" cy="19.5" r="1.8" />
          <path d="M2 22h20" strokeDasharray="3 2" />
        </svg>
      );
    case 'Installation · Activism':
      return (
        <svg {...base}>
          <rect x="3" y="3" width="7" height="7" rx="0.5" />
          <rect x="14" y="3" width="7" height="7" rx="0.5" />
          <rect x="3" y="14" width="7" height="7" rx="0.5" />
          <circle cx="17.5" cy="17.5" r="4" />
          <path d="M17.5 14v1.5M17.5 19.5V21M14 17.5h1.5M19.5 17.5H21" />
          <circle cx="17.5" cy="17.5" r="1.2" fill={color} strokeWidth="0" />
        </svg>
      );
    case 'Present':
      return (
        <svg {...base}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="1.2" fill={color} strokeWidth="0" />
          <path d="M12 12L9.5 7.5 12 9.5z" fill={color} stroke="none" />
          <path d="M12 12l2.5 4.5L12 14.5z" />
          <path d="M12 3v1.5M12 19.5V21M3 12h1.5M19.5 12H21" />
        </svg>
      );
    default:
      return (
        <svg {...base}>
          <circle cx="12" cy="12" r="5" />
        </svg>
      );
  }
}
