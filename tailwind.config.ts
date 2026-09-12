import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: 'hsl(var(--brand))',
          fg: 'hsl(var(--brand-fg))',
          soft: 'hsl(var(--brand-soft))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          fg: 'hsl(var(--accent-fg))',
          hover: 'hsl(var(--accent-hover))',
        },
        gold: 'hsl(var(--gold))',
        support: 'hsl(var(--support))',
        surface: {
          DEFAULT: 'hsl(var(--surface))',
          alt: 'hsl(var(--surface-alt))',
          sunken: 'hsl(var(--surface-sunken))',
        },
        text: 'hsl(var(--text))',
        muted: 'hsl(var(--muted))',
        border: 'hsl(var(--border))',
        success: 'hsl(var(--success))',
        warning: 'hsl(var(--warning))',
        danger: 'hsl(var(--danger))',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        DEFAULT: 'var(--radius)',
        lg: 'var(--radius-lg)',
      },
      boxShadow: {
        flat: 'var(--shadow-flat)',
        card: 'var(--shadow-card)',
      },
      maxWidth: {
        container: '1170px',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
    },
  },
  plugins: [],
};

export default config;
