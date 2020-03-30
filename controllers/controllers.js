//Dependcies
var express = require("express");
var router = express.Router();

//Importing in database model
var burger = require("../models/burger.js");


//Creating all routes and setting up logic within those routes where required.
router.get("/", function(req, res) {
    burger.selectAll(function (data) {
        var hdbrsObj = {
            burgers: data
        };
        console.log(hdbrsObj);
        res.render("inex", hdbrsObj);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
        res.json({id: result.insertID});
    });
});