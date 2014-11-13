'use strict';

var angular = require('angular');

require('angular-animate');
require('angular-ui-router');

var m = angular.module('app.client', [
  'ngAnimate',
  'ui.router'
]);

m.config(function ($stateProvider) {
  $stateProvider
    .state('client', {
      url: '',
      templateUrl: 'app/client/layout.html'
    });
});

m.directive('choices', require('./choices/choicesDirective'));

module.exports = m;
