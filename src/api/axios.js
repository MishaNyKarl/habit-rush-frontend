import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Добавление токена в заголовки автоматически (если есть)
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;
