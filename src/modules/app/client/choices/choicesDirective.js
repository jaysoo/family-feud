'use strict';

class ChoicesCtrl {
  constructor(choiceStore, revealedChoiceStore) {
    this.store = choiceStore;
    this.store.addChangeListener(() => this.updateChoices());

    this.revealedStore = revealedChoiceStore;
    this.revealedStore.addChangeListener(() => this.updateChoices());
  }

  updateChoices() {
    var choices = this.store.getAll();

    this.choices = choices.map((choice) => {
      return {
        text: choice.text,
        points: choice.points,
        visible: this.revealedStore.isRevealed(choice)
      }
    });
  }
}

export default {
  templateUrl: 'app/client/choices/choices.html',
  controller: ChoicesCtrl,
  controllerAs: 'choices',
  bindToController: true
};
