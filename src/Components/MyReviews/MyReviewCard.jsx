import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useQueryClient } from "@tanstack/react-query";
import ReviewUpdateModal from "./UpdateModal";

const MyReviewCard = ({ myReview, index }) => {
  const { _id, scholarship_name, university_name, commentReview, review_date } =
    myReview;
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

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
                text: "Your review has been deleted.",
                icon: "success",
              });
              // Update cache
              queryClient.setQueryData(["myReviews"], (oldData) =>
                oldData?.filter((review) => review._id !== id)
              );
            }
          })
          .catch((err) => Swal.fire("Error", err.message, "error"));
      }
    });
  };

  return (
    <tr className="border-2 border-slate-200">
      <th>{index + 1}</th>
      <td>{scholarship_name}</td>
      <td>{university_name}</td>
      <td>{commentReview}</td>
      <td>{review_date}</td>

      <td>
        <div className="flex items-center gap-3">
          {/* Edit Button */}
          <ReviewUpdateModal myReview={myReview}></ReviewUpdateModal>
          {/* Delete Button */}
          <button
            onClick={() => handleDelete(_id)}
            className="bg-red-500 p-2 rounded-sm text-white btn border-0"
          >
            <MdDelete className="text-xl" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MyReviewCard;
