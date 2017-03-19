var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./Harambid.db');

function addNewItem(memberId, name, pictureURL, startTime, duration, startPrice, minPrice, desc, avail, numViews, category) {
	var stmt = db.prepare("INSERT INTO item (MemberId, Name, Pictures, StartTime, Duration, StartPrice, MinPrice, Description, Category, Availibility, Num_Views) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
	stmt.run(memberId, name, pictureURL, startTime, duration, startPrice, minPrice, desc, category, avail, numViews);
	stmt.finalize();
	db.close;
}

function getItemsBasedOnCategory(category, callback) {
  var query = "SELECT * FROM item WHERE Category LIKE '%" + category + "%'";
  db.all(query, function (err, rows) {
    if(err){
        console.log(err);
				db.close();
    }else{
        callback(rows);
				db.close();
    }
  });
}

function getAllItems(callback) {
  var query = "SELECT * FROM item";
  db.all(query, function (err, rows) {
    if(err){
        console.log(err);
				db.close();
    }else{
        callback(rows);
				db.close();
    }
  });
}

function setItemAvailibility(id, avail) {
	var stmt = db.prepare("UPDATE item SET Availibility = (?) WHERE Id = (?)");
	stmt.run(id, avail);
	stmt.finalize();
	db.close;
}

function addNewUser(firstName, lastName, email, updatedAt, createdAt, profilePic, fb_Id, num_ratings, rating_avg) {
	//TODO
}

module.exports = {
	addNewItem : addNewItem,
	getItemsBasedOnCategory : getItemsBasedOnCategory,
	setItemAvailibility : setItemAvailibility,
	getAllItems : getAllItems};
