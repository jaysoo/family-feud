'use strict';

var gulp = require('gulp');
var gulpif = require('gulp-if');
var rename = require('gulp-rename');
var csso = require('gulp-csso');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');

var config = global.config;
var release = global.release;

module.exports = gulp.task('styles', function () {
  console.log(
        __dirname + '/../../bower_components/fontawesome/scss'
  )
  return gulp.src(config.paths.src.styles)
    .pipe(autoprefixer('last 1 version'))
    .pipe(sass({
      loadPath: [
        global.BOWER_FOLDER + '/bootstrap-sass/lib',
        global.BOWER_FOLDER + '/fontawesome/scss'
      ]
    }))
    .pipe(gulpif(release, rename(config.filenames.release.styles), rename(config.filenames.build.styles)))
    .pipe(gulpif(release, gulp.dest(config.paths.dest.release.styles), gulp.dest(config.paths.dest.build.styles)));
});
