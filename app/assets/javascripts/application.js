//= require jquery
//= require handlebars
//= require ember
//= require ember-data
//= require_self
//= require blog_ember

window.App = Ember.Application.create();

App.Router.map(function() {
  this.resource('users');
});

App.ApplicationStore = DS.Store.extend();

App.ApplicationAdapter = DS.ActiveModelAdapter.extend();
