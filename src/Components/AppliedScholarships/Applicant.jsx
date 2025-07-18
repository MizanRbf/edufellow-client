import React from "react";
import { MdCancel, MdDelete } from "react-icons/md";
import FeedbackModal from "./FeedbackModal";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQueryClient } from "@tanstack/react-query";
import ApplicantsModal from "./ApplicantsModal";

const Applicant = ({ applicant, index }) => {
  const {
    university_name,
    scholarship_category,
    subject_category,
    photo,
    status,
    feedback,
  } = applicant;

  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  // Handle Status Update
  const handleStatusUpdate = async (id, newStatus) => {
    const confirm = await Swal.fire({
      title: `Are you sure to mark as ${newStatus}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, confirm it!",
    });

    if (confirm.isConfirmed) {
      try {
        const res = await axiosSecure.patch(`/applicant/${id}`, {
          status: newStatus,
        });

        if (res.data.modifiedCount) {
          Swal.fire(
            "Success!",
            `Application marked as ${newStatus}`,
            "success"
          );
          // Refetch application list
          queryClient.invalidateQueries(["manageAppliedApplications"]);
        } else {
          Swal.fire("No Change", "Status already set to this.", "info");
        }
      } catch (error) {
        Swal.fire("Error", "Something went wrong", "error");
        console.error(error);
      }
    }
  };

  return (
    <tr className="border-2 border-slate-200">
      <th>{index + 1}</th>
      <td>
        <img
          className="rounded-xl md:max-w-20 md:h-20 min-w-30 h-30 border-2 p-1 border-primary"
          src={photo}
          alt=""
        />
      </td>
      <td>{university_name}</td>
      <td>{scholarship_category}</td>
      <td>{subject_category}</td>
      <td>{feedback}</td>
      <td>
        <span
          className={`rounded-full font-semibold py-1  px-3 ${
            applicant.status === "pending"
              ? " bg-orange-100 text-orange-500"
              : applicant.status === "processing"
              ? "bg-violet-100 text-violet-500"
              : applicant.status === "completed"
              ? "bg-green-100 text-green-600"
              : " text-red-500 bg-red-100"
          }`}
        >
          {status}
        </span>
      </td>
      <td>
        <div className="flex items-center gap-3">
          {/* Details Button */}
          <ApplicantsModal applicant={applicant}></ApplicantsModal>

          {/* Feedback Button */}
          <FeedbackModal applicant={applicant}></FeedbackModal>

          {/* Cancel Button */}

          <button
            onClick={() => handleStatusUpdate(applicant?._id, "rejected")}
            className="btn btn-outline btn-error flex items-center gap-2 text-red-600 hover:bg-red-600 hover:text-white"
          >
            <MdCancel size={20} />
            Cancel
          </button>

          {/* Mark as Processing */}
          <button
            className="btn btn-info"
            onClick={() => handleStatusUpdate(applicant._id, "processing")}
          >
            Mark as Processing
          </button>

          {/* Mark as Completed */}
          <button
            className="btn btn-success"
            onClick={() => handleStatusUpdate(applicant._id, "completed")}
          >
            Mark as Completed
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Applicant;
