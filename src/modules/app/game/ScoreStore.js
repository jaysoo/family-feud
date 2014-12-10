import _ from 'lodash';
import EventEmitter from 'events';

import { ActionTypes } from '../constants';

var CHANGE_EVENT = 'change';

class TeamStore extends EventEmitter {
  constructor(dispatcher, buttonPressStore) {
    super();

    this.buttonPressStore = buttonPressStore;

    this.dispatchToken = dispatcher.register((payload) => {
      var action = payload.action;

      switch(action.type) {
        case ActionTypes.RECEIVE_RAW_SCORES:
          this.loadScores(action.scores);
          this.emitChange();
          break;

        default:
      }
    });
  }

  loadScores(scores) {
    this._scores = scores;
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

  getScores() {
    return this._scores;
  }

  getScoreFor(teamNumber) {
    if (this._scores) {
      return this._scores[teamNumber];
    }
  }
}

export default TeamStore;


