import _ from 'lodash';
import EventEmitter from 'events';

import { ActionTypes } from '../constants';

var CHANGE_EVENT = 'change';

class ChoiceStore extends EventEmitter {
  constructor(dispatcher) {
    super();

    this._rooms = [];

    this.dispatchToken = dispatcher.register((payload) => {
      var action = payload.action;

      switch(action.type) {
        case ActionTypes.RECEIVE_CHOICES:
          this.loadChoices(action.choices);
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

  loadChoices(choices) {
    this._choices = choices;
  }

  getAll() {
    return this._choices;
  }
}

export default ChoiceStore;
