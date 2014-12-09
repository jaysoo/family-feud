'use strict';

class TeamInfoCtrl {
  constructor(teamStore, scoreStore) {
    this.store = teamStore;
    this.store.addChangeListener(() => this.updateTeamInfo());

    this.scoreStore = scoreStore;
    this.scoreStore.addChangeListener(() => this.updateTeamInfo());
  }

  updateTeamInfo() {
    this.info = this.store.getInfoFor(this.number);
    this.score = this.scoreStore.getScoreFor(this.number);
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

