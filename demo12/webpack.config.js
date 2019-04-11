const path = require('path')

module.exports = [{
  mode: 'development',
  entry: './src/test-vendor.js',
  output: {
    filename: 'bundle.vendor.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'someLibName',
    libraryTarget: 'var',
    auxiliaryComment: 'Test Comment',
    crossOriginLoading: 'anonymous',
    devtoolModuleFilenameTemplate: 'keke://[namespace]/[resource-path]?[loaders]'
  },
  devtool: 'source-map',
}, {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'bundle.main.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'someLibName1',
    libraryTarget: 'var',
    auxiliaryComment: 'Test Comment',
    crossOriginLoading: 'anonymous',
    devtoolNamespace: 'majiawei',
    devtoolModuleFilenameTemplate: 'keke://[namespace]/[id]?[loaders]'
  },
  devtool: 'source-map'
}, {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.index.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'someLibName1',
    libraryTarget: 'commonjs',
    auxiliaryComment: 'Test Comment',
    crossOriginLoading: 'anonymous',
    devtoolModuleFilenameTemplate: 'keke://[namespace]/[resource-path]?[loaders]'
  },
  devtool: 'source-map',
},]
