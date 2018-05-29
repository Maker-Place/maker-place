const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: {type: String, required: true},
    link: {type: String},
	lessons: [
	    {
	      type: String,
	      ref: "Class"
	    }
  	]
});

module.exports = mongoose.model('Category', CategorySchema);
