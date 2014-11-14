import FirebaseApiUtils from './FirebaseApiUtils';

describe('FirebaseApiUtils', () => {
  var utils, ref, actionCreators, snapshot;

  beforeEach(() => {
    var childRef = {
      on(evt, cb) {
        cb(snapshot);
      }
    };

    snapshot = jasmine.createSpyObj('snapshot', ['val']);

    ref = jasmine.createSpyObj('ref', ['child']);
    ref.child.and.returnValue(childRef);

    actionCreators = jasmine.createSpyObj('actionCreators', ['receiveAll']);

    utils = new FirebaseApiUtils(ref, actionCreators);
  });

  describe('getAllQuestions', () => {
    it('fetches questions from firebase reference', () => {
      utils.getAllQuestions();
      expect(ref.child).toHaveBeenCalledWith('questions');
    });

    it('creates a receive action with messages', () => {
      snapshot.val.and.returnValue('ALL QUESTIONS');

      utils.getAllQuestions();

      expect(actionCreators.receiveAll).toHaveBeenCalledWith('ALL QUESTIONS');
    });
  });
});
