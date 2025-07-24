import React from "react";

const ScholarModalBtn = ({ scholarship, isSaving }) => {
  return (
    <div className="flex justify-between modal-action">
      {/* Submit Button */}
      <button type="submit" className="btn btn-success">
        {isSaving ? "saving..." : "Save Changes"}
      </button>

      {/* Cancel Button */}
      <button
        type="button"
        className="btn bg-red-200 text-red-500 font-bold"
        onClick={() =>
          document.getElementById(`scholarshipModal-${scholarship._id}`).close()
        }
      >
        Cancel
      </button>
    </div>
  );
};

export default ScholarModalBtn;
