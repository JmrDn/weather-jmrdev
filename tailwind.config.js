/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        primary:'#303030',
        'input-bg': 'rgba(174,174,174,0.1)',
        'yellow-rgba' : 'rgba(230,225,93, 0.2)',
      },
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(45deg, #00D4C7, #E6E15D)',
      },
      fontFamily:{
        kanit: ['Kanit', 'sans-serif'],
      },
      borderRadius:{
        'custom-br': '20% 30% 80% 10% ',
      },
    
    },
  },
  plugins: [],
}