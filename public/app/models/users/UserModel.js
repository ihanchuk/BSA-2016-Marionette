var UserModel = Backbone.Model.extend({
    urlRoot : '/users/',
    url: function() {
        return this.urlRoot + this.id;
    },
    validate:function(){
        var text  = new RegExp(/^[a-zA-Z ]+$/);
//        var year =new RegExp(/^\d{4}$/);
        var email = new RegExp(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);

        var errors = [];

        if(!email.test(this.get("email"))) errors.push({'email': 'failed'})
        if(!text.test(this.get("first_name"))) errors.push({'first_name': 'failed'})
        if(!text.test(this.get("last_name"))) errors.push({'last_name': 'failed'})

        if (errors.length) return errors;
    }
});

module.exports =UserModel;