import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL, // Use .env for base URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 🔐 Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add authorization headers or device info here if needed
    return config;
  },
  (error) => Promise.reject(error)
);

// 🛡️ Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error?.response || error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
