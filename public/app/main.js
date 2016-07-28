// var BookModel = Backbone.Model.extend({
//     urlRoot : '/books/',
//     url: function() {
//         return this.urlRoot + this.id;
//     },
// });
//
// var BooksCollection = Backbone.Collection.extend({
//     url: '/books',
//     model: BookModel,
// });
// //
// var books = new BooksCollection();
//
// var BookItemView = Backbone.Marionette.ItemView.extend({
//     tagName: "tr",
//     template: '#books-template'
// });
//
// var BooksCollectionView = Backbone.Marionette.CollectionView.extend({
//     tagName: "table",
//     childView: BookItemView
// });
//
// var BooksView = new BooksCollectionView({ collection: books  });
//
//BooksView.render();


App = new Backbone.Marionette.Application({
    test:123
});

App.addRegions({
    'nav': '#nav',
    'content': '#content'
});

App.on("start", function(options){
    var controller = require('./controllers/controller.js');
    controller.bindContext(this);
    var router = require('./router/router.js');
    Backbone.history.start();
});

$(function() { 
    App.start();
});


