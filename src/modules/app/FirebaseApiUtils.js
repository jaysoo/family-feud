class FirebaseApiUtils {
  constructor(firebaseRef, serverActionCreators) {
    this.ref = firebaseRef;
    this.actionCreators = serverActionCreators;
  }

  getAllMessages() {
    this.ref.child('questions').on('value', (snapshot) => {
      this.actionCreators.receiveAll(snapshot.val());
    });
  }
}

export default FirebaseApiUtils;
