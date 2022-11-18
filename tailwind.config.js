module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["'Inter'", "sans-serif"],
      },
      colors: {
        main: {
          default: "#0c0c0c",
        },
      },
    },
  },
  plugins: [],
};
