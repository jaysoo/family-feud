'use strict';

var angular = require('angular');

var m = angular.module('app', [
  require('../../../tmp/templates').name,

  require('./client').name
]);

module.exports = m;
