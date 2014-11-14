import _ from 'lodash';
import EventEmitter from 'events';

import { ActionTypes } from '../constants';

var CHANGE_EVENT = 'change';

class ChoiceStore extends EventEmitter {
  constructor(dispatcher, choiceStore) {
    super();

    this.dispatchToken = dispatcher.register((payload) => {
      dispatcher.waitFor([
        choiceStore.dispatchToken
      ]);

      var action = payload.action;

      switch(action.type) {
        case ActionTypes.RECEIVE_REVEALED_CHOICES:
          this.loadRevealedChoices(action.revealed);
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

  loadRevealedChoices(revealed) {
    this._revealed = revealed;
  }

  isRevealed(choice) {
    if (this._revealed) {
      return !!this._revealed[choice.id];
    } else {
      return false;
    }
  }
}

export default ChoiceStore;

