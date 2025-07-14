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
    <div className="border rounded-sm border-primary p-4 flex gap-4">
      {/* image */}
      <div className="">
        <img className="w-full mb-3 rounded-sm" src={user_photo} alt="" />
      </div>

      {/* Content */}
      <div>
        <h3>{user_name}</h3>
        <p>
          <span className="font-semibold">University: </span>
          {university_name}
        </p>
        <p>
          <span className="font-semibold">Subject: </span>
          {subject_category}
        </p>
        <p>{review_date}</p>
        <p>
          <span className="font-semibold">Ratings: </span>
          {rating}
        </p>
        <p>
          <span className="font-semibold">Comment: </span>
          {commentReview}
        </p>
        {/* Delete Button */}
        <button
          onClick={() => handleDelete(singleReview?._id)}
          className="bg-red-500 p-2 rounded-sm text-white btn border-0"
        >
          <MdDelete className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
