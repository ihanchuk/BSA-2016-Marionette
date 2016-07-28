/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

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
	    var controller = __webpack_require__(1);
	    controller.bindContext(this);
	    var router = __webpack_require__(2);
	    Backbone.history.start();
	});

	$(function() { 
	    App.start();
	});




/***/ },
/* 1 */
/***/ function(module, exports) {

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

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var controller = __webpack_require__(1);
	var router = new Marionette.AppRouter({
	    controller: controller,
	    appRoutes: {
	        "": "home",
	        "profile": "profile",
	    }
	});

	module.exports = router;

/***/ }
/******/ ]);