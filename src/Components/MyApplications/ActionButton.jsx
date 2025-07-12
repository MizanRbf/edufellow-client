import React from "react";

const ActionButton = () => {
  return (
    <div className="flex justify-between modal-action">
      {/* Submit Button */}
      <button
        type="submit"
        className="btn btn-success"
        onClick={() => document.getElementById("review_modal").close()}
      >
        Submit Review
      </button>

      {/* Cancel Button */}
      <button
        type="button"
        className="btn bg-red-200 text-red-500 font-bold"
        onClick={() => document.getElementById("review_modal").close()}
      >
        Cancel
      </button>
    </div>
  );
};

export default ActionButton;
