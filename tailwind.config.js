/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Warm charcoal "ink" for dark sections (from the logo: #433B38)
        ink: {
          DEFAULT: '#3E3631',
          900: '#2E2723',
          800: '#3E3631',
          700: '#4A413B',
          600: '#5C5049',
        },
        // Warm off-white for light sections
        cloud: {
          DEFAULT: '#F4F0EA',
          100: '#FCFAF6',
          200: '#E7E0D5',
        },
        // Brand orange (from the logo: #F15A25) — the single high-energy accent
        flame: {
          DEFAULT: '#F15A25',
          light: '#F6815A',
          dark: '#CC470F',
        },
        // Reserved strictly for positive metrics
        mint: {
          DEFAULT: '#2FB888',
          dark: '#0F9E6E',
        },
        slate: {
          ink: '#2E2926',
          soft: '#6E665F',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        container: '1180px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(62,54,49,0.05), 0 12px 40px -12px rgba(62,54,49,0.20)',
        cardHover: '0 1px 2px rgba(62,54,49,0.05), 0 24px 60px -16px rgba(241,90,37,0.28)',
        cta: '0 10px 30px -8px rgba(241,90,37,0.50)',
      },
      backgroundImage: {
        'transform-gradient':
          'linear-gradient(120deg, #F15A25 0%, #F89A4C 100%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}
