// //We need to route the user data to the database//

// // *********************************************************************************
// // api-routes.js - this file offers a set of routes for displaying and saving data to the db
// // *********************************************************************************

// // Dependencies
// // =============================================================
// var Character = require("public/js/catalog.js");

// // Routes
// // =============================================================
// module.exports = function(app) {
//   // Search for Specific Character (or all characters) then provides JSON
//   app.get("/api/:catalog", function(req, res) {
//     // If the user provides a specific character in the URL...
//     if (req.params.catalog {
//       // Then display the JSON for ONLY that character.
//       // (Note how we're using the ORM here to run our searches)
//       Character.findOne({
//         where: {
//           routeName: req.params.catalog
//         }
//       }).then(function(result) {
//         return res.json(result);
//       });
//     }
//     else {
//       // Otherwise...
//       // Otherwise display the data for all of the characters.
//       // (Note how we're using Sequelize here to run our searches)
//       Character.findAll({}).then(function(result) {
//         return res.json(result);
//       });
//     }
//   });

//   // If a user sends data to add a new character...
//   app.post("/api/new", function(req, res) {
//     // Take the request...
//     var catalog = req.body;

//     // Create a routeName

//     // Using a RegEx Pattern to remove spaces from character.name
//     // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//     var routeName = character.name.replace(/\s+/g, "").toLowerCase();

//     // Then add the character to the database using sequelize
//     catalog.create({
//       routeName: routeName,      entry: catalog.name,
      
//     });
//   });
// };

var db = require("../models");

module.exports = function(app) {
  
  app.get("/api/definitions", function(req, res) {
    // Find one Author with the id in req.params.id and return them to the user with res.json
    db.Definitions.findAll({}).then(function(dbDefinitions) {
        res.json(dbDefinitions);
    });
  });
  
  };