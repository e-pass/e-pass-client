/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: '#ED6337',
        'orange-light': '#F08F5D',
        text: '#212121',
        blue: '#4B52FC',
      },
    },
  },
  plugins: [],
}
