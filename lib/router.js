Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {
    return Meteor.subscribe('managers');
  }
});

Router.map(function() {
  this.route('managersList', {path: '/'});
});

Router.onBeforeAction('loading');
