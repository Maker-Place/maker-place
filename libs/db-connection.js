const mongoose = require('mongoose');
const {MONGODB_URI} = require('../config/');

mongoose.Promise = global.Promise;

mongoose.connect(MONGODB_URI);

mongoose.connection
  .once('open', () => console.log('Connected to the database!'))
  .on('error', err => console.error(err));
