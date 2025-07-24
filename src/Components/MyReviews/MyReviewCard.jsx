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
    <tr className="border-b">
      <th className="px-4 py-3 text-center text-white font-medium">
        {index + 1}
      </th>
      <td className="px-4 py-3 text-white">{scholarship_name}</td>
      <td className="px-4 py-3 text-white">{university_name}</td>
      <td className="px-4 py-3 text-white">{commentReview}</td>
      <td className="px-4 py-3 text-sm text-white">{review_date}</td>

      <td className="px-4 py-3">
        <div className="flex items-center justify-center gap-3">
          {/* Edit Button */}
          <ReviewUpdateModal myReview={myReview} />

          {/* Delete Button */}
          <button
            onClick={() => handleDelete(_id)}
            className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md shadow-md transition-all duration-200"
          >
            <MdDelete className="text-xl" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MyReviewCard;
