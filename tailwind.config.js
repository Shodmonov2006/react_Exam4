/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    screens: {
      'sm' : '320px',
      'md' : '640px',
      'lg' : '780px',
      'xl' : '1180px' 
    }
  },
  plugins: [],
}

