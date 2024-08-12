import axios from "axios";

const apiKey = import.meta.env.VITE_APP_API_KEY
const bearerToken = import.meta.env.VITE_APP_BEARER_TOKEN


export const baseURL = 'https://api.themoviedb.org/3/';

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: { Authorization: `Bearer ${bearerToken}` },
  params: { apiKey },
});

export default axiosInstance;