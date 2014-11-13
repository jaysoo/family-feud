'use strict';

import angular from 'angular';
import client from './client';
import templates from '../../../tmp/templates';

var m = angular.module('app', [
  templates.name,
  client.name
]);

export default m;
