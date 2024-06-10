/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 15s linear infinite",
        "marquee-backward": "marquee-backward 15s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { left: "0%" },
          "100%": { left: "-100%" },
        },
        "marquee-backward": {
          "0%": { left: "-100%" },
          "100%": { left: "0%" },
        },
      },
    },
  },
  plugins: [],
};
