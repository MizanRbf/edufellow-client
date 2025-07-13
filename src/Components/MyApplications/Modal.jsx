import React, { useState } from "react";
import ActionButton from "./ActionButton";
import ReadonlyInfo from "./ReadonlyInfo";
import StarRating from "./StarRating";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

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

    // Review stored in DB
    try {
      const res = await axiosSecure.post("/reviews", reviewData);
      if (res.data.insertedId) {
        alert("successful");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <button
        className="bg-secondary py-2 rounded-sm text-white btn border-0"
        onClick={() => document.getElementById("review_modal").showModal()}
      >
        Review
      </button>
      <dialog id="review_modal" className="modal">
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
            <ActionButton></ActionButton>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
