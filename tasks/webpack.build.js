import gulp from 'gulp';
import webpack from 'webpack';

import config from './webpack/prod.js';

gulp.task('webpack-build', () => webpack(config, (err, stats) => {
  if (err) {
    return console.error(err.stack);
  }
  console.log(stats.toString({
    colors: true,
    version: false,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false
  }));
}));
