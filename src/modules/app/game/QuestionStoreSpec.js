import AppDispatcher from '../AppDispatcher';
import QuestionStore from './QuestionStore';

describe('QuestionStore', () => {
  var dispatcher = new AppDispatcher();
  var rawQuestions, store;

  beforeEach(() => {
    store = new QuestionStore(dispatcher);

    rawQuestions = [
      {id: 1, name: 'Foo'},
      {id: 2, name: 'Bar'}
    ];
  });

  describe('receiving questions', () => {
    it('loads all questions', (done) => {
      store.addChangeListener(() => {
        expect(store.getAll()).toEqual(rawQuestions);
        done();
      });

      dispatcher.handleServerAction({
        type: 'RECEIVE_RAW_QUESTIONS',
        rawQuestions: rawQuestions
      });
    });
  });
});

