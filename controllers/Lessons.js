const db = require("../models");

// Defining methods for the classes controllers
module.exports = {
  findAll: function(req, res) {
    res.json("findAll");
  },
  findByCategory: function(req, res) {

    let category = req.params.category;
    db.Class.find({"category":category})
    .then(function(data) {
      res.json(data);
    })
  },  

  findById: function(req, res) {
    db.Class
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      
      .catch(err => res.status(422).json(err));
  },

  findAllCategories: function(req, res) {
    db.Class.distinct('category')
    .then(categories => res.json(categories))
    .catch(err => res.json(err));
  },

  update: function(req, res) {
  
  },
  remove: function(req, res) {
  
  }
};
