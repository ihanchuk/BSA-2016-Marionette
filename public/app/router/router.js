var controller = require('../controllers/controller.js');
var router = new Marionette.AppRouter({
    controller: controller,
    appRoutes: {
        "": "home",
        "users": "users",
    }
});

module.exports = router;