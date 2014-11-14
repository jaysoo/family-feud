import _ from 'lodash';
import EventEmitter from 'events';

import { ActionTypes } from '../constants';

var CHANGE_EVENT = 'change';

class TeamStore extends EventEmitter {
  constructor(dispatcher) {
    super();

    this.dispatchToken = dispatcher.register((payload) => {
      var action = payload.action;

      switch(action.type) {
        case ActionTypes.RECEIVE_RAW_TEAM_INFO:
          this.loadTeamInfo(action.rawTeamInfo);
          this.emitChange();
          break;

        default:
      }
    });
  }

  loadTeamInfo(teamInfo) {
    this._teamInfo = teamInfo;
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
    return this._teamInfo;
  }

  getInfoFor(teamNumber) {
    return _.findWhere(this._teamInfo, {number: teamNumber});
  }
}

export default TeamStore;

