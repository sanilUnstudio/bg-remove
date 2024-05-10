/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'landing': '0px 0px 30px 5px #000000',
      },
      fontFamily: {
        'poppin': ['Poppins', 'sans-serif'],
        'inter': ['Inter Variable',"sans - serif"],
      },
      colors: {
        main: "#000",
        primary: "#494949",
        secondary: "#282828",
        "primary-blue": "#009EF6",
        // "primary-green" : '	#1DB954'
        "primary-green": '	#05F6AE',
        "footer-heading": "#B0B6BF",
        "footer-text":"#9CA3AF"
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    // themes: {
    //   light: {
    //     // ...
    //     colors: {
    //       primary: '#DFDAD0',
    //       secondary: '#fae27a',
    //       success: '#4B5563',
    //       content2: '#27272a',
    //       content3: '#3f3f46',
    //       content4: '#53535b',
    //       content1: '#18181c',
    //     }
    //   },
    //   dark: {
    //     // ...
    //     colors: {
    //       primary: '#000',
    //       secondary: '#282828',
    //       success: '#4B5563',
    //       content2: '#27272a',
    //       content3: '#3f3f46',
    //       content4: '#53535b',
    //       content1: '#18181c'
    //     }
    //   }
    //   // ... custom themes
    // }
  })],
};
