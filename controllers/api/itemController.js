var express = require('express');
var bodyParser = require('body-parser');
var db = require("../../db/db_queries.js");

var router = express();
router.use(bodyParser.urlencoded({
    extended: true
}));

router.use(bodyParser.json());
/*
router.get('/filterItem', function(req, res){
    // get item from database
});
*/

router.post('/addItem', function(req, res) {
    console.log("HELLO");
    console.log(JSON.stringify(req.body, null, 4));

    var memberId = req.body.memberId;
    var imgSource = req.body.imgSource;
    var name = req.body.name;
    var maxPrice = req.body.maxPrice;
    var minPrice = req.body.minPrice;;
    var duration = req.body.duration;
    var categories = req.body.categories;
    var description = req.body.duration;;
    var shippingCost = req.body.shippingCost;;
    var isAuthenticated = req.body.isAuthenticated;;
    //sql.addNewItems
    // add item to database
});



module.exports = router;
