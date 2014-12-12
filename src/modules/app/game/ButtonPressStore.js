import _ from 'lodash';
import EventEmitter from 'events';

import { ActionTypes } from '../constants';

var CHANGE_EVENT = 'change';

class ButtonPressStore extends EventEmitter {
  constructor(dispatcher) {
    super();

    this.dispatchToken = dispatcher.register((payload) => {
      var action = payload.action;

      switch(action.type) {
        case ActionTypes.RECEIVE_BUTTON_PRESS:
          this.loadButtonPressData(action.buttonPressData);
          this.emitChange();
          break;

        case ActionTypes.RECEIVE_BUTTONS_CLEARED:
          this.clear();
          this.emitChange();
          break;

        default:
      }
    });
  }

  loadButtonPressData(buttonPressData) {
    this._buttonPressData = buttonPressData;
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

  getTeamNumber() {
    if (this._buttonPressData) {
      return this._buttonPressData.buttonId;
    }
  }

  clear() {
    return this._buttonPressData = null;
  }
}

export default ButtonPressStore;


