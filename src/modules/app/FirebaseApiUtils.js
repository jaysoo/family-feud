class FirebaseApiUtils {
  constructor(firebaseRef, serverActionCreators, $timeout) {
    this.ref = firebaseRef;
    this.actionCreators = serverActionCreators;
    this.timeout = $timeout;
  }

  watchQuestions() {
    this.ref.child('questions').on('value', (snapshot) => {
      var rawData = snapshot.val();

      console.log('%cReceived raw questions', 'color:blue');

      if (rawData) {
        // Let's Angular react to the change.
        this.timeout(() =>{
          this.actionCreators.receiveAll(rawData);
        }, 0);
      }
    });
  }

  watchTeamInfo() {
    this.ref.child('teams').on('value', (snapshot) => {
      var rawData = snapshot.val();

      console.log('%cTeam Info', 'color:blue');

      if (rawData) {
        // Let's Angular react to the change.
        this.timeout(() =>{
          this.actionCreators.receiveAllTeamInfo(rawData);
        }, 0);
      }
    });
  }

  watchButtonPresses() {
    this.ref.child('buttonIO').on('value', (snapshot) => {
      var rawData = snapshot.val();

      console.log('%cButton Pressed', 'color:blue');

      if (rawData.buttonId) {
        // Let's Angular react to the change.
        this.timeout(() =>{
          this.actionCreators.receiveButtonPress(rawData);
        }, 0);
      } else {
        this.timeout(() =>{
          this.actionCreators.buttonsCleared();
        }, 0);
      }
    });
  }

  unwatchQuestions() {
    this.ref.child('questions').off('value');
  }

  watchCurrentQuestion() {
    this.ref.child('currentQuestion').on('value', (snapshot) => {
      var questionId = snapshot.val();

      console.log('%cReceived current question', 'color:blue');

      if (questionId) {
        // Let's Angular react to the change.
        this.timeout(() =>{
          this.actionCreators.receiveCurrentQuestion(questionId);
        }, 0);
      }
    });
  }

  unwatchCurrentQuestion() {
    this.ref.child('currentQuestion').off('value');
  }

  setCurrentQuestion(questionId) {
    console.log('%cSet current question %s', 'color:blue', questionId);
    this.ref.child('currentQuestion').set(questionId);
  }

  watchRevealedChoices() {
    this.ref.child('revealedChoices').on('value', (snapshot) => {
      var data = snapshot.val();

      console.log('%cReceived revealed choices', 'color:blue');

      // Let's Angular react to the change.
      this.timeout(() =>{
        this.actionCreators.receiveRevealedChoices(data);
      }, 0);
    });
  }

  unwatchRevealedChoices() {
    this.ref.child('revealedChoices').off('value');
  }

  setChoiceAsRevealed(choice) {
    console.log('%cSet as revealed %s', 'color:blue', choice.text);
    this.ref.child('revealedChoices').child(choice.id).set(true);
  }

  resetRevealedChoices() {
    console.log('%cReset revealed choices', 'color:blue');
    this.ref.child('revealedChoices').set(null);
  }

  resetButtons() {
    console.log('%cReset buttons', 'color:blue');
    this.ref.child('buttonIO/buttonId').set(null);
  }

  setWrongAnswer() {
    this.ref.child('wrong_answer').set(Date.now().toLocaleString());
  }

  watchWrongAnswer() {
    this.ref.child('wrong_answer').on('value', (wrongAnswer) => {
      var answer = wrongAnswer.val();

      console.log('%cReceived error', 'color:blue');
      console.log(answer);

      this.timeout(() =>{
        this.actionCreators.receiveWrongAnswer();
      }, 0);
    });
  }

  watchScores() {
    this.ref.child('scores').on('value', (snapshot) => {
      var scores = snapshot.val();

      console.log('%cReceived scores', 'color:blue');
      console.log(scores);

      this.timeout(() =>{
        this.actionCreators.receiveScores(scores);
      }, 0);
    });
  }

  setScores(scores) {
    this.ref.child('scores').set(scores);
  }
}

export default FirebaseApiUtils;
