import _ from 'lodash';
import EventEmitter from 'events';
import { ActionTypes } from '../constants';

var CLICK_EVENT = 'click';
var CHANGE_EVENT = 'change';

class ErrorButtonStore extends EventEmitter {
  constructor(dispatcher) {
    super();

    this.timestamp = Date.now();

    this.dispatchToken = dispatcher.register((payload) => {
      var action = payload.action;

      switch(action.type) {
        case ActionTypes.HOST_CLICK_ERROR_BUTTON:
          this.emitClick();
          break;
        case ActionTypes.RECEIVE_WRONG_ANSWER:
          this.emitChange();
          break;

        default:
      }
    });
  }

  emitClick() {
    this.emit(CLICK_EVENT);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  }

  addClickListener(cb) {
    this.on(CLICK_EVENT, cb);
  }

  removeClickListener(cb) {
    this.off(CLICK_EVENT, cb);
  }
}

export default ErrorButtonStore;
