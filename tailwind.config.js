module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: {
          600: '#FF0000',
        },
        green: {
          600: '#00FF00', 
        },
        blue: {
          600: '#00FFFF', 
        },
        pink: {
          600: '#FF00FF', 
        },
        yellow:{
          600: '#FFFF00', 
        },
        gray: {
          600: '#D9D9D9'
        },
        custom: {
          primary: "var(--color-primary)",
          secondary: "var(--color-secondary)",
          tertiary: "var(--color-tertiary)",
          primaryAccent: "var(--color-primary-accent)",
          secondaryAccent: "var(--color-secondary-accent)",
          tertiaryAccent: "var(--color-tertiary-accent)",
          quarterAccent: "var(--color-quarter-accent)",
          quinaryAccent: "var(--color-quinary-accent)",
          senaryAccent: "var(--color-senary-accent)",
        }
      },
      height:{
        screenNav: "calc(100vh - 5rem)",
        180: "180px"
      },
      width:{
        180: "180px"
      },
      borderWidth:{
        3: "3px"
      },
      fontFamily: {
        kanit: ['Kanit'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
