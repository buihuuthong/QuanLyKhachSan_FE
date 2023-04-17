import axios from "axios";
const API_ENDPOINT = "http://localhost:8080/api/";

const AxiosClient = axios.create({
  baseURL: API_ENDPOINT,
  responseType: "json",
  timeout: 50000,
});

AxiosClient.interceptors.request.use(
  async (config) => {
    const newConfig = { ...config };
    const token = localStorage.getItem("auth-token");
    if (token) {
      newConfig.headers.Authorization = `Bearer ${token}`;
    }
    return newConfig;
  },
  (error) => {
    return Promise.reject(error);
  }
);

AxiosClient.interceptors.response.use(
  function (response) {
    return response.data ?? response;
  },
  function (error) {
    console.log("Error:", error.response);
    return Promise.reject(error);
  }
);

export default AxiosClient;
