'use strict';

class TeamInfoCtrl {
  constructor(teamInfoStore) {
    this.store = teamInfoStore;
    this.store.addChangeListener(() => this.updateTeamInfo());
  }

  updateTeamInfo() {
    this.info = this.store.getInfoFor(this.number);
  }
}

export default {
  templateUrl: 'app/client/teamInfo/teamInfo.html',
  controller: TeamInfoCtrl,
  controllerAs: 'teamInfo',
  bindToController: true,
  scope: {
    number: "="
  }
};

