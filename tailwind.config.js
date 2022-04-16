module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      padding: '2rem'
    },
    extend: {
      backgroundImage: {
        'header-phone': "url('/src/assets/img/ico_phone.svg')",
      },
      colors: {
        primaryBlue: '#0D3896',
        primaryYellow: '#FFBB00'

      },
      boxShadow: {
        primary: '0 -1px #0d3896 inset'
      }
      
    },
  },
  plugins: [],
}
