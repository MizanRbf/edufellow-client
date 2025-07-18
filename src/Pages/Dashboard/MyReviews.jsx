import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import Loader from "../../Shared/Loader";
import MyReviewCard from "../../Components/MyReviews/MyReviewCard";
import EmptyState from "../../Shared/EmptyState";

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
    <div className="overflow-x-auto pr-4">
      <h1>My Reviews</h1>

      {/* Blank Page */}
      {myReviews.length === 0 && (
        <EmptyState
          message="You have not review any scholarship yet!"
          buttonText="Go to My Application"
          redirectPath="/dashboard/myApplication"
        ></EmptyState>
      )}
      <table className="table">
        {/* head */}

        <thead className={`text-lg ${myReviews.length < 1 && "hidden"}`}>
          <tr className="text-primary">
            <th>No.</th>
            <th>Scholarship Name</th>
            <th>University Name</th>
            <th>Review Comments</th>
            <th>Review Date</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {myReviews.map((myReview, index) => (
            <MyReviewCard
              key={myReview._id}
              myReviews={myReviews}
              myReview={myReview}
              index={index}
            ></MyReviewCard>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyReviews;
