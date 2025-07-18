import { AiOutlineInfoCircle } from "react-icons/ai";
import ApplicantsModalBtn from "./ApplicantModalBtn";
import ApplicantsDetails from "./ApplicantsDetails";

const ApplicantsModal = ({ applicant }) => {
  return (
    <div>
      <button
        onClick={() =>
          document.getElementById(`applicantModal-${applicant._id}`).showModal()
        }
        className="btn btn-outline btn-info flex items-center gap-2 text-info hover:text-white"
      >
        <AiOutlineInfoCircle size={20} />
        Details
      </button>

      {/* Dialog */}
      <dialog id={`applicantModal-${applicant._id}`} className="modal">
        <div className="modal-box w-full max-w-5xl">
          {/* Applicants Details */}
          <h2 className="mb-4 text-primary">Applicants Details</h2>
          <ApplicantsDetails applicant={applicant}></ApplicantsDetails>

          {/* Applicant Modal Button */}
          <ApplicantsModalBtn applicant={applicant}></ApplicantsModalBtn>
        </div>
      </dialog>
    </div>
  );
};

export default ApplicantsModal;
