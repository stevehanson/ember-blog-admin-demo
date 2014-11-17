App.Router.map(function() {
  this.resource('users', function() {
    this.route('edit', { path: '/:user_id' });
    this.route('new');
  });
});