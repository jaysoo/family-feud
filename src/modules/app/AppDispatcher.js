var _ = require('lodash');
var Dispatcher = require('flux').Dispatcher;


function AppDispatcher () {
}

_.extend(AppDispatcher.prototype, Dispatcher.prototype, {
  handleServerAction: function(action) {
    var payload = {
      source: PayloadSources.SERVER_ACTION,
      action: action
    };
    this.dispatch(payload);
  },

  handleViewAction: function(action) {
    var payload = {
      source: PayloadSources.VIEW_ACTION,
      action: action
    };
    this.dispatch(payload);
  }
});

module.exports = AppDispatcher;

