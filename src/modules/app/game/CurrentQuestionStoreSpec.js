import AppDispatcher from '../AppDispatcher';
import CurrentQuestionStore from './CurrentQuestionStore';

describe('CurrentQuestionStore', () => {
  var store, questionStore, dispatcher;

  beforeEach(() => {
    dispatcher = new AppDispatcher();
    questionStore = jasmine.createSpyObj('questionStore', [
      'getAll'
    ]);

    store = new CurrentQuestionStore(dispatcher, questionStore);
  });

  describe('setCurrentQuestion', () =>{
    it('sets the current question', () => {
      questionStore.getAll.and.returnValue([
        {id: 1}
      ]);

      store.setCurrentQuestion(1);

      expect(store.getCurrent()).toEqual({id: 1});
    });
  });
});
