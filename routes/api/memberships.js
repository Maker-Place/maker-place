const router = require("express").Router();
const Memberships = require("../../controllers/Memberships");

// Matches with "/api/lessons"
router.route("/")
  .get(Memberships.findMemberships)

module.exports = router;