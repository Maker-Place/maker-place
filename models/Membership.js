var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var MembershipSchema = new Schema ({
  membership-type: {
    type: String,
    required: true
  },

  annual-cost: {
    type: String,
    required: true
  },

  monthly-cost: {
    type: String,
    required: false
  },

  discount: {
    type: String,
    required: false
  },

  description: {
    type: String,
    required: false
  }
});


// This creates our model from the above schema, using mongoose's model method
var Membership = mongoose.model("Membership", MembershipSchema);

// Export the Membership model
module.exports = Membership;