/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brightColor: '#ab6b2e',
        backgroundColor: '#fde9cc',
        darkBlueColor: '#0B44CD',
        lightBlueColor: '#3470FF',
        darkFontColor: '#121417',
        logoColor: '#2b99de',
      },
    },
  },
  plugins: [],
};
