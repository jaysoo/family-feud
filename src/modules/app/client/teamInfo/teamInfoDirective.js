'use strict';

class TeamInfoCtrl {
  constructor(teamStore) {
    this.store = teamStore;
    this.store.addChangeListener(() => this.updateTeamInfo());
  }

  updateTeamInfo() {
    this.info = this.store.getInfoFor(this.number);
  }

  isCurrentTeam() {
    if (this.info) {
      return this.info.number == this.store.currentTeam();
    }
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

