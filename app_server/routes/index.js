var express = require('express');
var router = express.Router();
var ctlrMain = require('../controllers/main');
/* GET home page. */

router.get('/', ctlrMain.index);

module.exports = router;
