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
	    var router = __webpack_require__(1);
	    var testView =__webpack_require__(3);
	    Backbone.history.start();
	    this.content.show(new testView);
	});

	$(function() {
	    App.start();
	});




/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var controller = __webpack_require__(2);
	var router = new Marionette.AppRouter({
	    controller: controller,
	    appRoutes: {
	        "home": "home",
	        "profile": "profile",
	    }
	});

	module.exports = router;

/***/ },
/* 2 */
/***/ function(module, exports) {

	var MyController = Marionette.Controller.extend({
	    home: function() {
	        console.log(this.test);
	    },
	    profile: function() {
	        alert("profile");
	    }
	});

	module.exports = new MyController;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// var testModel = Backbone.Model.extend();
	// var tModel = new testModel({author:"john doe",title:"Harry Poster"});

	var tModel = __webpack_require__(4);

	var testView = Marionette.ItemView.extend({
	    model:tModel,
	    ui: {
	        ttl: "div.title",
	        clicker:"#changeModel"
	    },
	    getTitle:function(){
	        console.log(this.ui.ttl.text());
	    },
	    events:{
	        "click @ui.clicker":'getTitle'
	    },
	    modelEvents:{
	        "change":"render"
	    },
	    template:"#tTemplate"
	});

	module.exports = testView;

/***/ },
/* 4 */
/***/ function(module, exports) {

	var testModel = Backbone.Model.extend();
	var tModel = new testModel({author:"john doe",title:"Harry Poster"});

	module.exports = tModel;

/***/ }
/******/ ]);