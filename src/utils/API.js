import axios from "axios";

export default axios.create({
  baseURL: "https://mysterious-forest-25251.herokuapp.com/api/v1/",
  responseType: "json"
});