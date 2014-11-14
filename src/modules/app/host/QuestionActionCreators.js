import { ActionTypes } from '../constants';

class QuestionActionsCreators {
  constructor(dispatcher) {
    this.dispatcher = dispatcher;
  }

  selectQuestion(question) {
    console.log('%Selected %s', 'color:green', question.title);
    this.dispatcher.handleViewAction({
      type: ActionTypes.HOST_SELECT_QUESTION,
      question: question
    });
  }
}

export default QuestionActionsCreators;


