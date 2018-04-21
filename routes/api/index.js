const router = require("express").Router();
const lessonRoutes = require("./lessons");
const singleLessonRoutes = require("./lesson");
const membershipsRoutes = require("./memberships")
const toolsRoutes = require("./ToolList")
const scrape = require("../../scripts/scrape.js");

// lessons routes
//all these routes are prefixed with a none visual /api
router.use("/lessons", lessonRoutes);
router.use("/lesson", singleLessonRoutes);
router.use("/memberships", membershipsRoutes);
router.use("/tools", toolsRoutes);
router.get("/scrape", scrape);

module.exports = router;
