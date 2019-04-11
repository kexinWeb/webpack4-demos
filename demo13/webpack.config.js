const path = require('path')

module.exports = [
  {
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: 'bundle.index.js',
      path: path.resolve(__dirname, 'dist'),
      library: 'MyLibrary01',
      devtoolModuleFilenameTemplate: 'keke://[namespace]/[resource-path]?[loaders]'
    },
    devtool: 'source-map' // mode为'development'时，默认为'source-map',可以不用设置
  }, {
    mode: 'development',
    entry: './src/main.js',
    output: {
      filename: 'bundle.main.js',
      path: path.resolve(__dirname, 'dist'),
      library: 'MyLibrary02',
      devtoolNamespace: 'MyLibrary02Namespace',
      devtoolModuleFilenameTemplate: 'keke://[namespace]/[resource-path]?[loaders]'
    }
  }
]
