/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      darkBlue100: "#609ED4",
      darkBlue200: "#356EA9",
      darkBlue300: "#0A3871",
      darkBlue400: "#072B61",
      darkBlue500: "#052051",
      lightBlue100: "#F3F5FC",
      lightBlue200: "#EFF1FA",
      lightBlue300: "#E9ECF8",
      lightBlue400: "#AAB2D5",
      lightBlue500: "#757FB2",
      gray100: "#CED4DA",
      gray200: "#ADB5BD",
      gray300: "#868E96",
      gray400: "#495057",
      gray500: "#343A40",
    },
    extend: {
      screens: {
        xxl: "1440px",
      },
    },
  },
  plugins: [],
};
