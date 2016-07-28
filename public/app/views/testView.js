var tModel = require("../models/model.js");

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