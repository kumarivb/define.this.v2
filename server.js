// dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var handlebars = require('handlebars');
var fs = require('fs');
var path = require('path');

// bring in the models
var db = require("./models");

// express app
var app = express();

// Sets up the Express app to handle data parsing
// Static directory to be served
//app.use(express.static(__dirname + "public"));

//app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ 
    extended: false 
}));

// parse application/json
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public/')));

// method override
app.use(methodOverride("_method"));

// handlebars
app.engine("handlebars", exphbs({ 
    defaultLayout: "main" 
}));

// set the view engine to use handlebars
app.set("view engine", "handlebars");
app.set('views', __dirname + '/views');

  // routes
var routes = require("./controllers/controller");

app.use(routes);
app.use("/update", routes);
app.use("/create", routes);

//var test = require("./controllers/controller");
//test(app);


var PORT = process.env.PORT || 3000;
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

// var port = process.env.PORT || 3000;
// server.listen(port, function() {
//   console.log("App is running on port " + port);
// });