var MyController = Marionette.Controller.extend({
    context:null,
    bindContext:function(newContext){
        this.context = newContext;
    },
    home: function() {
        var that = this.context;

        var BookModel = Backbone.Model.extend({
            urlRoot : '/books/',
            url: function() {
                return this.urlRoot + this.id;
            },
        });

        var BookCollection = Backbone.Collection.extend({
            url: '/books',
            model: BookModel,
        });

        var BookItemView = Backbone.Marionette.ItemView.extend({
            tagName: "tr",
            template: '#books-template'
        });

        var BooksCollectionView = Backbone.Marionette.CollectionView.extend({
            childView: BookItemView ,
            tagName: 'table',
            className:'table table-striped'
        });

        var BookCollection = new BookCollection();

        BookCollection.fetch().done(function () {
            var view =new BooksCollectionView({collection: BookCollection});
            that.content.show( view);
        });

    },
    profile: function() {
        console.info("rendering profile action");
    }
});

contr = new MyController;

module.exports = contr;