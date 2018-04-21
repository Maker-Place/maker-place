import axios from "axios";

export default {

  // scrapeLessons: function() {
  //   return axios.get("/api/lessons")
  // },

  getLessonsByCategory: function(category) {
  	return axios.get("/api/lessons/" + category);
  },

  getAllCategories: function() {
    return axios.get("/api/lessons/categories")
  },

  getLessonById: function(id) {
  	return axios.get("/api/lesson/" + id);
  },

  getMemberships: function(data) {
  	console.log(data);
  	return axios.get("/api/memberships");
  }

};
