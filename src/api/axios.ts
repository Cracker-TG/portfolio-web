import config from "@/config";
import Axios, { AxiosError, AxiosResponse } from "axios";

const axios = Axios.create({
  baseURL: `${config.api.url}/api/v${config.api.version}/`,
});

axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response): AxiosResponse => response,
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default axios;
