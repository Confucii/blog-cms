import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const useAxios = () => {
  // axios instance for making requests
  const context = useContext(AuthContext);

  const axiosInstance = axios.create();

  // request interceptor for adding token
  axiosInstance.interceptors.request.use((config) => {
    config.withCredentials = true;
    return config;
  });

  axiosInstance.interceptors.response.use(
    (config) => {
      if (config.statusText === "logged out") {
        document.cookie = `auth=true; expires=Thu, 01 Jan 1970 00:00:00 UTC;; SameSite=None; Secure`;
        context.dispatch({ type: "checkAuthStatus" });
      }
      return config;
    },
    (error) => {
      if (error.response.status === 401) {
        document.cookie = `auth=true; expires=Thu, 01 Jan 1970 00:00:00 UTC;; SameSite=None; Secure`;
      }
      context.dispatch({ type: "checkAuthStatus" });
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useAxios;
