import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': 'var(--bg-dark)',
        'bg-dark-2': 'var(--bg-dark-2)',
        'bg-cream': 'var(--bg-cream)',
        'bg-warm': 'var(--bg-warm)',
        surface: 'var(--surface)',
        'surface-3': 'var(--surface-3)',
        gold: 'var(--gold)',
        'gold-light': 'var(--gold-light)',
        'gold-bright': 'var(--gold-bright)',
        ember: 'var(--ember)',
        'ember-light': 'var(--ember-light)',
        'text-light': 'var(--text-light)',
        'text-light-2': 'var(--text-light-2)',
        'text-light-3': 'var(--text-light-3)',
        'text-dark': 'var(--text-dark)',
        'text-dark-2': 'var(--text-dark-2)',
        'text-dark-3': 'var(--text-dark-3)',
        'text-dark-4': 'var(--text-dark-4)',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
