import axios from "axios";

const token = localStorage.getItem("token");
const API = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  header: {
    token: `Bearer ${token}`,
  },
});

export default API