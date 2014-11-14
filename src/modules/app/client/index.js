'use strict';

import angular from 'angular';

import 'angular-animate';
import 'angular-ui-router';

import choices from './choices/choicesDirective';

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

m.directive('choices', () => choices);

export default m;
