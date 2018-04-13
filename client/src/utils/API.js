import axios from "axios";

export default {
  // Gets all books
  getLessons: function() {
    console.log('getLessons');
    return axios.get("/api/scrape");
  },

};
