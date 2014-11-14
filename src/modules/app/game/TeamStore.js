import _ from 'lodash';
import EventEmitter from 'events';

import { ActionTypes } from '../constants';

var CHANGE_EVENT = 'change';

class TeamStore extends EventEmitter {
  constructor(dispatcher, buttonPressStore) {
    super();

    this.buttonPressStore = buttonPressStore;

    this.dispatchToken = dispatcher.register((payload) => {
      dispatcher.waitFor([
        buttonPressStore.dispatchToken
      ]);

      var action = payload.action;

      switch(action.type) {
        case ActionTypes.RECEIVE_RAW_TEAM_INFO:
          this.loadTeamInfo(action.rawTeamInfo);
          this.emitChange();
          break;

        case ActionTypes.RECEIVE_BUTTON_PRESS:
          this.buttonPressed();
          this.emitChange();
          break;
        default:
      }
    });
  }

  buttonPressed() {
    console.log("before set", this._teamInfo.currentTeam)
    if (!this._teamInfo.currentTeam) {
      var currentTeam = this.buttonPressStore.getTeamNumber();
      console.log("current team", currentTeam)
      this._teamInfo.currentTeam = currentTeam;
    }
    console.log("after set", this._teamInfo.currentTeam)
  }

  loadTeamInfo(teamInfo) {
    this._teamInfo = teamInfo;
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  currentTeam() {
    this._teamInfo.currentTeam;
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

