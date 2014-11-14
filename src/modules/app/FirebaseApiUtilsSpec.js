import FirebaseApiUtils from './FirebaseApiUtils';

describe('FirebaseApiUtils', () => {
  var utils, ref, actionCreators, snapshot, timeout;

  beforeEach(() => {
    var childRef = {
      on(evt, cb) {
        cb(snapshot);
      }
    };

    timeout = (cb) => cb();

    snapshot = jasmine.createSpyObj('snapshot', ['val']);

    ref = jasmine.createSpyObj('ref', ['child']);
    ref.child.and.returnValue(childRef);

    actionCreators = jasmine.createSpyObj('actionCreators', ['receiveAll']);

    utils = new FirebaseApiUtils(ref, actionCreators, timeout);
  });

  describe('watchQuestions', () => {
    it('fetches questions from firebase reference', () => {
      utils.watchQuestions();
      expect(ref.child).toHaveBeenCalledWith('questions');
    });

    it('creates a receive action with messages', () => {
      snapshot.val.and.returnValue('ALL QUESTIONS');

      utils.watchQuestions();

      expect(actionCreators.receiveAll).toHaveBeenCalledWith('ALL QUESTIONS');
    });

    it('ignores empty data', () => {
      snapshot.val.and.returnValue(undefined);

      utils.watchQuestions();

      expect(actionCreators.receiveAll).not.toHaveBeenCalled();
    });
  });
});
