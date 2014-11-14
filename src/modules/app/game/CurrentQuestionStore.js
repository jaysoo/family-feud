import EventEmitter from 'events';

import { ActionTypes } from '../constants';

var CHANGE_EVENT = 'change';

class CurrentQuestionStore extends EventEmitter {
  constructor(dispatcher, questionStore) {
    super();

    this.questionStore = questionStore;

    this.dispatchToken = dispatcher.register((payload) => {
      dispatcher.waitFor([
        questionStore.dispatchToken
      ]);

      var action = payload.action;

      switch(action.type) {
        case ActionTypes.RECEIVE_RAW_QUESTIONS:
          this.emitChange();
          break;

        case ActionTypes.RECEIVE_CURRENT_QUESTION:
          this.setCurrentQuestion(action.questionId);
          this.emitChange();
          break;

        default:
      }
    });
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  }

  removeChangeListener(cb) {
    this.off(CHANGE_EVENT, cb);
  }

  setCurrentQuestion(questionId) {
    var questions = this.questionStore.getAll();
    this._currentQuestion = questions.filter((question) => question.id === questionId)[0];
  }

  getCurrent() {
    return this._currentQuestion;
  }
}

export default CurrentQuestionStore;
