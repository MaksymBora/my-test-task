/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brightColor: '#ab6b2e',
        backgroundColor: '#fde9cc',
        darkBlueColor: '#0B44CD',
        lightBlueColor: '#3470FF',
        darkFontColor: '#121417',
        logoColor: '#2b99de',
        cardOptionsColor: 'rgba(18, 20, 23, 0.50)',
        labelsColor: '#8A8A89',
        borderInputColor: 'rgba(138, 138, 137, 0.20)',
        backdropColor: 'rgba(0, 0, 0, 0.75)',
        modalRentalColor: '#363535',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
