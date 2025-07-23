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
    <tr className="border border-slate-300 hover:bg-gray-50 transition-colors duration-200">
      <th className="py-3 px-4 text-center text-gray-700 font-medium">
        {index + 1}
      </th>

      <td className="py-2 px-4">
        <img
          className="rounded-xl max-w-[80px] h-[80px] object-cover border-2 border-primary p-1"
          src={photo}
          alt={`${university_name} logo`}
        />
      </td>

      <td className="py-3 px-4 text-gray-800 font-semibold">
        {university_name}
      </td>
      <td className="py-3 px-4 text-gray-600">{university_address}</td>
      <td className="py-3 px-4 text-gray-700">{feedback}</td>
      <td className="py-3 px-4 text-gray-700">{subject_category}</td>
      <td className="py-3 px-4 text-gray-700">{applying_degree}</td>
      <td className="py-3 px-4 text-gray-700">{application_fees}</td>
      <td className="py-3 px-4 text-gray-700">{service_charge}</td>

      <td className="py-3 px-4 text-center">
        <span
          className={`inline-block rounded-full font-semibold py-1 px-3 text-sm
        ${
          application.status === "pending"
            ? "bg-orange-100 text-orange-600"
            : application.status === "processing"
            ? "bg-violet-100 text-violet-600"
            : application.status === "completed"
            ? "bg-green-100 text-green-600"
            : "bg-red-100 text-red-600"
        }`}
        >
          {status}
        </span>
      </td>

      <td className="py-3 px-4">
        <div className="flex items-center gap-3 justify-center">
          {/* Details Button */}
          <MyApplicationModal application={application} />

          {/* Edit Button */}
          <button
            className={`p-2 rounded-md text-white btn border-0 ${
              status === "pending"
                ? "bg-blue-700 hover:bg-blue-800"
                : "bg-gray-400 cursor-not-allowed"
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
            disabled={status !== "pending"}
          >
            <MdEdit size={20} />
          </button>

          {/* Cancel Button */}
          <button
            onClick={() => handleCancel(application?._id)}
            className="bg-red-700 p-2 rounded-md text-white btn border-0 hover:bg-red-800"
          >
            <MdCancel size={20} />
          </button>

          {/* Review Button */}
          <Modal application={application} />
        </div>
      </td>
    </tr>
  );
};

export default MyApplicationTable;
