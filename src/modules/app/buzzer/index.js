'use strict';

import angular from 'angular';

import 'angular-animate';
import 'angular-ui-router';

import teamInfo from '../client/teamInfo/teamInfoDirective';
import wrongAnswer from '../client/wrongAnswer/wrongAnswerDirective';
import gameSounds from '../client/gameSounds/gameSoundsDirective';

var m = angular.module('app.buzzer', [
  'ngAnimate',
  'ui.router'
]);

m.config(function ($stateProvider) {
  $stateProvider
    .state('buzzer', {
      url: '/buzzer',
      templateUrl: 'app/buzzer/layout.html'
    });
});

//m.directive('teamInfo', () => teamInfo);
//m.directive('gameSounds', () => gameSounds);

export default m;
