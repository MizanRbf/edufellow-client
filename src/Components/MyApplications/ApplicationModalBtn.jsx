import React from "react";

const ApplicationModalBtn = ({ application }) => {
  return (
    <div className="flex justify-between modal-action">
      {/* Submit Button */}
      <button
        type="submit"
        className="btn btn-success"
        onClick={() =>
          document.getElementById(`applicationModal-${application._id}`).close()
        }
      >
        Save changes
      </button>

      {/* Cancel Button */}
      <button
        type="button"
        className="btn bg-red-200 text-red-500 font-bold"
        onClick={() =>
          document.getElementById(`applicationModal-${application._id}`).close()
        }
      >
        Cancel
      </button>
    </div>
  );
};

export default ApplicationModalBtn;
