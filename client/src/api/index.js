import axios from "axios";

const token = localStorage.getItem("token");
const API = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  header: {
    token: `Bearer ${token}`,
  },
});

// export const login = (formData) => API.post("/login", formData);
// export const register = (formData) => API.post("/signup", formData);

export default API