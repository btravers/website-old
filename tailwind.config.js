module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: false,
  theme: {
    extend: {
      backgroundImage: () => ({
        main: "url('/img/background.jpg')",
      }),
    },
  },
  variants: {},
  plugins: [],
}
