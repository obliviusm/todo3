window.Todo3 = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(data) {
    //alert(data.projects[0].id);
    //var projects = new Todo3.Collections.Projects(data.projects);
    this.router = new Todo3.Routers.Projects(data.projects);
    Backbone.history.start();
  }
};

//$(document).ready(function(){
//  Todo3.initialize();
//});
