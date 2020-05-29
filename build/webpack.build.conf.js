const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const webpack =  require('webpack')

const buildWebpackConfig = merge(baseWebpackConfig, {
  // BUILD config
  mode: 'production',
  devtool: 'cheap-module-eval-source-map',

  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    })
  ]
})

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig)
})
