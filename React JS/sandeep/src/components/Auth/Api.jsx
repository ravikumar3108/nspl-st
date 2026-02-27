import axios from "axios";

const API_URL = "http://localhost:8000/";
// const API_URL = "https://quickbuy-two.vercel.app/";
function getToken() {
  const data = localStorage && localStorage.getItem("token");
  return data;
}
let Api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${getToken()}`,
    Accept: "*/*",
  },
});

Api.interceptors.request.use(
  async (config) => {
    const token = getToken();
    if (token !== null) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default Api;
