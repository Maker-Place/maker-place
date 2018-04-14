var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var ClassSchema = new Schema({
  // `title` is required and of type String
  title: {
    type: String,
    required: true
  },

  category: {
    type: String,
    required: true
  },

  startDate: {
    type: String,
    required: false
  },

  startTime: {
    type: String,
    required: false
  },

  teaser: {
    type: String,
    required: false,
    trim: true
  },

  location: {
    type: String,
    required: false,
  },

  spacesLeft: {
    type: Number,
    required: false,
  },

  registration: {
    type: String,
    required: false,
  },

  classTimes: [
    {
      type: String,
    }
  ],

  registrationOptions: [
    {
      type: String,
    }
  ],

  registerLink: {
    type: String,
  },

  description: {
    type: String,
  },
  url: {
    type: String,
    required: true,
  }



});


// This creates our model from the above schema, using mongoose's model method
var Class = mongoose.model("Class", ClassSchema);

// Export the Membership model
module.exports = Class;
