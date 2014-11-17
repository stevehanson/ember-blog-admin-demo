App.UsersEditController = Ember.ObjectController.extend({
  roles: ['admin', 'user', 'guest'],

  actions: {
    saveUser: function() {
      this.get('model').save().then(function() {
        this.transitionTo('users');
      }.bind(this));
    }
  }

});