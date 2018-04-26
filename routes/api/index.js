const router = require("express").Router();
const lessonRoutes = require("./lessons");
const singleLessonRoutes = require("./lesson");
const membershipsRoutes = require("./memberships")
const toolsRoutes = require("./ToolList")
const userRoutes = require("./user");

// lessons routes
//all these routes are prefixed with a none visual /api
router.use("/lessons", lessonRoutes);
router.use("/lesson", singleLessonRoutes);
router.use("/memberships", membershipsRoutes);
router.use("/tools", toolsRoutes);
router.use("/user",userRoutes)

module.exports = router;
