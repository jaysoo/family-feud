class ScorePanelCtrl {
  constructor(scoreStore, teamStore, hostActionCreators) {
    this.scoreStore = scoreStore;
    this.teamStore = teamStore;
    this.hostActionCreators = hostActionCreators;

    this.teamStore.addChangeListener(() => this.showTeams());
    this.scoreStore.addChangeListener(() => this.showTeams());
  }

  showTeams() {
    var teams = this.teamStore.getAll();
    var scores = this.scoreStore.getScores();

    this.teams = teams;
    this.scores = scores;
  }

  updateScores() {
    this.hostActionCreators.updateScores(this.scores);
  }
}

export default {
  templateUrl: 'app/host/scorePanel/template.html',
  controller: ScorePanelCtrl,
  controllerAs: 'scores',
  bindToController: true
};


