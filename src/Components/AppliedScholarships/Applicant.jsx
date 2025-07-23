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
    <tr className="border border-slate-300 hover:bg-gray-50 transition-colors duration-200">
      <th className="py-3 px-4 text-center text-gray-700 font-semibold">
        {index + 1}
      </th>

      <td className="py-2 px-4">
        <img
          className="rounded-xl max-w-[80px] h-[80px] object-cover border-2 p-1 border-primary"
          src={photo}
          alt={`${university_name} logo`}
        />
      </td>

      <td className="py-3 px-4 text-gray-800 font-semibold">
        {university_name}
      </td>
      <td className="py-3 px-4 text-gray-700">{scholarship_category}</td>
      <td className="py-3 px-4 text-gray-700">{subject_category}</td>
      <td className="py-3 px-4 text-gray-700">{feedback}</td>

      <td className="py-3 px-4 text-center">
        <span
          className={`inline-block rounded-full font-semibold py-1 px-3 text-sm
        ${
          applicant.status === "pending"
            ? "bg-orange-100 text-orange-600"
            : applicant.status === "processing"
            ? "bg-violet-100 text-violet-600"
            : applicant.status === "completed"
            ? "bg-green-100 text-green-600"
            : "bg-red-100 text-red-600"
        }`}
        >
          {status}
        </span>
      </td>

      <td className="py-3 px-4">
        <div className="flex flex-nowrap items-center gap-x-3 overflow-x-auto">
          {/* Details Button */}
          <ApplicantsModal applicant={applicant} />

          {/* Feedback Button */}
          <FeedbackModal applicant={applicant} />

          {/* Cancel Button */}
          <button
            onClick={() => handleStatusUpdate(applicant?._id, "rejected")}
            className="btn btn-outline btn-error flex items-center gap-2 text-red-600 hover:bg-red-600 hover:text-white transition whitespace-nowrap"
            title="Cancel Application"
          >
            <MdCancel size={20} />
            Cancel
          </button>

          {/* Mark as Processing */}
          <button
            className="btn btn-info transition hover:bg-blue-600 hover:text-white whitespace-nowrap"
            onClick={() => handleStatusUpdate(applicant._id, "processing")}
            title="Mark as Processing"
          >
            Mark as Processing
          </button>

          {/* Mark as Completed */}
          <button
            className="btn btn-success transition hover:bg-green-700 hover:text-white whitespace-nowrap"
            onClick={() => handleStatusUpdate(applicant._id, "completed")}
            title="Mark as Completed"
          >
            Mark as Completed
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Applicant;
