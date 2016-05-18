var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    browserSync = require('browser-sync'),
    gulpif = require('gulp-if'),
    reload = browserSync.reload;

gulp.task('jshint', function () {
  return gulp.src('angular-busy.js')
    .pipe(reload({stream: true, once: true}))
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(gulpif)
});

gulp.task('serve', function () {
  browserSync({
    notify: false,
    server: ['angular-busy.js', 'angular-busy.css', './demo']
  });

  gulp.watch('angular-busy.js', ['jshint', reload]);
  gulp.watch(['angular-busy.css', 'angular-busy.html'], reload);

});

/*
gulp.task('serve', ['jshint', 'connect', 'watch'] function () {

});
*/



/*
gulp.task('ngTemplates', function {})
*/


/*
gulp.task('build', ['ngTemplates', 'concat', 'uglify', 'copy', 'cssmin']);
*/
