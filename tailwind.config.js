/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5CB3E6', // Light Blue from logo
        secondary: '#0A2540', // A darker blue for contrast
        light: '#FFFFFF', // White
        dark: '#1F2937', // Dark Gray for text
        accent: '#FBBF24', // A vibrant yellow/gold for accents
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 15px 0 rgba(92, 179, 230, 0.5)',
      },
    },
  },
  plugins: [],
};
