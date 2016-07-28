var MyController = Marionette.Controller.extend({
    context:null,
    bindContext:function(newContext){
        this.context = newContext;
    },
    home: function() {
        var that = this.context;
        var BookCollection = require("../collections/books/BookCollection.js");
        var BookItemView = require("../views/books/BookItemView.js");
        var BooksCollectionView =  require("../views/books/BooksCollectionView.js");
        var BookCollection = new BookCollection();

        BookCollection.fetch().done(function () {
            var view =new BooksCollectionView({collection: BookCollection});
            that.content.show(view);
        });

    },
    profile: function() {
        console.info("rendering profile action");
    }
});

contr = new MyController;

module.exports = contr;