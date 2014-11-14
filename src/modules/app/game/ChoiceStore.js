import _ from 'lodash';
import EventEmitter from 'events';

import { ActionTypes } from '../constants';

var CHANGE_EVENT = 'change';

class ChoiceStore extends EventEmitter {
  constructor(dispatcher, questionStore) {
    super();

    this._rooms = [];

    this.questionStore = questionStore;

    this.dispatchToken = dispatcher.register((payload) => {
      dispatcher.waitFor([
        questionStore.dispatchToken
      ]);

      var action = payload.action;

      switch(action.type) {
        case ActionTypes.RECEIVE_QUESTIONS:
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
    return this.questionStore.getCurrent().choices;
  }
}

export default ChoiceStore;
