import React from "react";
import Modal from "./Modal";
import { MdCancel, MdEdit } from "react-icons/md";
import { Link, useNavigate } from "react-router";
import { FaInfoCircle } from "react-icons/fa";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useQueryClient } from "@tanstack/react-query";
import MyApplicationModal from "./MyApplicationModal";
const MyApplicationTable = ({ application, index }) => {
  const {
    _id,
    university_name,
    university_address,
    subject_category,
    applying_degree,
    application_fees,
    service_charge,
    photo,
    feedback,
    status,
  } = application;
  const queryClient = useQueryClient();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  // Handle Cancel
  const handleCancel = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This will reject the application.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, reject it!",
    });

    if (confirm.isConfirmed) {
      try {
        const res = await axiosSecure.patch(`/applicant/${id}`, {
          status: "rejected",
        });

        if (res.data.modifiedCount) {
          Swal.fire(
            "Rejected!",
            "The application has been rejected.",
            "success"
          );
        }
        // Refetch application list
        queryClient.invalidateQueries(["myApplications"]);
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
      <td>{university_address}</td>
      <td>{feedback}</td>
      <td>{subject_category}</td>
      <td>{applying_degree}</td>
      <td>{application_fees}</td>
      <td>{service_charge}</td>
      <td>
        <span
          className={`rounded-full font-semibold py-1  px-3 ${
            application.status === "pending"
              ? " bg-orange-100 text-orange-500"
              : application.status === "processing"
              ? "bg-violet-100 text-violet-500"
              : application.status === "completed"
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
          <MyApplicationModal application={application}></MyApplicationModal>

          {/* Edit Button */}
          <button
            className={`p-2 rounded-sm text-white btn border-0 ${
              status === "pending" ? "bg-blue-700" : "bg-gray-400"
            }`}
            onClick={() => {
              if (status === "pending") {
                navigate(`/dashboard/updateMyApplication/${_id}`);
              } else {
                Swal.fire({
                  icon: "warning",
                  title: "Cannot Edit",
                  text: `This application is currently "${status}". Editing is only allowed while it's pending.`,
                });
              }
            }}
          >
            <MdEdit size={20} />
          </button>

          {/* Cancel Button */}
          <button
            onClick={() => handleCancel(application?._id)}
            className="bg-red-700 p-2 rounded-sm text-white btn border-0"
          >
            <MdCancel size={20} />
          </button>

          {/* Review Button */}
          <Modal application={application}></Modal>
        </div>
      </td>
    </tr>
  );
};

export default MyApplicationTable;
