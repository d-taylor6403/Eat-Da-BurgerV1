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