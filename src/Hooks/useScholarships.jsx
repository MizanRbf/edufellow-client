import React from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useScholarships = () => {
  const axiosSecure = useAxiosSecure();
  const { isPending, isError, error, scholarships } = useQuery({
    queryKey: ["scholarships"],
    queryFn: async () => {
      const res = await axiosSecure.get("/scholarships");
      return res.data;
    },
  });
  return { scholarships, isPending, isError, error };
};

export default useScholarships;
