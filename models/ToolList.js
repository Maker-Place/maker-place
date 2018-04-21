var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var ToolListSchema = new Schema ({
  category: {
    type: String,
<<<<<<< HEAD
    required:true
    },
=======
    required: true
  },

>>>>>>> ac3fdc6a5a62eec02d89a0a5b411fbbc85be7b21
  tool_type: {
    type: String,
    required: true
  },

  tool_name: {
    type: String,
    required: false
  }
<<<<<<< HEAD

  
=======
>>>>>>> ac3fdc6a5a62eec02d89a0a5b411fbbc85be7b21
});


// This creates our model from the above schema, using mongoose's model method
var ToolList = mongoose.model("ToolList", ToolListSchema);

// Export the ToolList model
module.exports = ToolList;