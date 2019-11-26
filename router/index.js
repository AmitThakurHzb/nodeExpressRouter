
/** first approch */

// var express = require('express');
// var router = express.Router();
// var home_controller = require('../myModules/home');
// var about_controller = require('../myModules/about');

// // Home page route.
// router.get('/', home_controller.info);
// router.get('/info', about_controller.index);
// module.exports = router;

/** Second approch of routing */
module.exports.route = function(app){
  var router = app.Router(),
      home_controller = require('../myModules/home'),
      about_controller = require('../myModules/about');

  // Home page route.
  router.get('/', home_controller.init);
  router.get('/info', about_controller.init);

  return router;
};

