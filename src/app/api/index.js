import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("user")) {
    req.headers.authorization = `Bearer ${localStorage.getItem("user")}`;
  }

  return req;
});

// User register
export const register = (formData) =>
  API.post("/api/v1/auth/register", formData);

// Create profile
export const createProfile = (formData, id) =>
  API.post(`/api/v1/profile/create/${id}`, formData);

// Login
export const login = (formData) => API.post("/api/v1/auth/login", formData);
