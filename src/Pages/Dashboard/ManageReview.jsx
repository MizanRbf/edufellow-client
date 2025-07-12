import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loader from "../../Shared/Loader";
import ReviewCard from "../../Components/AllReviews/ReviewCard";

const MangeReview = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: manageReview,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["manageReview"],
    queryFn: async () => {
      const res = await axiosSecure.get("/reviews");
      return res.data;
    },
  });
  if (isPending) {
    return <Loader></Loader>;
  }
  if (isError) {
    alert(error.message);
  }
  return (
    <div>
      <h1 className="mb-6">Manage Review</h1>
      <div className="grid grid-cols-3 gap-4">
        {manageReview.map((manageSingleReview) =>
          console.log(manageSingleReview)
        )}
      </div>
    </div>
  );
};

export default MangeReview;
