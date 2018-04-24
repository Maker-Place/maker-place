const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
//we need to use the next line to push the app in heroku
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);
// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
var MONGODB_URI = 'mongodb://heroku_tb6dcfcz:h647rilmvc2kg3t4rcnr824u2h@ds161026.mlab.com:61026/heroku_tb6dcfcz';
mongoose.connect("mongodb://localhost/makerplace" || MONGODB_URI);
// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});