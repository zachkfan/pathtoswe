import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'concrete-gray': '#f3f3f3',
        'black-gray': '#222222'
      },
      fontFamily: {
        sans: ['var(--font-nunito)'],
        serif: ['var(--font-playfair-display)'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        fadeInFromLeft: {
          '0%': { opacity: '0', transform: 'translateX(-100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInFromRight: {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },

      },
      animation: {
        fadeInFromLeft1: 'fadeInFromLeft 1s ease-out',
        fadeInFromLeft2: 'fadeInFromLeft 2s ease-out',
        fadeInFromRight: 'fadeInFromRight 0.5s ease-out',
      },
      dropShadow: {
        'around': '0px 0px 15px rgba(0, 0, 0, 0.1)',
      },
      spacing: {
        '18': '4.5rem',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;