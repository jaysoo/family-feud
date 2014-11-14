import _ from 'lodash';
import EventEmitter from 'events';

import { ActionTypes } from '../constants';

var CHANGE_EVENT = 'change';

class ChoiceStore extends EventEmitter {
  constructor(dispatcher, currentQuestionStore) {
    super();

    this._rooms = [];

    this.currentQuestionStore = currentQuestionStore;

    this.dispatchToken = dispatcher.register((payload) => {
      dispatcher.waitFor([
        currentQuestionStore.dispatchToken
      ]);

      var action = payload.action;

      switch(action.type) {
        case ActionTypes.RECEIVE_RAW_QUESTIONS:
        case ActionTypes.RECEIVE_CURRENT_QUESTION:
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

  getAll() {
    return this.currentQuestionStore.getCurrent().choices;
  }
}

export default ChoiceStore;
