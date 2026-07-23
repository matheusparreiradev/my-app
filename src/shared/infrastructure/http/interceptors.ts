import { api } from "./api";

api.interceptors.request.use((config) => {
  // adicionar JWT
  // adicionar correlation-id
  // log

  return config;
});

api.interceptors.response.use(
  response => response,
  error => {
    // tratar 401
    // renovar token
    // log

    return Promise.reject(error);
  }
);