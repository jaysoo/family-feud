'use strict';

class ChoicesCtrl {
  constructor(choiceStore) {
    this.store = choiceStore;
    this.store.addChangeListener(() => this.updateChoices());
  }

  updateChoices() {
    this.choices = this.store.getAll();
  }
}

export default {
  templateUrl: 'app/client/choices/choices.html',
  controller: ChoicesCtrl,
  controllerAs: 'choices',
  bindToController: true
};
