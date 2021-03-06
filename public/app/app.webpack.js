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

	App = new Backbone.Marionette.Application({
	    test:123
	});

	App.addRegions({
	    'nav': '#nav',
	    'content': '#content'
	});

	App.on("start", function(options){
	    /*Sending XHR token to Laravel*/
	    $.ajaxSetup({
	        headers: { 'X-CSRF-Token' : $('meta[name=_token]').attr('content') }
	    });
	    var controller = __webpack_require__(1);
	    controller.bindContext(this);
	    var router = __webpack_require__(12);
	    Backbone.history.start();
	});

	$(function() { 
	    App.start();
	});




/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var MyController = Marionette.Controller.extend({
	    context:null,
	    bindContext:function(newContext){
	        this.context = newContext;
	    },
	    books: function() {
	        var that = this.context;
	        var BookCollection = __webpack_require__(2);
	        var BookItemView = __webpack_require__(4);
	        var BooksCollectionView =  __webpack_require__(5);
	        var BookCollection = new BookCollection();

	        BookCollection.fetch().done(function () {
	            var view =new BooksCollectionView({collection: BookCollection});
	            that.content.show(view);
	        });

	    },
	    users: function() {
	        var that = this.context;
	        var UserCollection = __webpack_require__(6);
	        var UserItemView = __webpack_require__(8);
	        var UserCollectionView =  __webpack_require__(9);
	        var UserCollection = new UserCollection();

	        UserCollection.fetch().done(function () {
	            var view =new UserCollectionView({collection: UserCollection});
	            that.content.show(view);
	        });
	    },
	    CreateUser:function(){
	        var that= this.context;
	        var CreateUserView =  __webpack_require__(10);
	        var view = new CreateUserView();
	        that.content.show(view);
	    },
	    CreateBook:function(){
	        var that= this.context;
	        var CreateBookView =  __webpack_require__(11);
	        var view = new CreateBookView();
	        that.content.show(view);
	    }
	});

	contr = new MyController;

	module.exports = contr;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var BookModel = __webpack_require__(3);
	var BookCollection = Backbone.Collection.extend({
	    url: '/books',
	    model: BookModel,
	});
	module.exports = BookCollection;

