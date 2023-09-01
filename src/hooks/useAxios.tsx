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
        context.dispatch({ type: "checkAuthStatus" });
      }
      return config;
    },
    (error) => {
      context.dispatch({ type: "checkAuthStatus" });
      return console.log(error);
    }
  );

  return axiosInstance;
};

export default useAxios;
