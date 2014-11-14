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

// Temp code to load questions
m.run(($timeout, dispatcher) => {
  $timeout(() => {
    dispatcher.handleServerAction({
      type: 'RECEIVE_RAW_QUESTIONS',
      questions: [
        {
          title: 'Foo bar?',
          choices: [
            {text: 'A', points: 50},
            {text: 'B', points: 30},
            {text: 'C', points: 10},
            {text: 'D', points: 5},
            {text: 'E', points: 5}
          ]
        }
      ]
    });
  });
});

export default m;
