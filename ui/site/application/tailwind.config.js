/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {      
      colors: {
      // Configure your color palette here
       'custom-black':'#0D0D0D',
       'custom-color-1':'#3F2140',
       'custom-color-2':'#7E49F2',
       'custom-color-3':'#262473',
       'custom-color-4':'#222A59',
      },},
  },
  plugins: [],
}