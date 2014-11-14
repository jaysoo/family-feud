'use strict';

import angular from 'angular';

import 'angular-animate';
import 'angular-ui-router';

import ChoiceActionCreators from './ChoiceActionCreators';
import QuestionActionCreators from './QuestionActionCreators';

import currentQuestionDirective from './currentQuestion/currentQuestionDirective';
import questionSelectionDirective from './questionSelection/questionSelectionDirective';

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

m.service('choiceActionCreators', ChoiceActionCreators);
m.service('questionActionCreators', QuestionActionCreators);

m.directive('currentQuestion', () => currentQuestionDirective);
m.directive('questionSelection', () => questionSelectionDirective);

export default m;
