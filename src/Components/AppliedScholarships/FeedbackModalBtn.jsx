import React from "react";

const FeedbackModalBtn = ({ applicant }) => {
  return (
    <div className="flex justify-between modal-action">
      {/* Submit Button */}
      <button type="submit" className="btn btn-success">
        Save changes
      </button>

      {/* Cancel Button */}
      <button
        type="button"
        className="btn bg-red-200 text-red-500 font-bold"
        onClick={() =>
          document.getElementById(`ReviewModal-${applicant._id}`).close()
        }
      >
        Cancel
      </button>
    </div>
  );
};

export default FeedbackModalBtn;
