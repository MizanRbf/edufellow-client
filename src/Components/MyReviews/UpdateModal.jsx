import React, { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import ModalBtn from "./ModalBtn";
import ReadOnly from "./ReadOnly";
import StarRating from "../MyApplications/StarRating";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useQueryClient } from "@tanstack/react-query";

const ReviewUpdateModal = ({ myReview }) => {
  const [comment, setComment] = useState(myReview?.commentReview || "");
  const [rating, setRating] = useState(myReview?.rating || 0);
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  // useEffect
  useEffect(() => {
    setComment(myReview?.commentReview || "");
    setRating(myReview?.rating || 0);
  }, [myReview]);

  // Handle Update
  const handleUpdate = async (e, id) => {
    e.preventDefault();

    const updatedReview = {
      commentReview: comment,
      rating: rating,
    };

    try {
      const res = await axiosSecure.put(`/reviews/${id}`, updatedReview);
      console.log(res.data);
      if (res.data.modifiedCount) {
        Swal.fire("Success!", "Review updated successfully.", "success");
      } else {
        Swal.fire("No Changes", "No update was made.", "info");
      }
      queryClient.invalidateQueries(["myReviews"]);
    } catch (err) {
      Swal.fire("Error!", err.message, "error");
    }
  };

  return (
    <div>
      {/* Update Button */}
      <button
        className="bg-blue-700 p-2 rounded-sm text-white btn border-0"
        onClick={() =>
          document.getElementById(`reviewModal-${myReview._id}`).showModal()
        }
      >
        <MdEdit className="text-xl" />
      </button>

      {/* Dialog */}
      <dialog id={`reviewModal-${myReview._id}`} className="modal">
        <div className="modal-box">
          <h2 className="mb-4 text-primary">Update Your Review</h2>

          {/* Form */}
          <form onSubmit={(e) => handleUpdate(e, myReview._id)}>
            {/* Ratings */}
            <StarRating rating={rating} setRating={setRating}></StarRating>

            {/* Review Comment */}
            <textarea
              className="textarea textarea-bordered w-full"
              rows="3"
              required
              value={comment}
              name="commentReview"
              onChange={(e) => setComment(e.target.value)}
              placeholder="Text Review"
            />

            {/* Read Only Info */}
            <ReadOnly myReview={myReview}></ReadOnly>

            {/* Action button */}
            <ModalBtn myReview={myReview}></ModalBtn>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ReviewUpdateModal;
