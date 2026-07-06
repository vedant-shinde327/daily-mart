/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FBF9F4',
        forest: {
          DEFAULT: '#166534',
          dark: '#0F4D26',
          light: '#1E8449',
        },
        amber: {
          DEFAULT: '#F5A524',
          dark: '#DB8A0D',
        },
        ink: '#20291F',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        500: '500',
        600: '600',
        700: '700',
        800: '800',
      },
      boxShadow: {
        soft: '0 6px 24px -6px rgba(22,101,52,0.15)',
        card: '0 2px 12px -2px rgba(32,41,31,0.10)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
}
