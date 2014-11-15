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

      if (rawData) {
        // Let's Angular react to the change.
        this.timeout(() =>{
          this.actionCreators.receiveButtonPress(rawData);
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

  setCurrentQuestion(question) {
    console.log('%cSet current question %s', 'color:blue', question.title);
    this.ref.child('currentQuestion').set(question.id);
  }
}

export default FirebaseApiUtils;
