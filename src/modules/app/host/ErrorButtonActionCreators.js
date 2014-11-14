import { ActionTypes } from '../constants';

class ErrorButtonActionCreators {
  constructor(dispatcher, firebaseApiUtils) {
    this.dispatcher = dispatcher;
    this.apiutils = firebaseApiUtils;
  }

  errorClicked() {
    console.log('Error button pressed');
    this.apiutils.setWrongAnswer();
  }
}

export default ErrorButtonActionCreators;


