'use strict';

import angular from 'angular';
import Firebase from 'firebase';

import QuestionStore from './game/QuestionStore';
import CurrentQuestionStore from './game/CurrentQuestionStore';
import ChoiceStore from './game/ChoiceStore';
import TeamStore from './game/TeamStore';
import ButtonPressStore from './game/ButtonPressStore';
import RevealedChoiceStore from './game/RevealedChoiceStore';
import GameSoundStore from './game/GameSoundStore';
import ScoreStore from './game/ScoreStore';

import ErrorButtonStore from './game/ErrorButtonStore';
import AppDispatcher from './AppDispatcher';
import FirebaseApiUtils from './FirebaseApiUtils.js';
import ServerActionCreators from './ServerActionCreators';

import client from './client';
import host from './host';
import buzzer from './buzzer';

var m = angular.module('app', [
  client.name,
  host.name,
  buzzer.name
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
m.service('buttonPressStore', ButtonPressStore);
m.service('revealedChoiceStore', RevealedChoiceStore);
m.service('errorButtonStore', ErrorButtonStore);
m.service('gameSoundStore', GameSoundStore);
m.service('scoreStore', ScoreStore);

// Firebase config ------------------------------------------------------------
m.factory('firebaseRef', (appConfig) => new Firebase(appConfig.firebaseUrl));
m.service('firebaseApiUtils', FirebaseApiUtils);

// TODO: move this to route controller.
m.run((firebaseApiUtils) => {
  firebaseApiUtils.watchQuestions();
  firebaseApiUtils.watchTeamInfo();
  firebaseApiUtils.watchCurrentQuestion();
  firebaseApiUtils.watchCurrentQuestion();
  firebaseApiUtils.watchButtonPresses();
  firebaseApiUtils.watchRevealedChoices();
  firebaseApiUtils.watchWrongAnswer();
  firebaseApiUtils.watchScores();
});

export default m;
