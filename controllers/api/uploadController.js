var express = require('express');
var bodyParser = require('body-parser');
var sql = require("../../db/db_queries.js");
var router = express();
router.use(bodyParser.urlencoded({
    extended: true
}));
router.use(bodyParser.json());

router.post('/s3', require('react-s3-uploader/s3router') ({
  bucket: 'harambid',
  region: 'us-west-2'
}));


module.exports = router;
