Todo3.Routers.Projects = Backbone.Router.extend({
    routes: {
        "": "index"
    },
    initialize: function(data) {
        //alert('Hello, world! This is a Backbone router initialize.');
        this.projects = new Todo3.Collections.Projects(data);
        this.projectsIndexView = new Todo3.Views.ProjectsIndex({collection: this.projects});
        //$('#app').html(this.projectsIndexView.el);
        this.projectsIndexView.render();
    },
    index: function() {
        //$('#app').html(this.projects.el);
        //this.projects.fetch();
    }
});
