/** @type {import('tailwindcss').Config} */

const brandColors = {
  background: '#050505',
  surface: '#0B0B10',
  muted: '#16161F',
  border: '#23232F',
  primary: '#F5F5F5',
  secondary: '#9FA1AA',
  accent: '#2FF5D3',
};

const font = ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'];

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: font,
    },
    extend: {
      colors: brandColors,
      keyframes: {
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'super-bounce': {
          '0%': { transform: 'scale(1, 1) translateY(0)' },
          '10%': { transform: 'scale(1.1, 0.9) translateY(0)' },
          '30%': { transform: 'scale(0.9, 1.1) translateY(-100px)' },
          '50%': { transform: 'scale(1, 1) translateY(0)' },
          '57%': { transform: 'scale(1, 1) translateY(-7px)' },
          '64%': { transform: 'scale(1, 1) translateY(0)' },
          '100%': { transform: 'scale(1, 1) translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'super-bounce': 'bounce 2s ease infinite',
        'fade-in': 'fade-in 2s',
      },
      gridColumn: {
        'span-14': 'span 14 / span 14',
      },
    },
  },
  plugins: [],
};
