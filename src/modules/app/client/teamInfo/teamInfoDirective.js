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
    console.log("is current team", this.info.number, this.store.currentTeam())
    return this.info.number == this.store.currentTeam();
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

