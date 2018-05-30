const express = require("express");
const app = express();
const server = require('http').createServer(app);
const session = require('express-session');
const mongoose = require("mongoose");
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');
const bodyParser = require("body-parser");
const path = require('path');

const PORT = process.env.PORT || 3001;

const {MONGODB_URI} = require('./config/');
//'mongodb://heroku_tb6dcfcz:h647rilmvc2kg3t4rcnr824u2h@ds161026.mlab.com:61026/heroku_tb6dcfcz';

require('./libs/db-connection');

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
  secret: 'abc123',
  resave: true,
  saveUninitialized: true,
  // this prevents that every time the server is restarted we lose the login sessions
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    url: MONGODB_URI,
    autoReconnect: true
  })
}));

// passport middleware
app.use(passport.initialize());
app.use(passport.session());
// global var
app.use((req, res, next) => {
    res.locals.user = req.user || null;
    res.locals.errors = [];
    next();
})
//server.js

app.use(express.static(path.join(__dirname,'/public')));
// passport config
require('./config/passport')(passport);
app.use(require('./routes/')); // main routes


// Serve up static assets
//we need to use the next line to push the app in heroku
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Start the API server
server.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
