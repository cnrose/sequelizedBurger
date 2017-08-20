var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
	res.redirect("/index");
});

router.get("/index", function(req, res) {	
	burger.selectAll(function(data) {
		var hbsObject = { burgers: data };

		console.log(hbsObject);

		res.render("index", hbsObject);
	});
});

router.post("/burger/create", function(req, res) {
	burger.insertOne(req.body.burger_name, function() {
		res.redirect("/index");
	});
});

router.put("/burger/eat/:id", function(req, res) {
	var condition = "id=" + req.params.id;

	burger.updateOne({ devoured: true }, condition, function() {
		res.redirect("/index");
	});
});

module.exports = router;