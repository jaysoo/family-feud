import { ActionTypes } from './constants';

class RemoteActionCreators {
  constructor(dispatcher) {
    this.dispatcher = dispatcher;
  }

  receiveAll(rawQuestions) {
    this.dispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_RAW_QUESTIONS,
      rawQuestions: rawQuestions
    });
  }

  receiveAllTeamInfo(rawTeamInfo) {
    this.dispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_RAW_TEAM_INFO,
      rawTeamInfo: rawTeamInfo
    });
  }

  receiveCurrentQuestion(questionId) {
    this.dispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_CURRENT_QUESTION,
      questionId: questionId
    });
  }

  receiveButtonPress(buttonPressData) {
    this.dispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_BUTTON_PRESS,
      buttonPressData: buttonPressData
    });
  }

  receiveRevealedChoices(revealed) {
    this.dispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_REVEALED_CHOICES,
      revealed: revealed
    });
  }

  receiveWrongAnswer() {
    this.dispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_WRONG_ANSWER
    });
  }
}

export default RemoteActionCreators;
