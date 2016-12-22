/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-resource-card',
  isDevelopingAddon: function(){
    return true;
  },
  included: function(app, parentAddon) {
    this._super.included.apply(this, arguments);
    // see: https://github.com/ember-cli/ember-cli/issues/3718
    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }
    app.import("vendor/assets/stylesheets/ember-resource-card.css");
    app.import("bower_components/semantic-ui-card/card.css");
    app.import("bower_components/semantic-ui-button/button.css");
  }
};
