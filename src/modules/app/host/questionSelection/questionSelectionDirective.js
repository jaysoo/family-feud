import angular from 'angular';

class QuestionSelectionCtrl {
  constructor(questionStore, hostActionCreators) {
    this.store = questionStore;
    this.store.addChangeListener(() => this.loadQuestions());
    this.hostActionCreators = hostActionCreators;
  }

  loadQuestions() {
    this.questions = this.store.getAll();
    this.selected = this.store.getCurrent();
  }

  selectQuestion(question) {
    this.hostActionCreators.selectQuestion(question);
  }
}

export default {
  templateUrl: 'app/host/questionSelection/template.html',
  controller: QuestionSelectionCtrl,
  controllerAs: 'selection',
  bindToController: true
};

