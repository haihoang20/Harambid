var express = require('express');
var bodyParser = require('body-parser');
var db = require("../../db/db_queries.js");

var router = express();
router.use(bodyParser.urlencoded({
    extended: true
}));

router.use(bodyParser.json());

router.post('/addMember', function(req, res) {
    // console.log(req.body);
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var createdAt = date+' '+time;
    var name = req.body.name;
    var email = req.body.email;
    var profilePic = req.body.picture.url;
    var fbId = req.body.id;

    db.addNewUser(name, email, createdAt, profilePic,
                    fbId, 0, 0);
});

module.exports = router;
