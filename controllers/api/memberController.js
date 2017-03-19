var express = require('express');
var db = require("../../db/db_queries.js");

var router = express();
router.use(bodyParser.urlencoded({
    extended: true
}));

router.use(bodyParser.json());

router.post('/addMember', function(req, res) {

});

module.exports = router;
