var gulp = require('gulp');
var gulpif = require('gulp-if');

module.exports = gulp.task('icons', function() {
  return gulp.src(global.BOWER_FOLDER + '/fontawesome/fonts/**.*')
    .pipe(gulpif(global.release, gulp.dest(config.paths.dest.release.fonts), gulp.dest(config.paths.dest.build.fonts)));
});
