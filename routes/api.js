var express = require('express');
var router = express.Router();

<<<<<<< HEAD

router.get('/', function(req, res, next) {
  var user = [{user:"fake", password:"fake"}]
  res.status(200).send(user)
});

module.exports = router;
=======
router.get('/', function(req, res, next) {
  res.json([{user: 'fake', password: 'fake'}]);
});

module.exports = router;
>>>>>>> part-2
