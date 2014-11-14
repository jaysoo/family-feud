import _ from 'lodash';
import EventEmitter from 'events';
import { ActionTypes } from '../constants';

var CLICK_EVENT = 'click';

class ErrorButtonStore extends EventEmitter {
  constructor(dispatcher) {
    super();

    this._rooms = [];

    this.dispatchToken = dispatcher.register((payload) => {
      var action = payload.action;

      switch(action.type) {
        case ActionTypes.HOST_CLICK_ERROR_BUTTON:
          this.emitClick();
          break;

        default:
      }
    });
  }

  emitClick() {
    this.emit(CLICK_EVENT);
  }

  addClickListener(cb) {
    this.on(CLICK_EVENT, cb);
  }

  removeClickListener(cb) {
    this.off(CLICK_EVENT, cb);
  }
}

export default ErrorButtonStore;
