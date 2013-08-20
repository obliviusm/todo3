Todo3.Views.ProjectsIndex = Backbone.View.extend({
    el: '#app',
    //template: _.template("<h3>Hello <%= name %></h3>"),
    //template: JST['projects/index'],

    render: function(){
        this.addAll();
        //this.$el.html(this.template( {name: this.model.get('name')} ));
        return this;
    },
    addAll: function(){
        this.$el.empty();
        this.collection.forEach(this.addOne, this);
    },

    addOne: function(project){
        var projectShowView = new Todo3.Views.ProjectShow({model: project});
        this.$el.append(projectShowView.render().el);
    }
});
