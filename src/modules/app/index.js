'use strict';

import angular from 'angular';
import Firebase from 'firebase';

import templates from '../../../tmp/templates';

import QuestionStore from './game/QuestionStore';
import CurrentQuestionStore from './game/CurrentQuestionStore';
import ChoiceStore from './game/ChoiceStore';
import TeamStore from './game/TeamStore';

import AppDispatcher from './AppDispatcher';
import FirebaseApiUtils from './FirebaseApiUtils.js';
import ServerActionCreators from './ServerActionCreators';

import client from './client';
import host from './host';

var m = angular.module('app', [
  templates.name,
  client.name,
  host.name
]);

// Config ---------------------------------------------------------------------
m.value('appConfig', {
  firebaseUrl: 'https://family-feud.firebaseio.com'
});

// Actions --------------------------------------------------------------------
m.service('serverActionCreators', ServerActionCreators);

// Dispatcher -----------------------------------------------------------------
m.service('dispatcher', AppDispatcher);

// Stores ---------------------------------------------------------------------
m.service('questionStore', QuestionStore);
m.service('currentQuestionStore', CurrentQuestionStore);
m.service('choiceStore', ChoiceStore);
m.service('teamStore', TeamStore);

// Firebase config ------------------------------------------------------------
m.factory('firebaseRef', (appConfig) => new Firebase(appConfig.firebaseUrl));
m.service('firebaseApiUtils', FirebaseApiUtils);

// TODO: move this to route controller.
m.run((firebaseApiUtils) => {
  firebaseApiUtils.watchQuestions();
  firebaseApiUtils.watchTeamInfo();
  firebaseApiUtils.watchCurrentQuestion();
});

export default m;
