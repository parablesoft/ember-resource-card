/*jshint node:true*/
module.exports = {
  description: '',
  normalizeEntityName: function() {},
  afterInstall: function(options) {
    return this.addAddonsToProject({
      packages: [
        { name: 'ember-bootstrap', target: '0.11.3' },
        { name: 'ember-font-awesome', target: '2.2.0' },
        { name: 'ember-aupac-typeahead', target: '2.1.1' },
        { name: 'ember-ui-helpers', target: '0.0.34' },
        { name: 'ember-changeset', target: '1.2.0' },
	{ name : 'ember-cli-states-select', target: '0.0.9'}
      ],
      blueprintOptions: {
        saveDev: true
      }
    });
  }
};



