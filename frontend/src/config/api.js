// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const API_ENDPOINTS = {
  contact: `${API_BASE_URL}/contact`,
  chat: `${API_BASE_URL}/chat`,
  health: `${API_BASE_URL}/health`,
};

export default API_BASE_URL;
