import EventEmitter from 'events';

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
          this.setCurrentQuestion(payload.questionId);
          this.emitChange();
          break;

        default:
      }
    });
  }

  setCurrentQuestion(questionId) {
    var questions = this.questionStore.getAll();
    this._currentQuestion = questions.filter((question) => question.id === question.id)[0];
  }

  getCurrent() {
    return this._currentQuestion;
  }
}

export default CurrentQuestionStore;
