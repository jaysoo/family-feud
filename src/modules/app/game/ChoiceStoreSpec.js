import AppDispatcher from '../AppDispatcher';
import ChoiceStore from './ChoiceStore';

describe('ChoiceStore', () => {
  var dispatcher = new AppDispatcher();
  var choices, store;

  beforeEach(() => {
    store = new ChoiceStore(dispatcher);

    choices = [
      {id: 1, name: 'Foo'},
      {id: 2, name: 'Bar'}
    ];
  });

  describe('receiving choices', () => {
    it('loads all choices', (done) => {
      store.addChangeListener(() => {
        expect(store.getAll()).toEqual(choices);
        done();
      });

      dispatcher.handleServerAction({
        type: 'RECEIVE_CHOICES',
        choices: choices
      });
    });
  });
});
