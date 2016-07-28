var BookItemView = Backbone.Marionette.ItemView.extend({
    tagName: "tr",
    template: '#books-template',
    ui: {
        deleteModel: ".deleteModel",
        updateModel: ".updateModel"
    },
    DeleteModelAction:function(){
        this.model.destroy({ headers: {_token:window.__token}});
    },
    UpdateModelAction:function(){
       this.model.set({title:"New text title"});
    },
    events:{
        "click @ui.deleteModel":'DeleteModelAction',
        "click @ui.updateModel":'UpdateModelAction',
    },
    modelEvents:{
        "change":"render"
    },
});

module.exports = BookItemView;

