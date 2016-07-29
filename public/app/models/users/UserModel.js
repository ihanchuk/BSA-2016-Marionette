var UserModel = Backbone.Model.extend({
    urlRoot : '/users/',
    url: function() {
        return this.urlRoot + this.id;
    },
});

module.exports =UserModel;