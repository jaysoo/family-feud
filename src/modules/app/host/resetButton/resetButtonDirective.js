class ResetButtonCtrl {
  constructor(hostActionCreators) {
    this.hostActionCreators = hostActionCreators;
  }

  resetButton() {
    this.hostActionCreators.resetButton();
  }
}

export default {
  templateUrl: 'app/host/resetButton/template.html',
  controller: ResetButtonCtrl,
  controllerAs: 'resetter',
  bindToController: true
};

