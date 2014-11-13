'use strict';

var gulp = require('gulp');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var browserifyShim = require('browserify-shim');
var es6ify = require('es6ify');


module.exports = gulp.task('watchify', function () {
  var bundler = watchify(es6ify.runtime, { entry: true })

  bundler.add([config.paths.src.modules]);

  bundler.add(es6ify.runtime);
  bundler.transform(es6ify.configure(/^(?!.*node_modules)+.+\.js$/));

  bundler.transform(browserifyShim);

  bundler.on('update', rebundle);

  function rebundle() {
    return bundler.bundle({ debug: true })
      .pipe(source(config.filenames.build.scripts))
      .pipe(gulp.dest(config.paths.dest.build.scripts));
  }

  return rebundle();
});
