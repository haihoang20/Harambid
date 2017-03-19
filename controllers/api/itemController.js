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
    /*
    console.log("HELLO");
    console.log(JSON.stringify(req.body, null, 4));
    */

    var memberId = req.body.memberId;
    var imgUrl = req.body.imgSource;
    var name = req.body.name;
    var maxPrice = req.body.maxPrice;
    var minPrice = req.body.minPrice;;
    var duration = req.body.duration;
    var category = req.body.categories;
    var description = req.body.duration;
    var shippingCost = req.body.shippingCost;
    var isAuthenticated = req.body.isAuthenticated;
    var startTime;
    // add item to database
    db.addNewItem(memberId, name, imgUrl, 0, duration, maxPrice, minPrice,
                    description, isAuthenticated, 0, category);
});

router.get('/allItems', function(req, res) {
  console.log("IMMA BOUT TO GET ALL DA ITEMS");
  console.log(req);
  // db.getAllItems()
  //   .then((data) => {
  //     res.json(data);
  //   })
});

module.exports = router;
