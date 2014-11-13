import _ from 'lodash';
import Flux from 'flux';

class AppDispatcher extends Flux.Dispatcher {
  handleServerAction(action) {
    var payload = {
      source: PayloadSources.SERVER_ACTION,
      action: action
    };
    this.dispatch(payload);
  }

  handleViewAction(action) {
    var payload = {
      source: PayloadSources.VIEW_ACTION,
      action: action
    };
    this.dispatch(payload);
  }
}

export default AppDispatcher;

