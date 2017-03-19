var fs = require("fs");
var file = "Harambid.db";
var exists = fs.existsSync(file);
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('Harambid.db');


db.serialize(function() {
	if (!exists) {
  	db.run("CREATE TABLE if not exists user (Id INTEGER PRIMARY KEY AUTOINCREMENT, FirstName TEXT, LastName TEXT, Email TEXT, UpdatedAt DATETIME, CreatedAt DATETIME, ProfilePic TEXT, FB_Id TEXT, Num_Ratings INT, Rating_Avg FLOAT)");
		db.run("CREATE TABLE IF NOT EXISTS item (Id INTEGER PRIMARY KEY AUTOINCREMENT, MemberId INT, Name TEXT, Pictures TEXT, StartTime DATETIME, Duration INT, StartPrice FLOAT, MinPrice FLOAT, Description TEXT, Categories BLOB, Availibility INT,	Num_Views INT)");
	}
	var stmt = db.prepare("INSERT INTO user (FirstName) VALUES (?)");
	for (var i = 0; i < 10; i++) {
      stmt.run("User" + i);
  }

	var stmt2 = db.prepare("INSERT INTO item (MemberId, Name, Pictures, StartTime, Duration, StartPrice, MinPrice, Description, Categories, Availibility, Num_Views) VALUES (?,?,?,?,?,?,?,?,?,?,?)");
	stmt2.run(12, "FAKEITEM", "pictureURL", 1, 23, 12.5, "desc", ["a", "b", "c"], 1, 3);

	stmt.finalize();
  stmt2.finalize();
  /*
	db.each("SELECT rowid AS id, Id FROM item", function(err, row) {
      console.log(row.id + ": " + row.Id);
  });
	*/
});

db.close();
