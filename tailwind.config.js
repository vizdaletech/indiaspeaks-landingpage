/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme:{
    colors : {
      primary : "#1F38EA",
      secondary : "#FBBB40",
      black : "#000",
      white : "#ffff",
      transparent: 'transparent',

}
  },

  plugins: [],
}
