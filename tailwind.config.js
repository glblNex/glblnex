/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'highlight': '#005B97',
      'highlight2': '#00385D',
      'bg': '#111111',
      'bg2': '#F7F7F7',
      'light': '#B5B5B5',
      'success': '#2FAD02',
      'error': '#940225',
      'warning': '#D38C22',
    },
    fontFamily: {
      sans: ['Syne', 'sans-serif'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
