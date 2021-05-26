module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            p: {
              'font-size': '16px',
              color: '#C6D5DB'
            },
            h1: {
              color: 'white'
            },
            h2: {
              color: 'white'
            },
            h3: {
              color: 'white'
            },
            h4: {
              color: 'white'
            },
            strong: {
              color: 'white'
            }
          },
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}
