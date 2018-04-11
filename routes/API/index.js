

const router = require("express").Router();
 const classRoutes = require("./classes");


4 // Book routes 
 router.use("/classes", classRoutes);


 module.exports = router; 
