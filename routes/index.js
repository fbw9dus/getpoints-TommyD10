var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var hello = 'Hello'
  res.status(200).send(hello);
});

module.exports = router;
