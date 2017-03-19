var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('/Harambid.db');

function addNewItem(int memberId, string name, string pictureURL, date startTime, int duration, float minPrice, string desc, int avail, int numViews, string[] categories) {
	var stmt = db.prepare("INSERT INTO item (MemberId, Name, Pictures, StartTime, Duration, StartPrice, MinPrice, Description, Categories, Availibility, Num_Views) VALUES (?,?,?,?,?,?,?,?,?,?,?)");
	stmt.run(memberId, name, pictureURL, startTime, duration, minPrice, desc, categories, avail, numViews);
}

function getItemsBasedOnCategory(string[] categories) {
	//TODO
}

function setItemAvailibility(int id, int avail) {
	var stmt = db.prepare("UPDATE item SET Availibility = (?) WHERE Id = (?)");
	stmt.run(id, avail);
}
