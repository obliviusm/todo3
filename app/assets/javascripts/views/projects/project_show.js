Todo3.Views.ProjectShow = Backbone.View.extend({
    template: JST['projects/index'],
    render: function() {
        this.$el.html(this.template( this.model.toJSON() ));
        return this;
    }

});
