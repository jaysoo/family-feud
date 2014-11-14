'use strict';

import angular from 'angular';

import 'angular-animate';
import 'angular-ui-router';

import choices from './choices/choicesDirective';
import teamInfo from './teamInfo/teamInfoDirective';

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
m.directive('teamInfo', () => teamInfo);

export default m;
