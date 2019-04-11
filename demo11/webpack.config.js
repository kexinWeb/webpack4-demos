const path = require('path')

module.exports = 
{
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    // contentBase: path.resolve(__dirname, 'dist'),
    port: 9000,
    before: function(app, server) {
      console.log('-------------', app)
      console.log('-------------', server)
    },
    allowedHosts: [
      '.host.com', // 'host.com' 只会识别host.com，而不能识别其子域名
    ]
  } // 只会读取第一个配置，识记
}
