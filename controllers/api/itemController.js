var express = require('express');
var sql = require("../../db/db_queries.js");

var router = express.Router();

router.get('/filterItem', function(req, res){
    // get item from database
});

router.post('/addItem', function(req, res){
    console.log("HELLO");
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
