import gulp from 'gulp';
import browserSync from 'browser-sync';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import webpackConfig from './webpack/dev.js';

const sync = browserSync.create('happyfestivus');
const bundler = webpack(webpackConfig);

gulp.task('browser-sync', ['nodemon'], () => {
  sync.init(null, {
    proxy: 'http://localhost:3007',
    browser: 'google chrome',
    port: 7007,
    middleware: [
      webpackDevMiddleware(bundler, {
        publicPath: webpackConfig.output.publicPath,
        stats: {
          colors: true
        }
      }),
      webpackHotMiddleware(bundler)
    ],
    files: [
      'frontend/dist/**/*.css',
      'frontend/dist/**/*.html'
    ]
  });
});
