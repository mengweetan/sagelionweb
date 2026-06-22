/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#564A40',
          900: '#463C34',
          800: '#564A40',
          700: '#645749',
          600: '#76685A',
        },
        cloud: {
          DEFAULT: '#E9E1D2',
          100: '#F3EEE4',
          200: '#D6CBB8',
        },
        flame: {
          DEFAULT: '#F15A25',
          light: '#F88A57',
          dark: '#B23B0C',
        },
        mint: {
          DEFAULT: '#2FB888',
          dark: '#0F9E6E',
        },
        slate: {
          ink: '#2C2722',
          soft: '#5C544B',
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
        card: '0 1px 2px rgba(86,74,64,0.05), 0 12px 40px -12px rgba(86,74,64,0.18)',
        cardHover: '0 1px 2px rgba(86,74,64,0.05), 0 24px 60px -16px rgba(241,90,37,0.26)',
        cta: '0 10px 30px -8px rgba(241,90,37,0.45)',
      },
      backgroundImage: {
        'transform-gradient': 'linear-gradient(120deg, #F15A25 0%, #F89A4C 100%)',
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
