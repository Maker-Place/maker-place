const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    res.json("findAll");
  },
  findByCategory: function(req, res) {
    console.log("find by category");
    let category = req.params.category;
    db.Class.find({"category":category})
    .then(function(data) {
      res.json(data);
    })
  },  
  findById: function(req, res) {
    console.log(req.params.id);
    db.Class
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      
      .catch(err => res.status(422).json(err));
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
