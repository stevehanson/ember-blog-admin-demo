Ember.Handlebars.registerBoundHelper('markdown', function (content) {
  return new Handlebars.SafeString(new Showdown.converter().makeHtml(content));
});