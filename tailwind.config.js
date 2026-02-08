/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#FEAEC9',
          softLilac: '#F3E0FE', 
          lavender: '#C6C0E6', 
          brandBlack: '#000100', 
        },
        fontFamily: {
          sans: ['IBM Plex Sans', 'Inter', 'sans-serif'],
          serif: ['Perfectly-Nineties', 'Playfair Display', 'serif'],
        },
        borderRadius: {
          'editorial': '24px',
        }
      },
    },
    plugins: [],
  }