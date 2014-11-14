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

  watchRevealedChoices() {
    this.ref.child('revealedChoices').on('value', (snapshot) => {
      var data = snapshot.val();

      console.log('%cReceived revealed choices', 'color:blue');

      if (data) {
        // Let's Angular react to the change.
        this.timeout(() =>{
          this.actionCreators.receiveRevealedChoices(data);
        }, 0);
      }
    });
  }

  unwatchRevealedChoices() {
    this.ref.child('revealedChoices').off('value');
  }

  setChoiceAsRevealed(choice) {
    console.log('%cSet as revealed %s', 'color:blue', choice.text);
    this.ref.child('revealedChoices').child(choice.id).set(true);
  }

  resetsetRevealedChoices() {
    console.log('%cReset revealed choices', 'color:blue');
    this.ref.child('revealedChoices').set(null);
  }
}

export default FirebaseApiUtils;
