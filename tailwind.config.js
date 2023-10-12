module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "header-desktop": "url('/images/bg-header-desktop.svg')",
        "header-mobile": "url('/images/bg-header-mobile.svg')",
      },
    },
    colors: {
      primary: "hsl(180, 29%, 50%)",
      grayishBackground: "hsl(180, 52%, 96%)",
      grayishFilter: "hsl(180, 31%, 95%)",
      darkGrayishCyan: "hsl(180, 8%, 52%)",
      veryDarkGrayishCyan: "hsl(180, 14%, 20%)",
      white: "#fff",
      gray: "#a1a1aa",
      black: "#000000",
    },
  },
  plugins: [],
};

