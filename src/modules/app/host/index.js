'use strict';

import angular from 'angular';

import 'angular-animate';
import 'angular-ui-router';

import HostActionCreators from './HostActionCreators';
import ErrorButtonActionCreators from './ErrorButtonActionCreators';

import currentQuestionDirective from './currentQuestion/currentQuestionDirective';
import questionSelectionDirective from './questionSelection/questionSelectionDirective';
import resetButtonDirective from './resetButton/resetButtonDirective';
import errorButtonDirective from './errorButton/errorButtonDirective';
import scorePanelDirective from './scorePanel/scorePanelDirective';

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
m.service('errorButtonActionCreators', ErrorButtonActionCreators);

m.directive('currentQuestion', () => currentQuestionDirective);
m.directive('questionSelection', () => questionSelectionDirective);
m.directive('resetButton', () => resetButtonDirective);
m.directive('errorButton', () => errorButtonDirective);
m.directive('scorePanel', () => scorePanelDirective);

export default m;
