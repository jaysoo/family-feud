'use strict';

var gulp = require('gulp');
var connect = require('connect');
var staticServer = connect();

module.exports = gulp.task('serve', function (next) {
  var staticServerPath = global.BUILD_FOLDER;
  if (release) {
    staticServerPath = global.RELEASE_FOLDER;
  }
  staticServer.use(connect.static(staticServerPath)).listen(global.config.ports.staticServer, next);
});
