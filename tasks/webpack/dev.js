import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';

const src = '../../frontend/src/';
const dist = '../../frontend/dist/';

module.exports = {
  debug: true,
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    path.join(__dirname, src, 'entry.js')
  ],
  devtool: '#eval-source-map',
  output: {
    path: path.join(__dirname, dist, 'assets'),
    publicPath: '/assets/',
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
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('bundle.css'),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
    new webpack.optimize.DedupePlugin()
  ],
  resolve: {
    alias: {
      components: path.join(__dirname, src, 'react/components'),
      lib: path.join(__dirname, '../../lib'),
      pages: path.join(__dirname, src, 'react/pages'),
      layouts: path.join(__dirname, src, 'react/layouts'),
      actions: path.join(__dirname, src, 'alt/actions'),
      stores: path.join(__dirname, src, 'alt/stores')
    }
  }
};
