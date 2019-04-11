const path = require('path')

module.exports = [
  {
    name: 'index',
    entry: './src/index.js',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist')
    },
    mode: 'production'
  },
  {
    name: 'main',
    entry: './src/main.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
    }
  }
]
