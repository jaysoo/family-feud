import _ from 'lodash';
import EventEmitter from 'events';

import { ActionTypes } from '../constants';

var CHANGE_EVENT = 'change';

class QuestonStore extends EventEmitter {
  constructor(dispatcher) {
    super();

    this._rooms = [];

    this.dispatchToken = dispatcher.register((payload) => {
      var action = payload.action;

      switch(action.type) {
        case ActionTypes.RECEIVE_QUESTIONS:
          this.loadQuestions(action.questions);
          this.emitChange();
          break;

        default:
      }
    });
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  }

  removeChangeListener(cb) {
    this.off(CHANGE_EVENT, cb);
  }

  loadQuestions(questions) {
    this._questions = questions;
  }

  getAll() {
    return this._questions;
  }
}

export default QuestonStore;
