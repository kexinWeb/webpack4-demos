const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            publicPath: 'dist/',
          }
        }]
      }
    ]
  }
}
