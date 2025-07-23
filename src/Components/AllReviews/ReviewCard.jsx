import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ReviewCard = ({ singleReview }) => {
  const queryClient = useQueryClient();
  const axiosSecure = useAxiosSecure();
  const {
    university_name,
    subject_category,
    user_photo,
    user_name,
    review_date,
    rating,
    commentReview,
  } = singleReview;

  // Handle Delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/reviews/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Review deleted successfully!",
                icon: "success",
              });
              // Update cache
              queryClient.setQueryData(["allReviews"], (oldData) =>
                oldData?.filter((review) => review._id !== id)
              );
            }
          })
          .catch((err) => Swal.fire("Error", err.message, "error"));
      }
    });
  };
  return (
    <div className="border border-primary rounded-lg p-6 flex gap-6 bg-white shadow-md max-w-lg mx-auto">
      {/* Image */}
      <div className="flex-shrink-0 w-28 h-28">
        <img
          className="w-full h-full object-cover rounded-lg shadow-sm"
          src={user_photo}
          alt={`${user_name}'s photo`}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {user_name}
          </h3>

          <p className="text-gray-700 mb-1">
            <span className="font-semibold text-primary">University: </span>
            {university_name}
          </p>

          <p className="text-gray-700 mb-1">
            <span className="font-semibold text-primary">Subject: </span>
            {subject_category}
          </p>

          <p className="text-gray-500 text-sm italic mb-3">{review_date}</p>

          <p className="text-gray-700 mb-2">
            <span className="font-semibold text-primary">Ratings: </span>
            <span className="text-yellow-500">{rating} ★</span>
          </p>

          <p className="text-gray-700 italic mb-4">
            <span className="font-semibold text-primary">Comment: </span>"
            {commentReview}"
          </p>
        </div>

        {/* Delete Button */}
        <div>
          <button
            onClick={() => handleDelete(singleReview?._id)}
            className="bg-red-600 hover:bg-red-700 transition-colors duration-200 p-2 rounded-md text-white flex items-center gap-2"
            title="Delete Review"
          >
            <MdDelete className="text-xl" />
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
