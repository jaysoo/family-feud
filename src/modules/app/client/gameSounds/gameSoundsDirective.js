'use strict';

import _ from 'lodash';

class GameSoundsCtrl {
  constructor(gameSoundStore, $timeout, $element) {
    this.store = gameSoundStore;
    this.store.addWrongAnswerListener(() => this.soundWrongAnswer());
    this.store.addCorrectAnswerListener(() => this.soundCorrectAnswer());
    this.timeout = $timeout;
    this.wrongAnswerInitialized = false;
    this.correctAnswerInitialized = false;

    this.wrongAnswerPlayer = $element.find("audio")[0];
    this.correctAnswerPlayer = $element.find("audio")[1];
  }

  soundWrongAnswer() {
    if (this.wrongAnswerInitialized) {
      this.wrongAnswerPlayer.play();
    } else {
      this.wrongAnswerInitialized = true;
    }
  }

  soundCorrectAnswer() {
    if (this.correctAnswerInitialized) {
      this.correctAnswerPlayer.play();
    } else {
      this.correctAnswerInitialized = true;
    }
  }
}

export default {
  templateUrl: 'app/client/gameSounds/template.html',
  controller: GameSoundsCtrl,
  controllerAs: 'gameSounds',
  bindToController: true
};


