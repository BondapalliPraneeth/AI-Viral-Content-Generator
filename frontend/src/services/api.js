import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const api = axios.create({ baseURL: API_URL, timeout: 30000 });

export const generateContent = async (payload) => {
  const response = await api.post("/api/content/generate", payload);
  return response.data;
};

export default api;
