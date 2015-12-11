import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';

const frontend = '../../frontend/src/';

module.exports = {
  entry: './frontend/src/entry.js',
  output: {
    path: './frontend/dist/assets',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      {
        test: /\.(css)(\?.+)?$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.json?$/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin()
  ],
  resolve: {
    alias: {
      components: path.join(__dirname, frontend, 'react/components'),
      lib: path.join(__dirname, '../../lib'),
      pages: path.join(__dirname, frontend, 'react/pages'),
      layouts: path.join(__dirname, frontend, 'react/layouts'),
      actions: path.join(__dirname, frontend, 'alt/actions'),
      stores: path.join(__dirname, frontend, 'alt/stores')
    }
  }
};
