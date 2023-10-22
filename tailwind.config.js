/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        wavy: "url('/src/assets/wavy.svg')",
        dots: "url('/src/assets/dots.svg')",
        scribbles: "url('/src/assets/scribbles.svg')",
        maze: "url('/src/assets/maze.svg')",
        streaks: "url('/src/assets/streaks.svg')",
        spiral: "url('/src/assets/spiral.svg')",
      },
    },
  },
  plugins: [],
};
