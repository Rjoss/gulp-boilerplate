const gulp = require('gulp');
const babel = require('gulp-babel');
const paths = {
  js: {
    src: './src/*.js',
    dest: './dist',
    opts: {}
  }
};

// JS: Babel
gulp.task('es6', function () {
  return gulp.src(paths.js.src)
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(
      gulp.dest('dist')
    );
});

// Watch ES6
gulp.task('watch:js', function () {
  gulp.watch(paths.js.src, gulp.series('es6'));
});

// Master Watch
gulp.task('watch', gulp.series('watch:js'));

// Default
gulp.task('default', gulp.series('es6', 'watch'));
