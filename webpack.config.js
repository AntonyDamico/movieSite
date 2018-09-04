const webpack = require('webpack')

const path = require('path')

const loaders = require('./webpack/loaders')

const plugins = require('./webpack/plugins')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

require('babel-polyfill')

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      './movieList/static/movieList/assets/js/app.js',
      './movieList/static/movieList/assets/css/styles.css'
    ]
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'movieList/static/movieList/temp')
  },
  module: {
    rules: [
      loaders.JSLoader,
      {
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: __dirname + '/webpack/postcss.config.js'
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ]
}