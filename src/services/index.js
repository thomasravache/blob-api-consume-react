import axios from "axios";

const api = axios.create({
  baseURL: 'https://localhost:7241/'
});

export const uploadFile = async (file) => api.post('/file/upload', file);

export const readFile = async (fileName) => api.get(`/file/read?fileName=${fileName}`);

export const downloadFile = async (fileName) => api.get(`/file/download?fileName=${fileName}`);
