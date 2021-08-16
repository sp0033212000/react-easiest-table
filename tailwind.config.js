/**
 *
 * @type {import("node_modules/@types/tailwindcss/tailwind-config").TailwindConfig}
 */
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#3D9CF3",
        green: "#4BDB9B",
        red: "#FF624D",
        grey1: "#3E3A49",
        grey2: "#838288",
        grey3: "#BDBCBF",
        grey4: "#E6E6E6",
        grey5: "#F2F3F4",
        grey6: "#F8F9FB",
        "bg-blue": "#F4F8FB",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
