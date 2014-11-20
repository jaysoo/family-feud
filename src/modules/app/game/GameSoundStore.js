import _ from 'lodash';
import EventEmitter from 'events';
import { ActionTypes } from '../constants';

var WRONG_ANSWER = 'wrong';
var CORRECT_ANSWER = 'correct';

class GameSoundStore extends EventEmitter {
  constructor(dispatcher) {
    super();

    this.dispatchToken = dispatcher.register((payload) => {
      var action = payload.action;

      switch(action.type) {
        case ActionTypes.RECEIVE_WRONG_ANSWER:
          this.emitWrongAnswer();
          break;

        case ActionTypes.RECEIVE_REVEALED_CHOICES:
          if (action.revealed) {
            this.emitCorrectAnswer();
          }
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

  emitCorrectAnswer() {
    this.emit(CORRECT_ANSWER);
  }

  addCorrectAnswerListener(cb) {
    this.on(CORRECT_ANSWER, cb);
  }
}

export default GameSoundStore;

