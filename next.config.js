const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');
const withFonts = require('next-fonts');
const withImages = require('next-images');

module.exports = withImages(withCss(withFonts(withSass({
  postcssLoaderOptions: {
    parser: true,
  },
  // webpack: config => {
  //   // Fixes npm packages that depend on `fs` module
  //   config.node = {
  //     fs: 'empty'
  //   }

  //   return config
  // }
}))));
