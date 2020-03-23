var express = require('express');
var router = express.Router();
var { patientsControler, patientsControlerID } = require('../controller/patientsController')

router.get('/', patientsControler);
router.get('/:id',patientsControlerID);

module.exports = router;