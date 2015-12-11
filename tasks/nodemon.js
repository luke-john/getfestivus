import gulp from 'gulp';
import nodemon from 'gulp-nodemon';
import browserSync from 'browser-sync';

gulp.task('nodemon', () => {
  return nodemon({
    script: './server/bin/www',
    exec: 'node',
    watch: [
      'server/**/*.*'
    ],
    env: {
      'DEBUG': 'server:*'
    },
    ignore: [
      'server/node_modules/**/*.*'
    ]
  });
});
