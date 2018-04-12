const router = require("express").Router();
const classRoutes = require("./classes");
const scrape = require("../../scripts/scrape.js");

// Book routes
router.use("/classes", classRoutes);
router.get("/scrape", scrape);

module.exports = router;
