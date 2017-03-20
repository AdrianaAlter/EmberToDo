import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('todo', params.id).then(function(todo){
      todo.destroyRecord();
    });
  },
  actions: {
    displayTodos: function() {
      this.transitionTo('todos');
    }
  }
});
