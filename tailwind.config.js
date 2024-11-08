/** @type {import('tailwindcss').Config} */

const tangColors = {
  primary: '#FF934F',
  background: '#04090E',
  accent: '#EFECCA',
  accent2: '#665648',
};

const tangColors2 = {
  primary: '#233878',
  background: '#93C5FD',
  accent: '#EFECCA',
  accent2: '#665648',
};

const pinkColors = {
  primary: '#F42272',
  background: '#F397D6',
  accent: '#D7B8F3',
  accent2: '#B8B8F3',
};

const seaMossColors = {
  primary: '#157A6E',
  background: '#77B28C',
  accent: '#C2C5BB',
  accent2: '#499F68',
};

const forestColors = {
  primary: '#0A2E36',
  background: '#FBCAEF',
  accent: '#EABE7C',
  accent2: '#F85A3E',
};

const blueColors = {
  background: '#011627',
  primary: '#F3F9D2',
  accent: '#3E78B2',
  accent2: '#E88D67',
};

const font = 'Montserrat';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: [font],
    },
    extend: {
      colors: tangColors2,
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
