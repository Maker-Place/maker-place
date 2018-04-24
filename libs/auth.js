module.exports = {
    ensureAuthenticated: function (req, res, next) {
      if (req.isAuthenticated())
        return next();
      res.redirect('/login');
    },
    ensureGuest: function (req, res, next) {
      console.log("ensureGuest");
      if (req.isAuthenticated())
        res.redirect('/secret');
      else
        return next();
    }
  }
  