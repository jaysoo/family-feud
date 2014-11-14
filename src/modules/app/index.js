'use strict';

import angular from 'angular';

import templates from '../../../tmp/templates';

import QuestionStore from './game/QuestionStore';
import ChoiceStore from './game/ChoiceStore';

import client from './client';

var m = angular.module('app', [
  templates.name,
  client.name
]);

m.service('questionStore', QuestionStore);
m.service('choiceStore', ChoiceStore);

export default m;
