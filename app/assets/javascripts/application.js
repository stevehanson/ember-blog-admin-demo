//= require jquery
//= require handlebars
//= require ember
//= require ember-data
//= require_self
//= require blog_ember

window.App = Ember.Application.create({
  Resolver: Ember.DefaultResolver.extend({

    // parsedName is template that is to be looked up in Ember.TEMPLATES
    resolveTemplate: function(parsedName) {

      resolvedTemplate = this._super(parsedName);
      if(resolvedTemplate) { return resolvedTemplate; }


      // if component, eg. "components/modal-window", resolve as
      // "modal-window/component.template"

      var fullName = parsedName.fullNameWithoutType;

      if(fullName.indexOf('components/') === 0) {
        var newName = fullName.substr('components/'.length);
        parsedName.fullNameWithoutType = newName + '/template';

        resolvedTemplate = this._super(parsedName);
        if(resolvedTemplate) { return resolvedTemplate; }
      }

      parsedName.fullNameWithoutType = parsedName.fullNameWithoutType + '/template';
      return this._super(parsedName);

    }
  })

});

App.ApplicationStore = DS.Store.extend();

App.ApplicationAdapter = DS.ActiveModelAdapter.extend();
