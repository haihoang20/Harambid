var express = require('express');
var bodyParser = require('body-parser');
var db = require("../../db/db_queries.js");

var router = express();
router.use(bodyParser.urlencoded({
    extended: true
}));

router.use(bodyParser.json());

router.post('/addMember', function(req, res) {
    console.log(req.body);
});

module.exports = router;
