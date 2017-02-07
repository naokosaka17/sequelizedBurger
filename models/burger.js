//npm module
var Sequelize = require("sequelize");
//require connection.js file
var sequelize = require("../config/connection.js")

// Creates a "Burger" model that matches up with DB
var Burger = sequelize.define("burgers", {
  id: {
    // capital "S"!! bcz it is create table use by npm sequelize
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  burger_name: {
    type: Sequelize.STRING
  },
  devoured: {
    type: Sequelize.BOOLEAN
  }
});

// Syncs with DB
//IMPORTANT!!! ".sync()" makes automatically creates table for me
//but have to create DB by my self before sync to db.
Burger.sync();

// Makes the Burger Model available for other files (will also create a table)
module.exports = Burger;
