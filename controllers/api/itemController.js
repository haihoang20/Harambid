var express = require('express');
var router = express.Router();

router.get('/filterItem', function(req, res){
    // get item from database
}

router.post('/addItem', function(req, res){
    String imgSource = req.imgSource;
    String name = req.name;
    var maxPrice;
    var minPrice;
    var duration;
    var categories [];
    var description;
    var shippingCost;
    var isAuthenticated;
    // add item to database
}



module.exports = router;
