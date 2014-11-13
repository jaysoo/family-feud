'use strict';

class ChoicesCtrl {
  constructor() {
    this.choices = [
      { text: 'Hello World!' }
    ];
  }
}

export default function() {
  return {
    templateUrl: 'app/client/choices/choices.html',
    controller: ChoicesCtrl,
    controllerAs: 'choices',
    bindToController: true
  };
}
