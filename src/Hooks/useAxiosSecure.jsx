import axios from "axios";
import React from "react";

const axiosInstance = axios.create({
  baseURL: "https://edufellow-server.vercel.app",
});
const useAxiosSecure = () => {
  return axiosInstance;
};

export default useAxiosSecure;
