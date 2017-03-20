import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		save: function(model) {
			var component = this;
			model.save().then(function() {
				component.sendAction('handleRedirect');
			});
		},
		delete: function(model) {
			var component = this;
			model.destroyRecord().then(function() {
				component.sendAction('handleRedirect');
			});
		}
	}
});
