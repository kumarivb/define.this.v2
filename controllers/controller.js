var express = require("express");
// grabbing our models
var db = require("../models");
var router = express.Router();


// grabbing our models
var db = require("../models");
// app.get('/', function (req, res) {
//     res.render('index', {});

// get route -> index
router.get("/", function(req, res) {
  // send us to the next get function instead.
  res.redirect("/index");
});

// get route, edited to match sequelize
router.get("/index", function(req, res) {
  // replace old function with sequelize function
  db.Entries.findAll({
    include: [db.Definition],
  })
  // use promise method to pass the burgers...
    .then(function(dbEntry) {
    // into the main index, updating the page
      var hbsObject = {
        entry: dbEntry
      };
      return res.render("index", hbsObject);
    });
});

router.post("/api/getfirstentry", function(req, res) {
    db.Definition.findAll({
		where:{
			entryId: 1,
		}
		
	})
    .then(function(theDefinition) {
	  console.log("theDefinition is " + JSON.stringify(theDefinition));
      res.json(theDefinition);
    });
  });
  
  
  
//   });
module.exports = router;
