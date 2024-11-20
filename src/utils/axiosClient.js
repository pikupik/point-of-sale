import axios from "axios";

// Axios instance configuration
const axiosClient = axios.create({
  baseURL: "http://localhost:2000", // Replace with your backend URL
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Allow sending cookies (JWT token) with requests
});

export default axiosClient;
