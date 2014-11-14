'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var browserifyShim = require('browserify-shim');
var es6ify = require('es6ify');
var ngAnnotate = require('gulp-ng-annotate');

var config = global.config;

module.exports = gulp.task('browserify', function () {
  return browserify(es6ify.runtime, {entry: true})
    .add([config.paths.src.modules])
    .add(es6ify.runtime)
    .transform(es6ify.configure(/^(?!.*node_modules)+.+\.js$/))
    .transform(browserifyShim)
    .bundle()
    .pipe(source(config.filenames.release.scripts))
    .pipe(ngAnnotate())
    .pipe(gulp.dest(config.paths.dest.release.scripts));
});
