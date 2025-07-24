import React, { useState } from "react";
import ActionButton from "./ActionButton";
import ReadonlyInfo from "./ReadonlyInfo";
import StarRating from "./StarRating";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Modal = ({ application }) => {
  const axiosSecure = useAxiosSecure();
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const reviewData = Object.fromEntries(formData.entries());
    reviewData.rating = parseInt(reviewData.rating);
    reviewData.scholarshipId = application.scholarship_id;

    // Review stored in DB
    try {
      const res = await axiosSecure.post("/reviews", reviewData);

      // Case 1: Duplicate review
      if (res.data?.success === false) {
        Swal.fire({
          icon: "warning",
          title: "Duplicate Review",
          text:
            res.data.message ||
            "You have already submitted a review for this scholarship.",
        });
        return;
      }

      // Case 2: Review successfully submitted
      if (res.data?.success && res.data?.data?.insertedId) {
        Swal.fire({
          title: res.data.message || "Review submitted successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      // Case 3: Unexpected server/network error
      const serverMessage =
        error.response?.data?.message ||
        "Something went wrong. Please try again.";

      Swal.fire({
        icon: "error",
        title: "Review Submission Failed",
        text: serverMessage,
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  };

  return (
    <div>
      <button
        className="bg-secondary py-2 rounded-sm text-white btn border-0"
        onClick={() =>
          document.getElementById(`review_modal_${application._id}`).showModal()
        }
      >
        Review
      </button>
      <dialog id={`review_modal_${application._id}`} className="modal">
        <div className="modal-box">
          <h2 className="mb-4 text-primary">Add Your Review</h2>
          <form onSubmit={handleSubmit}>
            {/* Star Rating */}
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
            {/* Readonly Info */}
            <ReadonlyInfo application={application}></ReadonlyInfo>

            {/* Action button */}
            <ActionButton
              application={application}
              isDisabled={comment.trim() === ""}
            ></ActionButton>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
