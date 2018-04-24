const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;
// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// passport middleware
app.use(passport.initialize());
app.use(passport.session());
// global var
app.use((req, res, next) => {
    res.locals.user = req.user || null;
    res.locals.errors = [];
    next();
})

app.use(express.static(path.join(__dirname,'/public')));
// passport config
require('./config/passport')(passport);
app.use(require('./routes/')); // main routes

// app.use(session({
//     secret: 'abc123',
//     resave: true,
//     saveUninitialized: true,
//     // this prevents that every time the server is restarted we lose the login sessions
//     store: new MongoStore({
//       mongooseConnection: mongoose.connection,
//       url: MONGO_URL,
//       autoReconnect: true
//     })
//   }));


// Serve up static assets
//we need to use the next line to push the app in heroku
app.use(express.static("client/build"));
// Add routes, both API and view
// app.use(routes);
// app.use(session({
//     secret: 'abc123',
//     resave: true,
//     saveUninitialized: true,
//     // this prevents that every time the server is restarted we lose the login sessions
//     store: new MongoStore({
//       mongooseConnection: mongoose.connection,
//       url: MONGO_URL,
//       autoReconnect: true
//     })
//   }));

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
<<<<<<< HEAD
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/makerplace",
    {
        useMongoClient: true
    }
);

=======

var MONGODB_URI = 'mongodb://heroku_tb6dcfcz:h647rilmvc2kg3t4rcnr824u2h@ds161026.mlab.com:61026/heroku_tb6dcfcz';
mongoose.connect("mongodb://localhost/makerplace" || MONGODB_URI);
>>>>>>> master

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
