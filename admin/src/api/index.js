import axios from "axios";

const token = localStorage.getItem("token");
console.log('token setup')
console.log('token ',token)
const API = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    token: `Bearer ${token}`,
  },
});

export default API;