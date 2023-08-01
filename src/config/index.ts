const API_VERSION = import.meta.env.VITE_API_VERSION;
const API_URL = import.meta.env.VITE_API_URL;

export default {
  api: {
    url: API_URL,
    version: API_VERSION,
  },
};
