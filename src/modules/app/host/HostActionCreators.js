import { ActionTypes } from '../constants';

class HostActionCreators {
  constructor(dispatcher, firebaseApiUtils) {
    this.dispatcher = dispatcher;
    this.apiUtils = firebaseApiUtils;
  }

  clickChoice(choice) {
    console.log('%cClicked on %s', 'color:green', choice.text);
    this.dispatcher.handleViewAction({
      type: ActionTypes.HOST_CLICK_CHOICE,
      choice: choice
    });
  }

  selectQuestion(question) {
    console.log('%cSelected %s', 'color:green', question.title);
    this.apiUtils.setCurrentQuestion(question.id);
  }

  selectQuestionById(questionId) {
    console.log('%cSelected %s', 'color:green', questionId);
    this.apiUtils.setCurrentQuestion(Number(questionId));
  }

  setAsRevealed(choice) {
    console.log('%cReveal %s', 'color:green', choice.text);
    this.apiUtils.setChoiceAsRevealed(choice);
  }

  resetRevealedChoices() {
    console.log('%cResetting revealed choices', 'color:green');
    this.apiUtils.resetRevealedChoices();
  }

  resetButton() {
    console.log('%cResetting buttons', 'color:green');
    this.apiUtils.resetButtons();
  }

  updateScores(scores) {
    this.apiUtils.setScores(scores);
  }
}

export default HostActionCreators;

