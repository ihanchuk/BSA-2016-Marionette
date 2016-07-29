var controller = require('../controllers/controller.js');
var router = new Marionette.AppRouter({
    controller: controller,
    appRoutes: {
        "books": "books",
        "users": "users",
    }
});

module.exports = router;