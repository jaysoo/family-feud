'use strict';

import angular from 'angular';

import templates from '../../../tmp/templates';

import QuestionStore from './game/QuestionStore';
import ChoiceStore from './game/ChoiceStore';
import AppDispatcher from './AppDispatcher';

import client from './client';

var m = angular.module('app', [
  templates.name,
  client.name
]);

// Dispatcher -----------------------------------------------------------------
m.service('dispatcher', AppDispatcher);

// Stores ---------------------------------------------------------------------
m.service('questionStore', QuestionStore);
m.service('choiceStore', ChoiceStore);

export default m;
