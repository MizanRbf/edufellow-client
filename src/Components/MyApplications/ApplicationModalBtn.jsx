import React from "react";

const ApplicationModalBtn = ({ application }) => {
  return (
    <div className="flex justify-end modal-action">
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
