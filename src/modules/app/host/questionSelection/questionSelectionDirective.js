import angular from 'angular';

class QuestionSelectionCtrl {
  constructor(questionStore, questionActionCreators) {
    this.store = questionStore;
    this.store.addChangeListener(() => this.loadQuestions());
    this.questionActionCreators = questionActionCreators;
  }

  loadQuestions() {
    this.questions = this.store.getAll();
    this.selected = this.store.getCurrent();
  }

  selectQuestion(question) {
  }
}

export default {
  templateUrl: 'app/host/questionSelection/template.html',
  controller: QuestionSelectionCtrl,
  controllerAs: 'selection',
  bindToController: true
};

