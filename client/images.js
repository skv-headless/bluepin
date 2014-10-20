Template.layout.images = function(){
  return DBFiles.find({user:Meteor.userId()});
};

Template.layout.events({
  'submit form': function(e, template) {
    e.preventDefault();
    var file = template.find('#fileinput').files[0];
    var meteoruser = Meteor.userId();
    var reader = new FileReader();
    reader.onload = function(e) {
      DBFiles.insert({src:e.target.result,user:meteoruser});
    };
    reader.readAsDataURL(file);
  }
});
