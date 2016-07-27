var MyController = Marionette.Controller.extend({
    home: function() {
        console.log(this.test);
    },
    profile: function() {
        alert("profile");
    }
});

module.exports = new MyController;