/***/ },
/* 3 */
/***/ function(module, exports) {

	var BookModel = Backbone.Model.extend({
	    urlRoot : '/books/',
	    url: function() {
	        if(this.id) {
	            return this.urlRoot + this.id;
	        }
	        else
	        {
	            return "/books";
	        }
	    },
	    validate:function(){
	        var text  = new RegExp(/^[a-zA-Z ]+$/);
	        var year =new RegExp(/^\d{4}$/);

	        var errors = [];

	        if(!text.test(this.get("author"))) errors.push({'author': 'failed'})
	        if(!text.test(this.get("genre"))) errors.push({'genre': 'failed'})
	        if(!text.test(this.get("title"))) errors.push({'title': 'failed'})
	        if(!year.test(this.get("year"))) errors.push({'year': 'failed'})

	        if (errors.length) return errors;
	    }
	});

	module.exports =BookModel;

/***/ },
/* 4 */
/***/ function(module, exports) {

	var BookItemView = Backbone.Marionette.ItemView.extend({
	    tagName: "tr",
	    template: '#books-template',
	    ui: {
	        deleteModel: ".deleteModel",
	        syncModel: ".syncModel",
	        author:".author",
	        year:".year",
	        genre:".genre",
	        title:'.title'
	    },
	    DeleteModelAction:function(){
	        this.model.destroy({ headers: {_token:window.__token}});
	    },
	    SyncModelAction:function(){
	        this.model.validate();

	        if (this.model.isValid()){
	            this.model.save(null, {
	                success: function (model, response) {
	                    alert(response.responseText);
	                },
	                error: function (model, response) {
	                    alert(response.responseText);
	                }
	            });
	        } else{
	            alert("Data validation errors. See console if u are developer  :-)");
	            console.table(this.model.validate());
	        }
	    },
	    
	    SetModelProperty:function (event) {
	        console.info("setting new value to model field");
	       var field = event.target.className;
	        var newVal =$(event.currentTarget).val();
	        var newData = {};
	        newData[field] = newVal;
	        this.model.set(newData);
	    },
	    events:{
	        "click @ui.deleteModel":'DeleteModelAction',
	        "click @ui.syncModel":'SyncModelAction',
	        "change @ui.year":"SetModelProperty",
	        "change @ui.title":"SetModelProperty",
	        "change @ui.genre":"SetModelProperty",
	        "change @ui.author":"SetModelProperty",
	        "focusout  @ui.year":"SetModelProperty",
	        "focusout  @ui.title":"SetModelProperty",
	        "focusout  @ui.genre":"SetModelProperty",
	        "focusout  @ui.author":"SetModelProperty",
	    },
	    modelEvents:{
	        "change":"render"
	    },
	});

	module.exports = BookItemView;



/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var BookItemView = __webpack_require__(4);
	var BooksCollectionView = Backbone.Marionette.CollectionView.extend({
	    childView: BookItemView,
	    tagName: 'table',
	    className:'table table-striped mainTable'
	});

	module.exports = BooksCollectionView;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var UserModel = __webpack_require__(7);
	var UserCollection = Backbone.Collection.extend({
	    url: '/users',
	    model: UserModel,
	});
	module.exports = UserCollection;

/***/ },
/* 7 */
/***/ function(module, exports) {

	var UserModel = Backbone.Model.extend({
	    urlRoot : '/users/',
	    url: function() {
	        if(this.id) {
	            return this.urlRoot + this.id;
	        }
	        else
	        {
	            return "/users"
	        }
	    },
	    validate:function(){
	        var text  = new RegExp(/^[a-zA-Z ]+$/);
	        var email = new RegExp(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);

	        var errors = [];

	        if(!email.test(this.get("email"))) errors.push({'email': 'failed'})
	        if(!text.test(this.get("first_name"))) errors.push({'first_name': 'failed'})
	        if(!text.test(this.get("last_name"))) errors.push({'last_name': 'failed'})

	        if (errors.length) return errors;
	    }
	});

	module.exports =UserModel;

/***/ },
/* 8 */
/***/ function(module, exports) {

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
	        this.model.validate();

	        if (this.model.isValid()){
	            this.model.save(null, {
	                success: function (model, response) {
	                    alert(response.responseText);
	                },
	                error: function (model, response) {
	                    alert(response.responseText);
	                }
	            });
	        } else{
	            alert("Data validation errors. See console if u are developer  :-)");
	            console.table(this.model.validate());
	        }
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
	        "focusout  @ui.first_name":"SetModelProperty",
	        "focusout  @ui.last_name":"SetModelProperty",
	        "focusout  @ui.email":"SetModelProperty",
	    },
	    modelEvents:{
	        "change":"render",
	    },
	});

	module.exports = BookItemView;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var UserItemView = __webpack_require__(8);
	var UserCollectionView = Backbone.Marionette.CollectionView.extend({
	    childView: UserItemView,
	    tagName: 'table',
	    className:'table table-striped mainUsersTable'
	});

	module.exports = UserCollectionView;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var UserModel =__webpack_require__(7);
	var  CreateUserView = Marionette.ItemView.extend({
	    template: '#user-create-template',
	    tagName:"div",
	    ui:{
	        createButton:"#saveNewUser",
	        cancelButton:"#cancelNewUser",
	        first_name:"#new_first_name",
	        last_name:"#new_last_name",
	        email:"#new_email",
	        password:"#new_password"
	    },
	    events:{
	        "click @ui.createButton":"CreateNewUser",
	        "click @ui.cancelButton":"CancelDialog",
	    },
	    CreateNewUser:function(){
	        var data={
	            "first_name":this.ui.first_name.val(),
	            "last_name":this.ui.last_name.val(),
	            "email":this.ui.email.val(),
	            "password":this.ui.password.val(),
	        };
	        var model = new UserModel(data);

	        model.validate();

	        if (model.isValid()){
	            model.save(null, {
	                success: function (model, response) {
	                    alert(response.responseText);
	                },
	                error: function (model, response) {
	                    alert(response.responseText);
	                }
	            });
	        } else{
	            alert("Data validation errors. See console if u are developer  :-)");
	            console.table(model.validate());
	        }
	    },
	    CancelDialog:function(){
	        window.history.back();
	    }
	});

	module.exports = CreateUserView;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var BookModel =__webpack_require__(3);
	var  CreateBookView = Marionette.ItemView.extend({
	    template: '#book-create-template',
	    tagName:"div",
	    ui:{
	        createButton:"#createNewBook",
	        cancelButton:"#cancelNewBook",
	        year:"#new_book_year",
	        genre:"#new_book_genre",
	        author:"#new_book_author",
	        title:"#new_book_title"
	    },
	    events:{
	        "click @ui.createButton":"CreateNewBook",
	        "click @ui.cancelButton":"CancelDialog",
	    },
	    CreateNewBook:function(){
	        var data={
	            "author":this.ui.author.val(),
	            "genre":this.ui.genre.val(),
	            "year":this.ui.year.val(),
	            "title":this.ui.title.val(),
	        };
	        var model = new BookModel(data);

	        model.validate();

	        if (model.isValid()){
	            model.save(null, {
	                success: function (model, response) {
	                    alert(response.responseText);
	                },
	                error: function (model, response) {
	                    alert(response.responseText);
	                }
	            });
	        } else{
	            alert("Data validation errors. See console if u are developer  :-)");
	            console.table(model.validate());
	        }
	    },
	    CancelDialog:function(){
	        window.history.back();
	    }
	});

	module.exports = CreateBookView;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var controller = __webpack_require__(1);
	var router = new Marionette.AppRouter({
	    controller: controller,
	    appRoutes: {
	        "books": "books",
	        "users": "users",
	        "createuser":"CreateUser",
	        "createbook":"CreateBook"
	    }
	});

	module.exports = router;

/***/ }
/******/ ]);