const router = require("express").Router();
const ToolList = require("../../controllers/ToolList");

// Matches with "/api/tools"
router.route("/")
  .get(ToolList.findToolList)

module.exports = router;