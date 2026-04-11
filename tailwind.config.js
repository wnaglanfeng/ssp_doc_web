/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'warp-1': 'warp 0.6s ease-out forwards',
        'warp-2': 'warp 0.8s ease-out 0.1s forwards',
        'warp-3': 'warp 1s ease-out 0.2s forwards',
        'speed-line': 'speedLine 0.5s ease-out forwards',
        'rocket-flame-1': 'rocketFlame 0.8s ease-out infinite',
        'rocket-flame-2': 'rocketFlame 1s ease-out 0.1s infinite',
        'rocket-flame-3': 'rocketFlame 1.2s ease-out 0.2s infinite',
        'particle-1': 'particle 0.6s ease-out infinite',
        'particle-2': 'particle 0.8s ease-out 0.2s infinite',
        'particle-3': 'particle 1s ease-out 0.4s infinite',
      },
      keyframes: {
        warp: {
          '0%': { transform: 'translateX(0) scaleX(0.5)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateX(-20px) scaleX(2)', opacity: '0' },
        },
        speedLine: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateX(-200%)', opacity: '0' },
        },
        rocketFlame: {
          '0%, 100%': { transform: 'translateY(-50%) scaleX(0.8)', opacity: '0.6' },
          '50%': { transform: 'translateY(-50%) scaleX(1.2)', opacity: '1' },
        },
        particle: {
          '0%': { transform: 'translate(0, -50%) scale(1)', opacity: '1' },
          '100%': { transform: 'translate(60px, calc(-50% + var(--tw-translate-y, 0px))) scale(0)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}