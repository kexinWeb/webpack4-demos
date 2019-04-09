const path = require('path')

module.exports = [
  {
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: 'bundle.index.js',
      path: path.resolve(__dirname, 'dist'),
    },
    // devServer: {
    //   // contentBase: path.resolve(__dirname, 'dist'),
    //   port: 9000,
    // } // 只会读取第一个配置，识记
  },
  {
    mode: 'development',
    entry: './src/main.js',
    output: {
      filename: 'bundle.main.js',
      path: path.resolve(__dirname, 'dist')
    },
    devServer: {
      port: 9001, //不会读取，默认为8080
    }
  }
]
