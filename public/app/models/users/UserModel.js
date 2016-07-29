var UserModel = Backbone.Model.extend({
    urlRoot : '/books/',
    url: function() {
        return this.urlRoot + this.id;
    },
});

module.exports =UserModel;