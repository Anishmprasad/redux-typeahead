var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname,
  entry: __dirname + '/index.js',
  target: 'web',
  output: {
    path: __dirname + '/dist/',
    filename: 'ReduxTypeahead.js',
    library: 'ReduxTypeahead',
    libraryTarget: 'umd'
  },
  resolve: {
    modules: [
      path.resolve(__dirname),
      'node_modules'
    ]
  },
  module: {
    rules: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      include: [
        path.resolve(__dirname)
      ]
    }, {
      test: /\.css?$/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: "style-loader",
        loader: "css-loader"
      })
    }]
  },
  plugins: [
    new ExtractTextPlugin("style.css")
  ],
  externals: {
    'react': {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      root: "React"
    }
  }
}