module.exports = {
  content: [
    './public/**/*.{html,js,css}',
    './views/*.pug'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
