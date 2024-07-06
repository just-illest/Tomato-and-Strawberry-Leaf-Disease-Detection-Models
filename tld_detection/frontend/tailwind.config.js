/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors:{
      'indigo':'#5CDB95',
      'teal':'#8EE4AF',
      'neutral':'#EDF5E1',
      'emerald':'#379683',
      'slate':'#05386B',
      'black':'#000000',
      'white' : '#FFFFFF',
    },
    extend:
    {
      fontFamily: {
        'helvetica': ['Helvetica Neue', 'sans-serif']
      },
    },
  },
  plugins: [],
}

