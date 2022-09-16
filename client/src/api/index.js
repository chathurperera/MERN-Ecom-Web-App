import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

export const login = (formData) => API.post("/login", formData);
export const register = (formData) => API.post("/signup", formData);
