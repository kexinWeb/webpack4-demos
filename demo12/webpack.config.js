const path = require('path')

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'content_base'),
      port: 9000,
      after: function(app, server) {
        // doSometing
      },
      before: function(app, server) {
        // doSometing
      },
      allowedHosts: [
        '.host.com', // 包括host.com及其子域名
        'host2.com' // host2.com，不包括其子域名
      ]
    }
  }
