import angular from 'angular';

class CurrentQuestionCtrl {
  constructor(currentQuestionStore, hostActionCreators) {
    this.store = currentQuestionStore;
    this.store.addChangeListener(() => this.loadQuestion());
    this.hostActionCreators = hostActionCreators;
  }

  loadQuestion() {
    this.question = this.store.getCurrent();
    console.log(this.question);
  }

  title() {
    if (this.question) {
      return this.question.title;
    }
  }

  choices() {
    if (this.question) {
      return this.question.choices;
    } else {
      return [];
    }
  }

  handleClick(choice) {
    console.log("%cClicked on %s", "color:darkorange", choice.text);
    this.hostActionCreators.setAsRevealed(choice);
  }

  reset() {
    this.hostActionCreators.resetRevealedChoices();
  }
}

export default {
  templateUrl: 'app/host/currentQuestion/currentQuestion.html',
  controller: CurrentQuestionCtrl,
  controllerAs: 'question',
  bindToController: true
};
