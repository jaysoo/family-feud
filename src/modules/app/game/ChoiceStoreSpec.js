import AppDispatcher from '../AppDispatcher';
import ChoiceStore from './ChoiceStore';

describe('ChoiceStore', () => {
  var dispatcher = new AppDispatcher();
  var choices, choiceStore, questionStore;

  beforeEach(() => {
    questionStore = jasmine.createSpyObj('questionStore', ['getAll', 'getCurrent']);
    questionStore.getCurrent.and.returnValue({
      title: 'What is the air-speed velocity of an unladen swallow?',
      choices: [
        { text: '15 km/h', points: 4 },
        { text: '60 km/h', points: 6 },
        { text: 'European or African?', points: 90 }
      ]
    });

    choiceStore = new ChoiceStore(dispatcher, questionStore);
  });

  describe('getAll', () => {
    it('returns choices from current question', () => {
      expect(choiceStore.getAll()).toEqual([
        { text: '15 km/h', points: 4 },
        { text: '60 km/h', points: 6 },
        { text: 'European or African?', points: 90 }
      ]);
    });
  });
});
