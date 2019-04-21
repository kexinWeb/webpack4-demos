const path = require('path')

module.exports = {
  mode: "development",
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.json$/,
      type: 'javascript/auto', // 没有指定会报错
      loader: 'json-loader'
    }]
  }
}
