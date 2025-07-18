import React from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useReviews = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: allReviews = [],
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["allReviews"],
    queryFn: async () => {
      const res = await axiosSecure.get("/reviews");
      return res.data;
    },
  });
  return { allReviews, isPending, isError, error };
};

export default useReviews;
