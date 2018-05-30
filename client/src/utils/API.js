import axios from "axios";

export default {

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
  	return axios.get("/api/memberships");
  },

  getTools: function(data) {
    return axios.get("/api/tools");
  },
  addFavorite: function(favoriteid) {
    return axios.post("/api/user/favorite", {class:favoriteid})
  },
  removeFavorite: function(favoriteid) {
    return axios.put("/api/user/favorite", {class: favoriteid})
  },
  getFavorites: function(userid) {
    return axios.get("/api/user/favorite/" + userid);
  },
  getFavoriteIDs: function() {
    return axios.get("/api/user/favorite/");
  }

};
