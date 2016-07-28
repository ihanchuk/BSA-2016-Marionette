var controller = require('../controllers/controller.js');
var router = new Marionette.AppRouter({
    controller: controller,
    appRoutes: {
        "": "home",
        "profile": "profile",
    }
});

module.exports = router;