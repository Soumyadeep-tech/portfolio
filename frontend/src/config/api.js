// API Configuration
// Use environment variable or fallback to localhost for development
const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.DEV
    ? "http://localhost:5000"
    : "https://portfolio-a7qc.onrender.com");

// Log the API URL in development for debugging
if (import.meta.env.DEV) {
  console.log("🔗 API Base URL:", API_BASE_URL);
}

export const API_ENDPOINTS = {
  contact: `${API_BASE_URL}/contact`,
  chat: `${API_BASE_URL}/chat`,
  health: `${API_BASE_URL}/health`,
};

export default API_BASE_URL;
