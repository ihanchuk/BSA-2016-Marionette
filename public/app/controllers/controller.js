var MyController = Marionette.Controller.extend({
    context:null,
    bindContext:function(newContext){
        this.context = newContext;
    },
    home: function() {
        var testView =require('../views/testView.js');
        this.context.content.show(new testView);
    },
    profile: function() {
        console.log(this.context);
    }
});

contr = new MyController;

module.exports = contr;