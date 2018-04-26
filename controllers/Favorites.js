const User = require('../models/User');

module.exports = {
  getFavorites: (req, res) => {
    let id = req.params.id;
    // res.json(id);
    User.findById(id)
      .populate('favorites')
      .then(function(user) {
        //send back the notes for the article with the matching id
        res.json(user.favorites);
      })
      .catch(function(err) {
        // If an error occurs, send it back to the client
        res.json(err);
    });
  }
};
