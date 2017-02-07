//This is npm modules
var Sequelize = require('sequelize');

//Create my SQL connection using sequelize
//DO NOT FOR GET LAST ''!!!!! PASSWORD IS COME IN HERE IF I HAVE.
var connection = new Sequelize("burgers_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});


module.exports = connection;