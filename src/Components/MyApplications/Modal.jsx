import React, { useState } from "react";
import ActionButton from "./ActionButton";
import ReadonlyInfo from "./ReadonlyInfo";

const Modal = ({ application }) => {
  const [comment, setComment] = useState("");

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
  };

  return (
    <div>
      <button
        className="btn"
        onClick={() => document.getElementById("review_modal").showModal()}
      >
        Add Review
      </button>
      <dialog id="review_modal" className="modal">
        <div className="modal-box">
          <h2 className="mb-4">Add Your Review</h2>
          <form onSubmit={handleSubmit}>
            {/* Review Comment */}
            <textarea
              className="textarea textarea-bordered w-full"
              rows="3"
              required
              value={comment}
              onChange={(e) => setComment(e.target.value)}
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
