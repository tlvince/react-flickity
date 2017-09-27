const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',

  module: {
    rules: [
      {
        test: /\.js/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },

  externals: {
    react: 'React'
  },

  output: {
    filename: 'react-flickity.js',
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'reactFlickity'
  },

  resolve: {
    extensions: ['.jsx', '.js']
  }
};