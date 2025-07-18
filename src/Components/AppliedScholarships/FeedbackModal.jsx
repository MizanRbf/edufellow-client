import { FaCommentDots } from "react-icons/fa";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useQueryClient } from "@tanstack/react-query";
import FeedbackModalBtn from "./FeedbackModalBtn";

const FeedbackModal = ({ applicant }) => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  // handle Feedback
  const handleFeedback = async (e, id) => {
    e.preventDefault();
    const form = e.target;
    const feedback = form.feedback.value;

    try {
      const res = await axiosSecure.patch(`/applicant/${id}`, {
        feedback,
      });

      if (res.data.modifiedCount) {
        document.getElementById(`ReviewModal-${id}`).close();
        Swal.fire("Success!", "Feedback submitted successfully.", "success");

        // Updated
        queryClient.invalidateQueries(["allScholarships"]);
      }
    } catch (err) {
      //Close modal after successful update
      document.getElementById(`ReviewModal-${id}`).close();
      Swal.fire("Error!", err.message, "error");
    }
  };

  return (
    <div>
      <button
        className="btn btn-outline flex items-center gap-2 text-primary"
        onClick={() =>
          document.getElementById(`ReviewModal-${applicant._id}`).showModal()
        }
      >
        <FaCommentDots size={20} />
        Feedback
      </button>

      {/* Dialog */}
      <dialog id={`ReviewModal-${applicant._id}`} className="modal">
        <div className="modal-box">
          <h2 className="mb-4 text-primary">Send Feedback</h2>
          <form onSubmit={(e) => handleFeedback(e, applicant?._id)}>
            {/* Feedback Text Area */}

            <textarea
              name="feedback"
              placeholder="Enter feedback here..."
              className="textarea textarea-bordered w-full mt-4"
              required
            ></textarea>

            {/* Action button */}
            <FeedbackModalBtn applicant={applicant}></FeedbackModalBtn>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default FeedbackModal;
