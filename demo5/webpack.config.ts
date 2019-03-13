import path from 'path'
import webpack from 'webpack'

const config: webpack.Configuration = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: path.resolve(__dirname, 'dist'),
  },
}

export default config
