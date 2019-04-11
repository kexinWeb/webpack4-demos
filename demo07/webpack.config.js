const path = require('path')

module.exports = function (env, argv) {
  return {
    entry: './src/' + argv['entry-filename'] + '.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    devtool: env.prod ? 'source-map' : 'eval'
  }
}
