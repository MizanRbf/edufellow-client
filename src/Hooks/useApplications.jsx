import React from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useApplications = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: applications = [],
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["applications"],
    queryFn: async () => {
      const res = await axiosSecure.get("/applicants");
      return res.data;
    },
  });
  return { applications, isPending, isError, error };
};

export default useApplications;
