import { ActionTypes } from '../constants';

class HostActionCreators {
  constructor(dispatcher, firebaseApiUtils) {
    this.dispatcher = dispatcher;
    this.apiUtils = firebaseApiUtils;
  }

  clickChoice(choice) {
    console.log('%cClicked on %s', 'color:green', choice.text);
    this.dispatcher.handleViewAction({
      type: ActionTypes.HOST_CLICK_CHOICE,
      choice: choice
    });
  }

  selectQuestion(question) {
    console.log('%Selected %s', 'color:green', question.title);
    this.apiUtils.setCurrentQuestion(question);
  }
}

export default HostActionCreators;

