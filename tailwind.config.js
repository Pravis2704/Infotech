/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#0B0B0D',
          900: '#111113',
          850: '#171717',
          800: '#1E1E24',
          700: '#2A2A32',
          600: '#3E3E47',
        },
        gold: {
          50: '#FDFCF7',
          100: '#FAF4E5',
          200: '#F3E5C1',
          300: '#E8C77E',
          400: '#DAAA46',
          500: '#C69235',
          600: '#A87624',
          700: '#865A1A',
          800: '#644115',
          900: '#462C0E',
        },
        cream: {
          50: '#FFFFFF',
          100: '#FCFAF6',
          200: '#FAF8F3',
          300: '#F3EFE6',
          400: '#E9E2D2',
        },
        darkgrey: {
          DEFAULT: '#292929',
          muted: '#636260',
          light: '#8E8D8A',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(198, 146, 53, 0.3)',
        'gold-sm': '0 2px 10px -2px rgba(198, 146, 53, 0.25)',
        'premium': '0 20px 40px -15px rgba(23, 23, 23, 0.08)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F4DA96 0%, #C69235 50%, #9C6C1B 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #C69235 0%, #F5DF9E 50%, #C69235 100%)',
        'dark-gradient': 'linear-gradient(180deg, #171717 0%, #111113 100%)',
      }
    },
  },
  plugins: [],
}
