/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        slategray: "#787486",
        black: "#000",
        lightcoral: {
          "100": "#d8727d",
          "200": "rgba(216, 114, 125, 0.1)",
        },
        gray: "#0d062d",
        indianred: "#d25b68",
        mistyrose: "#f4d7da",
        blueviolet: {
          "100": "#5030e5",
          "200": "rgba(80, 48, 229, 0.08)",
        },
        darkseagreen: "rgba(131, 194, 157, 0.2)",
        mediumseagreen: "#68b266",
        silver: "#c4c4c4",
        burlywood: "rgba(223, 168, 116, 0.2)",
        peru: "#d58d49",
        cornflowerblue: "#76a5ea",
        orange: "#ffa500",
        gold: "rgba(252, 214, 74, 0.7)",
        gainsboro: "#e0e0e0",
        dimgray: "#625f6d",
        whitesmoke: "#f5f5f5",
        thistle: "#e4ccfd",
        lightgreen: "#7ac555",
      },
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
