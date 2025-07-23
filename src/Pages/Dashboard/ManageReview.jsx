import React from "react";
import Loader from "../../Shared/Loader";
import ManageReviewTable from "../../Components/ManageReview/ManageReviewTable";
import useReviews from "../../Hooks/useReviews";
import { Helmet } from "react-helmet-async";
import EmptyState from "../../Shared/EmptyState";

const MangeReview = () => {
  const { allReviews: manageReview, isPending, isError, error } = useReviews();

  if (isPending) {
    return <Loader></Loader>;
  }
  if (isError) {
    alert(error.message);
  }
  return (
    <div>
      <Helmet>
        <title>Manage Reviews || Edufellow</title>
      </Helmet>
      <h1 className="mb-6">Manage Review</h1>
      {/* Blank Page */}
      {manageReview.length === 0 && (
        <EmptyState
          message="No reviews found!"
          buttonText="Go Back"
          redirectPath={-1}
        ></EmptyState>
      )}
      <div className="grid grid-cols-3 gap-4">
        {manageReview.map((manageSingleReview) => (
          <ManageReviewTable
            key={manageSingleReview._id}
            manageSingleReview={manageSingleReview}
          ></ManageReviewTable>
        ))}
      </div>
    </div>
  );
};

export default MangeReview;
