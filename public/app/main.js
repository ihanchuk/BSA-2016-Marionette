// var BookModel = Backbone.Model.extend({
//     urlRoot : '/books/',
//     initialize:function(){
//         // var that = this;
//         // this.fetch().then(function(){
//         // });
//         //this.fetch();
//     },
//     url: function() {
//         return this.urlRoot + this.id;
//     },
// });
//
// var BooksCollection = Backbone.Collection.extend({
//     url: '/books',
//     model: BookModel,
//     initialize:function(){
//         var that = this;
//         this.fetch().then(function(){
//             // console.log(that.models[10].attributes.year);
//            // console.log(that.get(10).get("year"));
//         });
//     }
// });
//
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
// BooksView.render();
//
// document.body.appendChild(BooksView.el);
//





// var tv = new testView();
// tv.render();
//



App = new Backbone.Marionette.Application({
    test:123
});

App.addRegions({
    'nav': '#nav',
    'content': '#content'
});

App.on("start", function(options){
    var router = require('./router/router.js');
    var testView =require('./views/testView.js');
    Backbone.history.start();
    this.content.show(new testView);
});

$(function() {
    App.start();
});


