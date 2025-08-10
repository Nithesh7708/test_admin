/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bakery: {
          50: '#fef7f0',
          100: '#feeee0',
          200: '#fdd9b5',
          300: '#fbc085',
          400: '#f89f55',
          500: '#f58220',
          600: '#e16b1a',
          700: '#c7541a',
          800: '#a6451b',
          900: '#8b3a1a',
        },
        admin: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      }
    },
  },
  plugins: [],
}