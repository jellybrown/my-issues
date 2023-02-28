/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      sm: '1.2rem',
      base: '1.4rem',
      xl: '1.6rem',
      '2xl': '1.8rem',
      '3xl': '2rem',
      '4xl': '2.4rem',
    },
    extend: {
      colors: {
        primary: 'rgb(30 41 59)',
        'gray-light': '#E8E8E8',
        'gray-light-2': '#F5F5F5',
        'gray-light-3': '#B4B4B4',
        'gray-light-4': '#F2F2F2',
        'gray-deep': '#7A7A7A',
        'gray-deep-2': '#C8C8C8',
        green: '#60BBA7',
        red: '#E46A6A',
      },
    },
  },
  plugins: [],
};
