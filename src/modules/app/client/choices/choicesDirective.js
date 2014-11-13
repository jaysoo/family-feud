'use strict';

function ChoicesCtrl() {
  this.choices = [
    { text: 'Hello World!' }
  ];
}

module.exports = function() {
  return {
    templateUrl: 'app/client/choices/choices.html',
    controller: ChoicesCtrl,
    controllerAs: 'choices',
    bindToController: true
  };
};
