import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark cinematic palette
        dark: '#0A0A0F',
        surface: '#13131A',
        border: '#252530',
        muted: '#6B6B7A',
        // Gold
        gold: '#C9A84C',
        'gold-light': '#E8C76A',
        // Light
        cream: '#F5F0E8',
        // Legacy (kept for compatibility)
        navy: '#1C1C2E',
        charcoal: '#2D2D2D',
        'navy-light': '#2A2A45',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #E8C76A 50%, #C9A84C 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
