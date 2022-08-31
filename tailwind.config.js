/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    container: {
      center: true,
      // padding: '2rem',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      backgroundImage: {
        'lady': "url('./assets/lady.svg')",
        
      },
      colors: {
        brightOrange: 'rgba(255, 103, 0, 1)',
        paleGrey: 'rgba(235, 235, 235, 1)',
        darkGrey: 'rgba(192, 192, 192, 1)',
        paleBlue: 'rgba(58, 110, 165, 1)',
        darkBlue: 'rgba(0, 78, 152, 1)',
        lightGrey: 'rgba(240, 240, 240, 1)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}