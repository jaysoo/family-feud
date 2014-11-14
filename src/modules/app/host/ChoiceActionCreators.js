import { ActionTypes } from '../constants';

class ChoiceActionCreators {
  constructor(dispatcher) {
    this.dispatcher = dispatcher;
  }

  clickChoice(choice) {
    console.log('%cClicked on %s', 'color:green', choice.text);
    this.dispatcher.handleViewAction({
      type: ActionTypes.HOST_CLICK_CHOICE,
      choice: choice
    });
  }
}

export default ChoiceActionCreators;

