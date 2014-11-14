import AppDispatcher from '../AppDispatcher';
import QuestionStore from './QuestionStore';

describe('QuestionStore', () => {
  var dispatcher = new AppDispatcher();
  var questions, store;

  beforeEach(() => {
    store = new QuestionStore(dispatcher);

    questions = [
      {id: 1, name: 'Foo'},
      {id: 2, name: 'Bar'}
    ];
  });

  describe('receiving questions', () => {
    it('loads all questions', (done) => {
      store.addChangeListener(() => {
        expect(store.getAll()).toEqual(questions);
        done();
      });

      dispatcher.handleServerAction({
        type: 'RECEIVE_QUESTIONS',
        questions: questions
      });
    });
  });
});

