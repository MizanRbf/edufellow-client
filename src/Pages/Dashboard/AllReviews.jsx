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

      {/* Title */}
      <div className="flex justify-center mt-5 md:mt-10 mb-6">
        <div className="inline-block transform -skew-x-12 bg-gradient-to-r from-cyan-800 to-cyan-950 px-8 py-4 shadow-lg rounded-md">
          <h1 className="transform skew-x-12 text-white text-3xl font-bold uppercase tracking-wide">
            All Reviews
          </h1>
        </div>
      </div>

      <div>
        {/* Blank Page */}
        {allReviews.length === 0 && (
          <EmptyState
            message="No reviews found!"
            buttonText="Go Back"
            redirectPath={-1}
          ></EmptyState>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allReviews.map((singleReview) => (
            <ReviewCard
              key={singleReview._id}
              singleReview={singleReview}
            ></ReviewCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllReviews;
