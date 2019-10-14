const ImageminPlugin = require('imagemin-webpack-plugin').default
const manifestJSON = require('./public/manifest.json')

const pwaArgs = {
  themeColor: manifestJSON.theme_color,
  name: manifestJSON.short_name,
  msTileColor: manifestJSON.background_color
}

module.exports = {
  chainWebpack: config => {
    config.plugin('pwa').tap(() => {
      return [pwaArgs]
    })
  },
  configureWebpack: () => {
    if (process.env.NODE_ENV === 'production') {
      return {
        devtool: 'source-map',
        plugins: [
          new ImageminPlugin()
        ]
      }
    }
  }
}
