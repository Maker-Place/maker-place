module.exports = {
    ensureAuthenticated: function (req, res, next) {
      console.log("ensure isAuthenticated");
      if (req.isAuthenticated()) {
        console.log("you're authenticated");
        return next()
      } else {
        console.log("you're not logged in");
      }

      res.redirect('/login');
    },
    ensureGuest: function (req, res, next) {
      console.log("ensureGuest");
      if (req.isAuthenticated()) {
        console.log("you're logged in");
        res.redirect('/secret');
      } else {
        return next();
      }
    }
  }
  