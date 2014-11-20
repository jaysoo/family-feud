'use strict';

import _ from 'lodash';

class GameSoundsCtrl {
  constructor(gameSoundStore, $timeout, $element) {
    this.store = gameSoundStore;
    this.store.addWrongAnswerListener(() => this.soundWrongAnswer());
    this.timeout = $timeout;
    this.initialized = false;

    this.audioPlayer = $element.find("audio")[0];
  }

  soundWrongAnswer() {
    if (this.initialized) {
      this.audioPlayer.play();
    } else {
      this.initialized = true;
    }
  }
}

export default {
  templateUrl: 'app/client/gameSounds/template.html',
  controller: GameSoundsCtrl,
  controllerAs: 'gameSounds',
  bindToController: true
};


