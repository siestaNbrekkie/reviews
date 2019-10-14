var path = require('path');


var APP_DIR = path.resolve(__dirname, 'client')
var BUILD_DIR = path.resolve(__dirname, './public')


module.exports = {
  entry: APP_DIR + '/index.jsx',
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env']
        }
      }
    ]
  },
};

