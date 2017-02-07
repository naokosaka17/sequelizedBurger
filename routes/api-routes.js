// api-routes.js - this file offers a set of routes for displaying and saving data to the db

// Dependencies
// =============================================================
var express = require("express");
var path = require('path');
var router = express.Router();
var Burger = require("../models/burger.js");

// Routes
// =============================================================
// get route -> index
router.get("/", function(req, res) {
	res.redirect("/burgers");
});


// GET route for getting all of the burgers
router.get("/burgers", function(req, res) {
	// All burger information from database is "result"
	Burger.findAll({}).then(function(result) {
		//"result" go to burgers_data in the index-handlebars
    	res.render("index", { burger_data: result });
	});
});

// POST route -> (create) back to index
router.post("/burgers/create", function(req, res) {
	// takes the request object using it as input for burger.addBurger
	Burger.create({ burger_name: req.body.burger_name,
		devoured: false }).then(function(){
		// If don't have .redirect("/") only database is changed but not on the screen
		res.redirect("/")
	});
});

// PUT route -> (up date) back to index
router.post("/burgers/update/:id", function(req, res) {
	// 
	Burger.update({  
		devoured: true 
	},{
		where:{
			id: req.params.id }}).then(function() {
		// If don't have .redirect("/") only database is changed but not on the screen
		res.redirect("/")
	});
});

module.exports = router;







