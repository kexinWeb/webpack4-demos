webpack = require('webpack')
path = require('path')

config =
  mode: 'production'
  entry: './src/index.js'
  output:
    path: path.resolve(__dirname, 'dist')
    filename: 'bundle.js'

module.exports = config
