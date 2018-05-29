const db = require("../models");

// Defining methods for the classes controllers
module.exports = {
  findAll: function(req, res) {
    res.json("findAll");
  },
  findByCategory: function(req, res) {

    let category = req.params.category;
    db.Category.find({"name":category}).limit(1)
    .populate('lessons')
    .then(function(data) {
      console.log("data");
      console.log(data[0]);
      console.log("data.lessons");
      console.log(data[0].lessons);
      res.json(data[0].lessons);
    })
  },  

  findById: function(req, res) {
    db.Class
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      
      .catch(err => res.status(422).json(err));
  },

  findAllCategories: function(req, res) {
    db.Category.distinct('name')
    .then(categories => res.json(categories))
    .catch(err => res.json(err));
  },

  update: function(req, res) {
  
  },
  remove: function(req, res) {
  
  }
};
