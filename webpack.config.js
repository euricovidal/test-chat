var path    = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  },
  entry: {
    main: [
      //'webpack-dev-server/client?http://locahost:8080',
      'webpack/hot/only-dev-server',
      './src/main.js'
    ]
  },
  output: {
    filename: './[name].js',
    path: path.join(__dirname, 'public'),
    publicPath: '/public/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'src'),
        loader: 'style!css!sass'
      }
    ]
  }
}
