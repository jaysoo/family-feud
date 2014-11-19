import angular from 'angular';

class ErrorButtonCtrl {
  constructor(errorButtonStore, errorButtonActionCreators) {
    this.store = errorButtonStore;
    this.errorButtonActionCreators = errorButtonActionCreators;
  }


  handleClick() {
    console.log("Error clicked");
    this.errorButtonActionCreators.errorClicked();
  }
}

export default {
  templateUrl: 'app/host/errorButton/template.html',
  controller: ErrorButtonCtrl,
  controllerAs: 'errorCtrl',
  bindToController: true
};

