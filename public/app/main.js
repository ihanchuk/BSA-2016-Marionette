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
    var controller = require('./controllers/controller.js');
    controller.bindContext(this);
    var router = require('./router/router.js');
    Backbone.history.start();
});

$(function() { 
    App.start();
});


