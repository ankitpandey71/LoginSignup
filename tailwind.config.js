/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        circular: ["Circular", "sans-serif"],
        humane: ["Humane"],
      },
      backgroundImage: {
        "custom-radial-gradient":
          "radial-gradient(circle, rgba(62, 62, 62, 1) 80%, rgba(18, 18, 18, 1) 100%)",
        "custom-linear-gradient":
          "linear-gradient(135deg, rgba(18, 18, 18, 1) 5%, rgba(62, 62, 62, 1) 60%, rgba(18, 18, 18, 1) 100%)",
      },
    },
  },
  plugins: [],
};
