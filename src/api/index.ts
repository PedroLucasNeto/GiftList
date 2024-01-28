import axios from "axios";

export const api = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
});

api.interceptors.request.use((request) => {
  const token = localStorage.getItem('token');
  
  if (token) {
    const  parsedToken  = JSON.parse(token);
    request.headers.Authorization = `Bearer ${parsedToken.token}`;
    request.headers["Content-Type"] = `application/json`;
    request.headers.Accept = `application/json`;
  }
  return request; 
});


api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      // Redirecionar o usuário para a página de login ou realizar outra ação apropriada
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);
