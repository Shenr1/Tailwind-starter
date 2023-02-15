/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        viGreen:{
        light2: '#6dba3d',
        light1: '#6dba3d',
        DEFAULT: '#93c90f',
        dark1: '#93c90f',
        dark2: '#93c90f'
        },
        vi:{
          light: '#ff7ce5',
          DEFAULT: '#0080b9',
          dark: '#ff16d1'
        }
      },
      fontSize: {
        'xxl': ['10rem' , 'initial'],
        '2xxl': ['12rem' , 'initial'],
        '3xxl': ['14rem' , 'initial'],
        '4xxl': ['16rem' , 'initial'],
        '5xxl': ['18rem' , 'initial'],
        '6xxl': ['20rem' , 'initial']
      },
      fontFamily: {
        'Impact': 'Impact, Arial, sans-serif',
        'Montserrat': 'Montserrat, Arial, sans-serif',
        'Sans': 'Noto Sans SC, Arial, sans-serif',
        'OpenSans': 'Open Sans, Arial, sans-serif'
      },
      backgroundImage: {
        'p02rBannr': "url('https://cdn.shopify.com/s/files/1/0067/6950/8415/files/banner_bg.jpg?v=1676428088')",
      },
      maxWidth: {
        '1/2': '50%',
        '1/3': '33.3333333%',
        '1/4': '25%',
        '1/5': '20%',
        'default': '1400px',
      },
      inset: {
        '1/5': '20%',
        '1/6': '16.666666%',
        '1/8': '12.5%',
        '-1/5': '-20%',
        '-1/6': '-16.666666%',
        '-1/8': '-12.5%',
       }
    },
  },
  plugins: [],
}
