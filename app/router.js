import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});
Router.map(function() {
  this.route('todos');
});
Router.map(function() {
  this.route('todos', function() {
    this.route('new');
    this.route('edit', {path : '/edit/:edit_id'});
    this.route('delete', {path : '/delete/:delete_id'});
  });
});

export default Router;
