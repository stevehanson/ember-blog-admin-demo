App.UsersNewRoute = Ember.Route.extend({

  controllerName: 'users.edit',

  renderTemplate: function() {
    this.render('users.edit');
  },

  model: function() {
    return this.store.createRecord('user');
  }

});