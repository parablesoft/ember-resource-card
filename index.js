/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-resource-card',
  included: function(app, parentAddon) {
    this._super.included.apply(this, arguments);
    var target = (parentAddon || app);
    app.import("vendor/assets/stylesheets/ember-resource-card.css");
    app.import("bower_components/semantic-ui-card/card.css");
    app.import("bower_components/semantic-ui-button/button.css");
  }
};
