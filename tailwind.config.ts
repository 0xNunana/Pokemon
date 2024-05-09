import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main': "url('/bg.png')",
      
      },
      fontFamily:{
        clash:['clash','sans-serif'],
        general:['general','sans-serif']
      },
      colors:{
        'pokepink':'#E85382',
        'pokegold':'#E1A725',
        'pokeblue':'#39BADF'
      }
    },
  },
  plugins: [],
};
export default config;
