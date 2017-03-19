var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./Harambid.db');

function addNewItem(memberId, name, pictureURL, startTime, duration, minPrice, desc, avail, numViews, categories) {
	var stmt = db.prepare("INSERT INTO item (MemberId, Name, Pictures, StartTime, Duration, StartPrice, MinPrice, Description, Categories, Availibility, Num_Views) VALUES (?,?,?,?,?,?,?,?,?,?,?)");
	stmt.run(memberId, name, pictureURL, startTime, duration, minPrice, desc, categories, avail, numViews);
	stmt.finalize();
	db.close;
}

function getItemsBasedOnCategory(categories, callback) {
  var query = "SELECT * FROM table WHERE Categories LIKE %" + categories + "%";
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
