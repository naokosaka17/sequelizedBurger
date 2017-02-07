//node modules 
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

//make variable port and app
var PORT = process.env.PORT || 3000;
var app = express();

//middleware to handling body-parse
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars as the default templating engine.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

//routes
var routes = require("./routes/api-routes.js");
app.use("/", routes);

//start to server listening
app.listen(PORT, function() {
  console.log("Listening on port: ", PORT);
});