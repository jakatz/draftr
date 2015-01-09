Meteor.publish('managers', function(){
  return Managers.find();
});
