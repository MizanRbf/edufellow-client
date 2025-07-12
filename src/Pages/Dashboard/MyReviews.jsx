import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import Loader from "../../Shared/Loader";
import MyReviewCard from "../../Components/MyReviews/MyReviewCard";

const MyReviews = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const email = user.email;

  const {
    data: myReviews,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["myReviews"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/reviews?email=${email}`);
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
      <h1 className="mb-6">My Reviews</h1>
      <div className="grid grid-cols-3 gap-4">
        {myReviews.map((myReview) => (
          <MyReviewCard key={myReview._id} myReview={myReview}></MyReviewCard>
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
