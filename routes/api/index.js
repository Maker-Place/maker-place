const router = require("express").Router();
const classRoutes = require("./classes");

// Book routes
router.use("/classes", classRoutes);

module.exports = router;
