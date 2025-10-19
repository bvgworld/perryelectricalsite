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
          blue: '#1A73AA',
          DEFAULT: '#1A73AA',
        },
        accent: {
          dark: '#0F2D40',
          DEFAULT: '#0F2D40',
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
          dark: '#333333',
          DEFAULT: '#333333',
        },
      },
      fontFamily: {
        sans: ['Source Sans 3', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
        accent: ['Oswald', 'system-ui', 'sans-serif'],
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

