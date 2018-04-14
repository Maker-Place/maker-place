const router = require("express").Router();
const lessonRoutes = require("./lessons");
const singleLessonRoutes = require("./lesson");
const scrape = require("../../scripts/scrape.js");

// Book routes
router.use("/lessons", lessonRoutes);
router.use("/lesson", singleLessonRoutes);
router.get("/scrape", scrape);

module.exports = router;
