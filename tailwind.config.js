/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Nunito: ["Nunito", "sans-serif"]
      },
      backgroundImage: {
        "hero-landing": "url(/landing.svg)"
      },
      colors: {
        "azul-botao": "#14c3d6",
        "azul-botao-hover": "#17d6eb"
      }
    },
  },
  plugins: [],
};

