import axios from "axios";

export default {
  // Gets all books
  getLessons: function() {
    return axios.get("/api/scrape");
  },

};
