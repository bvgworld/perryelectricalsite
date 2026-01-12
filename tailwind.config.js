/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#2C64F2',
          DEFAULT: '#2C64F2',
        },
        accent: {
          dark: '#141E2C',
          light: '#F6F7FC',
          medium: '#C5CBD8',
          red: '#A01825',
          DEFAULT: '#141E2C',
        },
        secondary: {
          green: '#3BA676',
          DEFAULT: '#3BA676',
        },
        cta: {
          gray: '#D0D2D4',
          'gray-hover': '#BFC3C7',
          DEFAULT: '#D0D2D4',
        },
        tertiary: {
          light: '#E5E5E5',
          DEFAULT: '#E5E5E5',
        },
        text: {
          dark: '#141E2C',
          DEFAULT: '#141E2C',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        heading: ['Anton', 'system-ui', 'sans-serif'],
        accent: ['Anton', 'system-ui', 'sans-serif'],
      },
      spacing: {
        // 8pt spacing system
        '0': '0px',
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '5': '40px',
        '6': '48px',
        '8': '64px',
        '10': '80px',
        '12': '96px',
        '16': '128px',
        '20': '160px',
        '24': '192px',
      },
      borderRadius: {
        'DEFAULT': '4px',
        'md': '6px',
        'lg': '8px',
      },
    },
  },
  plugins: [],
}

