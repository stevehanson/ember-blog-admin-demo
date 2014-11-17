App.PostsEditController = Ember.ObjectController.extend({

  hasBody: Ember.computed.notEmpty('body'),

  lookupUsers: function() {

    var self = this;

    this.store.find('user').then(function(users) {
      var userOptions = users.map(function(user) {
        return { id: user.get('id'), name: user.get('name') };
      });

      self.set('userOptions', userOptions);
    });

  }.on('init'),

  actions: {
    savePost: function() {
      this.get('model').save().then(function() {
        this.transitionToRoute('posts');
      }.bind(this));
    }
  }

});