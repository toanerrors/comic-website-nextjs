import axios from "axios";

export const axiosComic = axios.create({
  baseURL: "https://otruyenapi.com/v1/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 60000,
});

axiosComic.interceptors.response.use(
  (response) => {
    if (response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
