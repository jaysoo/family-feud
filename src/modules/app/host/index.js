'use strict';

import angular from 'angular';

import 'angular-animate';
import 'angular-ui-router';

import HostActionCreators from './HostActionCreators';

import currentQuestionDirective from './currentQuestion/currentQuestionDirective';
import questionSelectionDirective from './questionSelection/questionSelectionDirective';
import resetButtonDirective from './resetButton/resetButtonDirective';

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

m.service('hostActionCreators', HostActionCreators);

m.directive('currentQuestion', () => currentQuestionDirective);
m.directive('questionSelection', () => questionSelectionDirective);
m.directive('resetButton', () => resetButtonDirective);

export default m;
