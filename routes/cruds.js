var _dbBuilder = require('sqlite3').verbose()
var db = new _dbBuilder.Database('./config/database/database.db')
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	db.serialize(function() {
		db.all('SELECT * FROM info', function(err, data) {
			res.send(data);
		})
	})
});

module.exports = router;
