import angular from 'angular';

class CurrentQuestionCtrl {
  constructor(questionStore, choiceActionCreators) {
    this.store = questionStore;
    this.store.addChangeListener(() => this.loadQuestion());
    this.choiceActionCreators = choiceActionCreators;
  }

  loadQuestion() {
    this.question = this.store.getCurrent();
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
    this.choiceActionCreators.clickChoice(choice);
  }
}

export default {
  templateUrl: 'app/host/currentQuestion/currentQuestion.html',
  controller: CurrentQuestionCtrl,
  controllerAs: 'question',
  bindToController: true
};
