'use strict';

import angular from 'angular';

import 'angular-animate';
import 'angular-ui-router';

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

export default m;
