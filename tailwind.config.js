/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#041562",
          secondary: "#aa21aa",
          accent: "#11468F",
          neutral: "#1A1A40",
          "base-100": "#ffffff",

        },
      },

      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
