import axios from "axios";

export default {

  scrapeLessons: function(data) {
  	console.log(data); // need to post to send this callback
    return axios.get("/api/lessons", data);
  },

  getLessonsByCategory: function(category) {
  	return axios.get("/api/lessons/" + category);
  },

  getAllCategories: function() {
    return axios.get("/api/lessons/categories")
  },

  getLessonById: function(id) {
  	return axios.get("/api/lesson/" + id);
  }

};
