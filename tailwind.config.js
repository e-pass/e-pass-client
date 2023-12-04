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
        white: '#fff',
        'grey-80': '#AAA9A8',
        'grey-100': '#726F6E',
        'error': '#FC6767',
      },
    },
    fontSize: {
      sm: '13px',
      base: '15px',
      xl: '17px',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    }
  },
  plugins: [],
}
