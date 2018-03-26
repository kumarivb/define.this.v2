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

/*  Commented out the db.sequelize.query because I was unable to get handlebars to work with the resultant json
  
db.sequelize.query("SELECT a.*, b.*  FROM entries a, definitions b  where b.entryId = a.id LIMIT 0, 1000").then(dbEntry => {
	      var hbsObject = {
        entry: dbEntry
      };
  console.log("dbEntry is " + JSON.stringify(dbEntry, null, 4));
  console.log("dbEntry[0] is " + JSON.stringify(dbEntry[0], null, 4));
  console.log("dbEntry[0][0] is " + JSON.stringify(dbEntry[0][0], null, 4));
  console.log("dbEntry[1] is " + JSON.stringify(dbEntry[1], null, 4));
    return res.render("index", hbsObject);
});
*/
  
  db.Entries.findAll({

 })
  // use promise method to pass the burgers...
    .then(function(dbEntry) {
    // into the main index, updating the page
      var hbsObject = {
        entry: dbEntry,
        context: dbEntry,
      };
	  console.log("dbEntry is \n" + JSON.stringify(dbEntry));	  
	  console.log("hbsOject is \n" + JSON.stringify(hbsObject));
	  //console.log(hbsObject);
      return res.render("index", hbsObject);
    });

});


router.post("/api/getfirstentry", function(req, res) {
    db.Definition.findAll({
		where:{
			entryId: [],
		}
		
	})
    .then(function(theDefinition) {
	  console.log("theDefinition is " + JSON.stringify(theDefinition));
      res.json(theDefinition);
    });
  });
  
  
  
//   });
module.exports = router;
