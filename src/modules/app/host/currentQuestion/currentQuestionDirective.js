import angular from 'angular';

class CurrentQuestionCtrl {
  constructor(questionStore) {
    this.store = questionStore;
    this.store.addChangeListener(() => this.loadQuestion());
  }

  loadQuestion() {
    this.question = this.store.getCurrent();
  }

  choices() {
    if (this.question) {
      return this.question.choices;
    } else {
      return [];
    }
  }
}

export default {
  templateUrl: 'app/host/currentQuestion/currentQuestion.html',
  controller: CurrentQuestionCtrl,
  controllerAs: 'question',
  bindToController: true
};
