import _ from 'lodash';
import EventEmitter from 'events';
import { ActionTypes } from '../constants';

var WRONG_ANSWER = 'wrong';

class GameSoundStore extends EventEmitter {
  constructor(dispatcher) {
    super();

    this.dispatchToken = dispatcher.register((payload) => {
      var action = payload.action;

      switch(action.type) {
        case ActionTypes.RECEIVE_WRONG_ANSWER:
          console.log("received action")
          this.emitWrongAnswer();
          break;

        default:
      }
    });
  }

  emitWrongAnswer() {
    this.emit(WRONG_ANSWER);
  }

  addWrongAnswerListener(cb) {
    this.on(WRONG_ANSWER, cb);
  }
}

export default GameSoundStore;

