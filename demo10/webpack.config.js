const path = require('path')

// Entry: To be a function
module.exports = {
  context: path.resolve(__dirname, 'app'),
  entry() {
    return './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}

// Entry: Function
// module.exports = {
//   context: path.resolve(__dirname, 'app'),
//   entry: () => getEntry(),
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist')
//   }
// }

// 返回一个String/String数组/Object
// function getEntry() {
//   return ['./src/index.js', './src/main.js']
// }

// 返回一个Promise对象
// function getPromiseEntry() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('./src/main.js')
//     }, 1000)
//   })
// }

// Entry: Object
// module.exports = {
//   context: path.resolve(__dirname, 'app'),
//   entry: {
//     index: './src/index.js',
//     main: './src/main.js',
//   },
//   output: {
//     filename: 'bundle.[name].js',
//     path: path.resolve(__dirname, 'dist')
//   }
// }

// Entry: [String, String, ...]
// module.exports = {
//   context: path.resolve(__dirname, 'app'),
//   entry: ['./src/index.js', './src/main.js'],
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist')
//   }
// }

// Entry: String
// module.exports = {
//   context: path.resolve(__dirname, 'app'),
//   entry: './src/index.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist')
//   }
// }
