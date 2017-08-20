//import orm.js
var orm = require("../config/orm.js");

var burger = {
	selectAll: function(cb) {
		orm.selectAll("burgers", function(res) {
			cb(res);
		});
	},

	insertOne: function(name, cb) {
		orm.insertOne("burgers", ["burger_name", "devoured"], [name, false], cb);
	},

	updateOne: function(objColVals, condition, cb) {
		orm.updateOne("burgers", objColVals, condition, function(res) {
			cb(res);
		});
	}
};

//export database functions for controller use
module.exports = burger;