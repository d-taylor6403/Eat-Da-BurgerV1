//Dependcies
var express = require("express");
var router = express.Router();

//Importing in database model
var burger = require("../models/burger.js");

//Creating all routes and setting up logic within those routes where required.
router.get("/", function(req, res) {
	burger.selectAll(function(data) {
		var hdbrsObj = {
			burgers: data
		};
		console.log(hdbrsObj);
		res.render("inex", hdbrsObj);
	});
});

router.post("/api/burgers", function(req, res) {
	burger.insertOne(
		["burger_name", "devoured"],
		[req.body.burger_name, req.body.devoured],
		function(result) {
			res.json({ id: result.insertID });
		}
	);
});

router.put("/api/burgers/:id", function(req, res) {
	var condition = " id = " + req.params.id;

	console.log("condition:", condition);

	burger.updateOne(
		{
			devoured: req.body.devoured
		},
		condition,
		function(result) {
			if (result.changedRows === 0) {
				//if no rows were changed, then the ID must not exist, so return 404 ERROR
				return res.status(404).end();
			}
			res.status(200).end();
		}
	);
});

router.destroy("/api/burgers/:id", function(req, res) {
	var condition = "id = " + req.params.id;

	console.log("condition:", condition);

	burger.deleteOne(condition, function(result) {
		if (result.changedRows === 0) {
			return res.status(404).end();
		}
		res.status(200).end();
	});
});

module.exports = router;

