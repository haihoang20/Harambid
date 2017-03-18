var express = require('express');
var router = express.Router();

router.use('/member', require('./memberController'));
router.use('/item', require('./itemController'));

module.exports = router;
