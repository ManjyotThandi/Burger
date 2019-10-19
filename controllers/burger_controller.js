// We use routes to seperate it into diff files. That way in our server we can use app.use...

var express = require("express");

var router = express.Router();

// Importing our model burger.js to use its db functions
var burger = require("../models/burger.js");

// create all our routes and set up logic for those routes

router.get("/",function(req,res){
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject)
        res.render("index", hbsObject)
    });
});

router.post("/api/burger", function(req,res){
    var typeOfBurger = req.body;
    console.log(typeOfBurger)
    burger.create(["burger_name"],typeOfBurger.burger_name,function(result){
        console.log(result)
        console.log("POSTED")
        // send back the id of the result
        res.json({id:result.insertID})
    });

});


router.put("/api/burgers/:id", function(req,res){
    var condition = "id = " + req.params.id
    console.log("Condition" + condition)

    burger.update({devoured: req.body.eat},condition,function(result){
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
        });
      });

module.exports = router
