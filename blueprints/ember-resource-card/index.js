/*jshint node:true*/
module.exports = {
  description: '',
  normalizeEntityName: function() {},
  afterInstall: function(options) {
    this.addAddonToProject('ember-ui-helpers', '');
    this.addAddonToProject('ember-cli-state-select', '');
    return this.addAddonToProject("ember-aupac-typeahead","^2.1.1");
  }
};
