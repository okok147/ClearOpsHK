/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F7F3EA',
        cream: '#FCFAF5',
        charcoal: '#111111',
        muted: '#5E625E',
        slate: '#34413C',
        line: '#D8D2C4',
        accent: '#1F6B4E',
        accentDark: '#174D39',
        amber: '#C59B4E',
      },
      fontFamily: {
        sans: ['Noto Sans TC', 'system-ui', 'sans-serif'],
        ui: ['Inter', 'Noto Sans TC', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(17, 17, 17, 0.08)',
        note: '0 14px 30px rgba(17, 17, 17, 0.10)',
      },
    },
  },
  plugins: [],
}
