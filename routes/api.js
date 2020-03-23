var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  var user = [{user:"fake", password:"fake"}]
  res.status(200).send(user)
});

module.exports = router;
