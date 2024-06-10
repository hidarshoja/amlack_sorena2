/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,vue,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'gold1' : '#d3b964',
        "gold2" :"#e6c874",
        "gold3" :"#c6ad5c",
        "gold4" :"#c6ad5c",
        "gold5" :"#9b8442",
        "gold6" :"#a48444",
        "bg1" :"#29313d",
        "bg2" :"#25313d",
        "bg3" : "#5909B5",
        "text1" :"#ffcf9d",
        "text2" :"#ffcf9d",
        "hover1" :"#ffcf9d",
        "hover2" :"#ffcf9d",
     
      }
    },
  },
  plugins: [],
}

