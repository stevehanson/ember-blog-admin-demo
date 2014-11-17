App.Router.map(function() {
  this.resource('users', function() {
    this.route('edit', { path: '/:user_id' });
    this.route('new');
  });

  this.resource('posts', function() {
    this.route('edit', { path: '/:post_id' });
    this.route('new');
  });
});