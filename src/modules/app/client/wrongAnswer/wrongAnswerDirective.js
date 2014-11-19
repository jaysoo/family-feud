'use strict';

import _ from 'lodash';

class WrongAnswerCtrl {
  constructor(errorButtonStore, $timeout, $element) {
    this.store = errorButtonStore;
    this.store.addChangeListener(() => this.showWrongAnswer());
    this.wrongAnswerValue = false;
    this.timeout = $timeout;
    this.initialized = false;

    this.audioPlayer = $element.find("audio")[0];
  }

  showWrongAnswer() {
    console.log("handle wrong answer");
    if (this.initialized) {
      console.log("init");
      this.wrongAnswerValue = true;
      this.audioPlayer.play();
      this.timeout(() => {this.wrongAnswerValue = false;}, 3000);
    } else {
      console.log("not init");
      this.initialized = true;
    }
  }

  isShowWrongAnswer() {
    return this.wrongAnswerValue === true;
  }
}

export default {
  templateUrl: 'app/client/wrongAnswer/wrongAnswer.html',
  controller: WrongAnswerCtrl,
  controllerAs: 'wrongAnswer',
  bindToController: true
};

