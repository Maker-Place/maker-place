const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    res.json("findAll");
  },
  findById: function(req, res) {
   
  },
  create: function(req, res) {
    res.send("create class")
    // db.Class.create({"title": "hi", "category": "hi"})
    // .then(function(dbArticle) {
    //     // View the added result in the console
    //     console.log(dbArticle);
    //     res.json("create");
    // })
    // .catch(function(err) {
    //     console.log("------------------------------------------------------------------------------");
    //     res.json(err);
    // });
  },
  update: function(req, res) {
  
  },
  remove: function(req, res) {
  
  }
};
