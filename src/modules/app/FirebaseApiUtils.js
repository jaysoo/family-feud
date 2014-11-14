class FirebaseApiUtils {
  constructor(firebaseRef, remoteActionCreators) {
    this.ref = firebaseRef;
    this.actionCreators = remoteActionCreators;
  }

  getAllMessages() {
    this.ref.child('questions').on('value', (snapshot) => {
      this.actionCreators.receiveAll(snapshot.val());
    });
  }
}

export default FirebaseApiUtils;
