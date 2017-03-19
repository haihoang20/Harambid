var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./Harambid.db');

function addNewItem(memberId, name, pictureURL, startTime, duration, startPrice, minPrice, desc, avail, numViews, category, location) {
	var stmt = db.prepare("INSERT INTO item (MemberId, Name, Pictures, StartTime, Duration, StartPrice, MinPrice, Description, Category, Availibility, Num_Views, Location) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
	stmt.run(memberId, name, pictureURL, startTime, duration, startPrice, minPrice, desc, category, avail, numViews, location);
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
	stmt.run(avail, id);
	stmt.finalize();
	db.close;
}

function addNewUser(firstName, lastName, email, updatedAt, createdAt, profilePic, fb_Id, num_ratings, rating_avg) {
	var stmt = db.prepare("INSERT INTO user (FirstName, LastName, Email, UpdatedAt, CreatedAt, ProfilePic, FB_Id, Num_Ratings, Rating_Avg) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
	stmt.run(firstName, lastName, email, updatedAt, createdAt, profilePic, fb_Id, num_ratings, rating_avg);
	stmt.finalize();
	console.log("Making User: " + fb_Id);
	db.close();
}

function setUserUpdatedAt(id, updatedAt) {
	var stmt = db.prepare("UPDATE user SET UpdatedAt = (?) WHERE Id = (?)");
	stmt.run(updatedAt, id);
	stmt.finalize();
	db.close;
}

function getUserId(fb_Id, callback) {
	var query = "SELECT Id FROM user WHERE FB_Id = " + fb_Id;
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

function getUserNumRatings(id, callback) {
		var query = "SELECT Num_Ratings FROM user WHERE Id = " + id;
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

function setUserNumRatings(id, num_ratings) {
	var stmt = db.prepare("UPDATE user SET Num_Ratings = (?) WHERE Id = (?)");
	stmt.run(num_ratings, id);
	stmt.finalize();
	db.close;
}

function getUserAvgRating(id, callback) {
		var query = "SELECT Rating_Avg FROM user WHERE Id = " + id;
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

function setUserAvgRating(id, rating_avg) {
	var stmt = db.prepare("UPDATE user SET Rating_Avg = (?) WHERE Id = (?)");
	stmt.run(rating_avg, id);
	stmt.finalize();
	db.close;
}

module.exports = {
	addNewItem : addNewItem,
	getItemsBasedOnCategory : getItemsBasedOnCategory,
	setItemAvailibility : setItemAvailibility,
	getAllItems : getAllItems,
	addNewUser : addNewUser,
	getUserId : getUserId,
	getUserNumRatings : getUserNumRatings,
	setUserNumRatings : setUserNumRatings,
	getUserAvgRating : getUserAvgRating,
	setUserAvgRating : setUserAvgRating};
