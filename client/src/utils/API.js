import axios from "axios";

export default {
  // Gets all books
  getClasses: function() {
    console.log('getClasses');
    return axios.get("/api/classes");
  },
  
};
