const router = require("express").Router();
const classRoutes = require("./classes");
const scrape = require("../../scripts/scrape.js");

router.use("/classes", classRoutes);
// router.get("/scrape", (req,res) => {
// 	console.log('scrape');
// 	res.send('scrape')
// });

router.get("/scrape", scrape);

module.exports = router; 
