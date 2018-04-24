var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var ToolListSchema = new Schema ({
  category: {
    type: String,
    required: true
  },

  tool_type: {
    type: String,
    required: true
  },

  tool_name: {
    type: String,
    required: false
  }
});


// This creates our model from the above schema, using mongoose's model method
var ToolList = mongoose.model("ToolList", ToolListSchema);

// Export the ToolList model
module.exports = ToolList;