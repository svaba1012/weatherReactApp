import axios from "axios";

const _apiKey = "2884eae33f8d48e6b2d121941222112";

export default axios.create({
  baseURL: "http://api.weatherapi.com/v1",
  params: {
    key: _apiKey,
  },
});
