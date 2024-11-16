/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/**/*.{jsx,js}',
    './src/**/*.{jsx,js}',
    './src/**.{jsx,js}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        cyberblue: {
          "primary": "#40e0d0",
          "secondary": "rgb(225, 0, 255)",
          "accent": "#3ab1a5",
          "neutral": "#222",
          "base-100": "#1d232a",
        },
      },
      "light", 
      "dark", 
      "cupcake", 
      "cyberpunk"]
  }
}

