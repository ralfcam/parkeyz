/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00b8ff',
          dark: '#0099ff',
          light: '#e6f7ff',
        },
        secondary: {
          DEFAULT: '#1A73E8',
          dark: '#1557b0',
          light: '#f5f8ff',
        },
        accent: {
          DEFAULT: '#00D2FF',
          dark: '#00bfe6',
        },
        neutral: {
          DEFAULT: '#1A1A1A',
          dark: '#003366',
          darker: '#002347',
          light: '#f8fafc',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-1': ['4rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display-2': ['3.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-1': ['2.5rem', { lineHeight: '1.3', fontWeight: '700' }],
        'heading-2': ['2rem', { lineHeight: '1.35', fontWeight: '600' }],
        'heading-3': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-large': ['1.125rem', { lineHeight: '1.5' }],
        'body': ['1rem', { lineHeight: '1.5' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        'layout-sm': '1rem',
        'layout-md': '1.5rem',
        'layout-lg': '2rem',
        'layout-xl': '3rem',
        'section-sm': '3rem',
        'section-md': '4rem',
        'section-lg': '6rem',
      },
      borderRadius: {
        'btn': '9999px',
        'card': '1rem',
        'input': '0.75rem',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'card-hover': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      },
    },
  },
  plugins: [],
};