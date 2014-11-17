App.PostsNewRoute = Ember.Route.extend({

  controllerName: 'posts.edit',

  renderTemplate: function() {
    this.render('posts.edit');
  },

  model: function() {
    return this.store.createRecord('user');
  }

});