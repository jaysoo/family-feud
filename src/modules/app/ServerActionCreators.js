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
}

export default RemoteActionCreators;
