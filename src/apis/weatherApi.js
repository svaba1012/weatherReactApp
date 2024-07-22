import axios from "axios";

const _apiKey = process.env.REACT_APP_WETHER_API_KEY;

export default axios.create({
  baseURL: process.env.REACT_APP_WETHER_API_URL,
  params: {
    key: _apiKey,
  },
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});
