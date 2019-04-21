const path = require('path')

module.exports = [
  {
    mode: "development",
    entry: './src/index.js',
    output: {
      filename: 'bundle.index.js',
      path: path.resolve(__dirname, 'dist')
    },
  },
  {
    mode: "development",
    entry: './src/main.js',
    output: {
      filename: 'bundle.main.js',
      path: path.resolve(__dirname, 'dist')
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'content_base'),
      port: 9001
    }
  }
]
