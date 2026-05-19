import axios from "axios";

// const API_URL = "http://localhost:8000";
const API_URL = "https://snaptalk-back.vercel.app";

const Api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
});

export default Api;