var BookModel = Backbone.Model.extend({
    urlRoot : '/books/',
    url: function() {
        return this.urlRoot + this.id;
    },
});

module.exports =BookModel;