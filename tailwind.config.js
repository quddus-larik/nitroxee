import { heroui } from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backdropBlur: {
        md: '10px',
      },
      keyframes: {
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'spin-slow': 'spin-slow 10s linear infinite',
      },
      screens: {
        xs: '320px',
        sm: '425px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        'dev-iphone5': '320px',
        'dev-iphone678': '375px',
        'dev-iphone678plus': '414px',
        'dev-iphonex': '375px',
        'dev-ipad': '768px',
        'dev-ipadpro': '1024px',
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

module.exports = config
