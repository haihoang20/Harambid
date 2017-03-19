var express = require('express');
var bodyParser = require('body-parser');
var sql = require("../../db/db_queries.js");

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
    //console.log(req);
    console.log(JSON.stringify(req.body, null, 4));

    //String imgSource = req.imgSource;
    //String name = req.name;
    var maxPrice;
    var minPrice;
    var duration;
    //var categories[];
    var description;
    var shippingCost;
    var isAuthenticated;
    //sql.addNewItem();
    // add item to database
});



module.exports = router;
