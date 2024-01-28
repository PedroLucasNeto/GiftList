import axios from "axios";

export const loginApi = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
});