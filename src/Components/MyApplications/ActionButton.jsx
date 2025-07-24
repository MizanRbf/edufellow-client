import React from "react";

const ActionButton = ({ application, isDisabled }) => {
  return (
    <div className="flex justify-between modal-action">
      {/* Submit Button */}
      <button
        type="submit"
        disabled={isDisabled}
        className="btn btn-success"
        onClick={() =>
          document.getElementById(`review_modal_${application?._id}`).close()
        }
      >
        Submit Review
      </button>

      {/* Cancel Button */}
      <button
        type="button"
        className="btn bg-red-200 text-red-500 font-bold"
        onClick={() =>
          document.getElementById(`review_modal_${application._id}`).close()
        }
      >
        Cancel
      </button>
    </div>
  );
};

export default ActionButton;
