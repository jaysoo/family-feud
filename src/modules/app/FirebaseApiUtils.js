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

  unwatchQuestions() {
    this.ref.child('questions').off('value');
  }
}

export default FirebaseApiUtils;
