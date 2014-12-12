import _ from 'lodash';

class ResetButtonCtrl {
  constructor(hostActionCreators, buttonPressStore, teamStore, $timeout) {
    this.timeout = $timeout;
    this.buttonPressStore = buttonPressStore;
    this.teamStore = teamStore;
    this.hostActionCreators = hostActionCreators;

    this.teamStore.addChangeListener(() => this.updateCurrentTeam());
    this.buttonPressStore.addChangeListener(() => this.updateCurrentTeam());
  }

  resetButton() {
    this.hostActionCreators.resetButton();
  }

  updateCurrentTeam() {
    var teams = this.teamStore.getAll();
    var currNum = Number(this.buttonPressStore.getTeamNumber());
    if (currNum) {
      this.currentTeam = _.find(teams, {number: currNum});
    } else {
      this.currentTeam = null;
    }
  }
}

export default {
  templateUrl: 'app/host/resetButton/template.html',
  controller: ResetButtonCtrl,
  controllerAs: 'resetter',
  bindToController: true
};

