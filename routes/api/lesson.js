const router = require("express").Router();
const Lessons = require("../../controllers/Lessons");

// /lesson/:id
router
	.route("/:id")
	.get(Lessons.findById);

module.exports = router;
