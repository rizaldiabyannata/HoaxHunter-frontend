import animate from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx,vue}',
    './components/**/*.{js,jsx,vue}',
    './app/**/*.{js,jsx,vue}',
    './src/**/*.{js,jsx,vue}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        oxford_blue: {
          DEFAULT: '#1a2238',
          100: '#05070b',
          200: '#0a0e16',
          300: '#0f1422',
          400: '#151b2d',
          500: '#1a2238',
          600: '#354573',
          700: '#5069ad',
          800: '#8a9bc9',
          900: '#c4cde4',
        },
        tomato: {
          DEFAULT: '#ff6a3d',
          100: '#3f0f00',
          200: '#7e1e00',
          300: '#be2c00',
          400: '#fd3b00',
          500: '#ff6a3d',
          600: '#ff8864',
          700: '#ffa68b',
          800: '#ffc4b1',
          900: '#ffe1d8',
        },
        honeydew: {
          DEFAULT: '#eff8e2',
          100: '#344c12',
          200: '#699925',
          300: '#9ad34a',
          400: '#c4e696',
          500: '#eff8e2',
          600: '#f2f9e8',
          700: '#f5fbee',
          800: '#f9fcf4',
          900: '#fcfef9',
        },
        honolulu_blue: {
          DEFAULT: '#0077b6',
          100: '#001825',
          200: '#003049',
          300: '#00486e',
          400: '#005f93',
          500: '#0077b6',
          600: '#00a2f9',
          700: '#3bbaff',
          800: '#7cd1ff',
          900: '#bee8ff',
        },
        pacific_cyan: {
          DEFAULT: '#00b4d8',
          100: '#00242b',
          200: '#004756',
          300: '#006b81',
          400: '#008fab',
          500: '#00b4d8',
          600: '#12d8ff',
          700: '#4ee1ff',
          800: '#89ebff',
          900: '#c4f5ff',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [animate],
}
