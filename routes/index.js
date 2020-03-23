var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
<<<<<<< HEAD
  var hello = 'Hello, der Server funktioniert'
  res.status(200).send(hello);
=======
  res.render('index', { title: 'Express' });
>>>>>>> part-2
});

module.exports = router;
