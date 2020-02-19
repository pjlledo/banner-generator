const ImageminPlugin = require('imagemin-webpack-plugin').default

module.exports = {
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
