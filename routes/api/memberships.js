const router = require("express").Router();
const Memberships = require("../../controllers/Memberships");

// Matches with "/api/memberships"
router.route("/")
  .get(Memberships.findMemberships)

module.exports = router;