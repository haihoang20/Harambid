var fs = require("fs");
var file = "Harambid.db";
var exists = fs.existsSync(file);
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('Harambid.db');
var sql = require("./db_queries.js");

function dropTablesIfExists() {
	if (exists) {
		console.log("Dropping tables...")
		db.run("DROP TABLE user");
		db.run("DROP TABLE item");
	}
}

function createTables() {
	console.log("Creating tables...")
	db.run("CREATE TABLE IF NOT EXISTS user (Id INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Email TEXT, CreatedAt DATETIME, ProfilePic TEXT, FB_Id TEXT, Num_Ratings INT, Rating_Avg FLOAT)");
	db.run("CREATE TABLE IF NOT EXISTS item (Id INTEGER PRIMARY KEY AUTOINCREMENT, MemberId INT, Name TEXT, Pictures TEXT, StartTime DATETIME, Duration INT, StartPrice FLOAT, MinPrice FLOAT, Description TEXT, Category TEXT, Availibility INT,	Num_Views INT, Location TEXT)");
}

db.serialize(function() {

	if (!exists) {
		createTables();
	}

	var stmt = db.prepare("INSERT INTO user (Name) VALUES (?)");
	for (var i = 0; i < 10; i++) {
      stmt.run("User" + i);
			console.log("Creating User " + i);
  }

	var stmt2 = db.prepare("INSERT INTO item (MemberId, Name, Pictures, StartTime, Duration, StartPrice, MinPrice, Description, Category, Availibility, Num_Views, Location) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
	for (var i = 1; i < 11; i++) {
		stmt2.run(i, "FAKEITEM", "pictureURL", 1, 23, 12.5, 2.3,"desc", "a", 1, 3, "Canada");
		console.log("Creating item" + i);
	}
	var stmt3 = db.prepare("UPDATE item SET Availibility = (?) WHERE Id =  (? )" );
	stmt3.run(0, 1);

	stmt.finalize();
  	stmt2.finalize();
	stmt3.finalize();

	//sql.addNewUser("facebitch", "e@a.com", "213", "123", "aaa", "bbb", "23", "12");

  /*
	db.each("SELECT rowid AS id, Id FROM item", function(err, row) {
      console.log(row.id + ": " + row.Id);
  });
	*/
});

db.close();
