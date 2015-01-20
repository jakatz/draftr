Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {
    return Meteor.subscribe('managers');
  }
});

Router.map(function() {
  this.route('managersList', {path: '/'});

  this.route('managerPage', {
    path: '/managers/:_id',
    data: function() {
      return Managers.findOne(this.params._id);
    }
  });
});

Router.onBeforeAction('loading');
