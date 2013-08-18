window.Todo3 = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(data) {
    alert('Hello from Backbone!');
    var projects = Todo3.Collections.Projects(data.projects);
    new Todo3.Routers.Projects({projects: projects});
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Todo3.initialize();
});
