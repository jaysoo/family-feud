import choices from './choicesDirective';

describe('Choices', () => {
  var ctrl, store;

  beforeEach(() => {
    store = jasmine.createSpyObj('choiceStore', ['getAll', 'addChangeListener']);
    ctrl = new choices.controller(store);
  });

  describe('updateChoices', () => {
    it('loads choices from the store', () => {
      store.getAll.and.returnValue([
        {text: 'Foo'}, {text: 'Bar'}
      ]);

      ctrl.updateChoices();

      expect(ctrl.choices).toEqual([
        {text: 'Foo'}, {text: 'Bar'}
      ]);
    });
  });
});
