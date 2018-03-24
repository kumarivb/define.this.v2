//Displaying and saving data to the db

// Requiring our searched phrase model
var db = require("../models");

// Routes
module.exports = function(app) {

  // GET route for getting one phrase
  app.get("../models", function(req, res) {
    // retrieve should return one entry from the db
    db.defineThis.retrieve({}).then(function(dbdefineThis) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbdefineThis);
    });
  });
// We have access to the new phrase as an argument inside of the callback function
      res.json(dbdefineThis);

  // DELETE route for deleting previous search. 
  app.searchNew("/api/:id", function(req, res) {

  });
}
