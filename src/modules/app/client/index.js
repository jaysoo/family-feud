'use strict';

import angular from 'angular';

import 'angular-animate';
import 'angular-ui-router';

import choices from './choices/choicesDirective';
import teamInfo from './teamInfo/teamInfoDirective';
import wrongAnswer from './wrongAnswer/wrongAnswerDirective';
import gameSounds from './gameSounds/gameSoundsDirective';

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
m.directive('gameSounds', () => gameSounds);

export default m;
