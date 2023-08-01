import { IFormValues } from "@/components/contactForm";
import config from "@/config";
import Axios, { AxiosError, AxiosResponse } from "axios";

const axios = Axios.create({
  baseURL: `${config.api.url}/api/v${config.api.version}/`,
});

axios.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json;";
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

async function createContact({ subject, email, message }: IFormValues) {
  new Promise((resolve, reject) => {
    axios
      .post("/contacts", { subject, email, message })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export default { createContact };
