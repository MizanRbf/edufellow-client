import { AiOutlineInfoCircle } from "react-icons/ai";
import ApplicationDetails from "./ApplicationDetails";
import ApplicationModalBtn from "./ApplicationModalBtn";

const MyApplicationModal = ({ application }) => {
  return (
    <div>
      <button
        onClick={() =>
          document
            .getElementById(`applicationModal-${application._id}`)
            .showModal()
        }
        className="btn btn-outline btn-info flex items-center gap-2 text-info hover:text-white"
      >
        <AiOutlineInfoCircle size={20} />
        Details
      </button>

      {/* Dialog */}
      <dialog id={`applicationModal-${application._id}`} className="modal">
        <div className="modal-box w-full max-w-5xl">
          {/* applications Details */}
          <h2 className="mb-4 text-primary">Application Details</h2>
          <ApplicationDetails application={application}></ApplicationDetails>

          {/* application Modal Button */}
          <ApplicationModalBtn application={application}></ApplicationModalBtn>
        </div>
      </dialog>
    </div>
  );
};

export default MyApplicationModal;
