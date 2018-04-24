const db = require("../models");


module.exports = {
  findToolList: function(req, res) {
    db.ToolList.find({})
     .then(function(data) {
      res.json(data);
    })
  }
};
