import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loader from "../../Shared/Loader";
import ReviewCard from "../../Components/AllReviews/ReviewCard";

const AllReviews = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: allReviews,
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
  if (isPending) {
    return <Loader></Loader>;
  }
  if (isError) {
    alert(error.message);
  }
  return (
    <div>
      <h1>All Reviews</h1>
      <div className="grid grid-cols-3 gap-4">
        {allReviews.map((singleReview) => (
          <ReviewCard
            key={singleReview._id}
            singleReview={singleReview}
          ></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
