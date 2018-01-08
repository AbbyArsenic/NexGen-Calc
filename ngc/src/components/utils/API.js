import axios from "axios";

// It accepts a "query" or term to search the airport data api for
export default {
  getAirportData: function(query) {
    return axios.get("/api/airport", { params: { q: query}});
  }
};
