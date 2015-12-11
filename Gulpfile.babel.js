import gulp from 'gulp';
import requireDir from 'require-dir';

const tasks = requireDir('tasks');

const developmentMode = process.env.NODE_ENV ?
    process.env.NODE_ENV === 'development'
    : true;
const defaultTask = developmentMode ? 'browser-sync' : 'prod';

gulp.task('default', [defaultTask]);
