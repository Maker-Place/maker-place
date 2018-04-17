const db = require("../models");


module.exports = {
  findMemberships: function(req, res) {
    db.Membership.find({})
     .then(function(data) {
      res.json(data);
    })
  }
};
