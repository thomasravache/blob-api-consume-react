import axios from "axios";

const api = axios.create({
  baseURL: 'https://localhost:7241/'
});

export const upload = async (file) => api.post('/file/upload', file);
