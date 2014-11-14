'use strict';

import angular from 'angular';

import 'angular-animate';
import 'angular-ui-router';

import currentQuestionDirective from './currentQuestion/currentQuestionDirective';

var m = angular.module('app.host', [
  'ngAnimate',
  'ui.router'
]);

m.config(function ($stateProvider) {
  $stateProvider
    .state('host', {
      url: '/host',
      templateUrl: 'app/host/layout.html'
    });
});

m.directive('currentQuestion', () => currentQuestionDirective);

export default m;
