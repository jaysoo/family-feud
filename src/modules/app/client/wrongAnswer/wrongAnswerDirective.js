'use strict';

import _ from 'lodash';

class WrongAnswerCtrl {
  constructor(errorButtonStore) {
    this.store = errorButtonStore;
    this.store.addChangeListener(() => this.showWrongAnswer());
    this.wrongAnswerValue = false;
  }

  showWrongAnswer() {
    console.log("handle wrong answer");
    this.wrongAnswerValue = true;
    _.delay(() => {this.wrongAnswerValue = false;}, 3000);
  }

  isShowWrongAnswer() {
    return this.wrongAnswerValue === true;
  }
}

export default {
  templateUrl: 'app/client/wrongAnswer/wrongAnswer.html',
  controller: WrongAnswerCtrl,
  controllerAs: 'wrongAnswer',
  bindToController: true,
};

