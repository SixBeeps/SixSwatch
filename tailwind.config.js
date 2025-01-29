/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'dark': '#0c131e',
        'darkish': '#1c232e',
        'darkishish': '#2c333e',
        'jade': '#009966',
        'lime': '#00ff00',
        'red': '#ff0000',
        'white': '#ffffff'
      }
    },
    fontSize: {
      'lg': '24pt',
    },
    letterSpacing: {
      widest: '0.5em',
    },
  },
  plugins: [],
}
