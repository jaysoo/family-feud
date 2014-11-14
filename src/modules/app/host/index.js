'use strict';

import angular from 'angular';

import 'angular-animate';
import 'angular-ui-router';

import HostActionCreators from './HostActionCreators';
import ChoiceActionCreators from './ChoiceActionCreators';
import QuestionActionCreators from './QuestionActionCreators';
import ErrorButtonActionCreators from './ErrorButtonActionCreators';

import currentQuestionDirective from './currentQuestion/currentQuestionDirective';
import questionSelectionDirective from './questionSelection/questionSelectionDirective';
import resetButtonDirective from './resetButton/resetButtonDirective';
import errorButtonDirective from './errorButton/errorButtonDirective';

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
m.service('choiceActionCreators', ChoiceActionCreators);
m.service('questionActionCreators', QuestionActionCreators);
m.service('errorButtonActionCreators', ErrorButtonActionCreators);

m.directive('currentQuestion', () => currentQuestionDirective);
m.directive('questionSelection', () => questionSelectionDirective);
m.directive('resetButton', () => resetButtonDirective);
m.directive('errorButton', () => errorButtonDirective);

export default m;
