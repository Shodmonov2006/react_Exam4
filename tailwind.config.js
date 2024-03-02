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
      'w' : "50px",
      'sm' : '300px',
      'ssm' : "400px",
      'md' : '640px',
      'lg' : '780px',
      'xl' : '1025px', 
      '2xl' : '1200px' 
    }
  },
  plugins: [],
}

