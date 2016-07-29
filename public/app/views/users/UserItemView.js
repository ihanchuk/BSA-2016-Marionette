var BookItemView = Backbone.Marionette.ItemView.extend({
    tagName: "tr",
    template: '#user-template',
    ui: {
        deleteModel: ".deleteUser",
        syncModel: ".syncModel",
        first_name:".first_name",
        last_name:".last_name",
        email:".email",
    },
    DeleteModelAction:function(){
        this.model.destroy({ headers: {_token:window.__token}});
    },
    SyncModelAction:function(){
        this.model.save(null, {
            success: function (model, response) {
                alert(response.responseText);
            },
            error: function (model, response) {
                alert(response.responseText);
            }
        });
    },

    SetModelProperty:function (event) {
        var field = event.target.className;
        var newVal =$(event.currentTarget).val();
        var newData = {};
        newData[field] = newVal;
        this.model.set(newData);
    },
    events:{
        "click @ui.deleteModel":'DeleteModelAction',
        "click @ui.syncModel":'SyncModelAction',
        "change @ui.first_name":"SetModelProperty",
        "change @ui.last_name":"SetModelProperty",
        "change @ui.email":"SetModelProperty",
    },
    modelEvents:{
        "change":"render"
    },
});

module.exports = BookItemView;