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
      'highlightSoft': '#E6EFF5',
      'paper': '#FFFFFF',
      'ink': '#0A0A0A',
      'bg': '#FFFFFF',
      'black': '#000000',
      'white': '#FFFFFF',
      'bg2': '#F5F6F8',
      'line': '#E6E8EC',
      'light': '#6B7280',
      'muted': '#9CA3AF',
      'success': '#2FAD02',
      'error': '#B00020',
      'warning': '#D38C22',
      'transparent': 'transparent',
    },
    fontFamily: {
      syne: ['Syne', 'sans-serif'],
      urbanist: ['Urbanist', 'sans-serif'],
    },
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
