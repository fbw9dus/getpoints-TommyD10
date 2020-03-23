var express = require('express');
var router = express.Router();
var { patientsControler, patientsControlerID } = require('../controller/patientsController')

router.route('/')
      .get(patientsControler)


router.route('/:id')
      .get(patientsControlerID);

module.exports = router;