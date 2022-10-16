import axios from "axios";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const token = currentUser?.token;

console.log("user in axios instance", user);
console.log("currentUser in axios instance", currentUser);
console.log("token in axios instance", token);

const API = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    token: `Bearer ${token}`,
  },
});

export default API;
