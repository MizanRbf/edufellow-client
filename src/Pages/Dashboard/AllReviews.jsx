import React from "react";
import Loader from "../../Shared/Loader";
import ReviewCard from "../../Components/AllReviews/ReviewCard";
import useReviews from "../../Hooks/useReviews";
import { Helmet } from "react-helmet-async";
import EmptyState from "../../Shared/EmptyState";

const AllReviews = () => {
  const { allReviews, isPending, isError, error } = useReviews();

  if (isPending) {
    return <Loader></Loader>;
  }
  if (isError) {
    alert(error.message);
  }
  return (
    <div>
      <Helmet>
        <title>All Reviews || Edufellow</title>
      </Helmet>
      <h1 className="mb-6">All Reviews</h1>
      {/* Blank Page */}
      {allReviews.length === 0 && (
        <EmptyState
          message="No reviews found!"
          buttonText="Go Back"
          redirectPath={-1}
        ></EmptyState>
      )}
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
