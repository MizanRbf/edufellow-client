import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQueryClient } from "@tanstack/react-query";
import ManageScholarshipModal from "./ManageScholarshipModal";

const ManageScholarTable = ({ scholarship, index }) => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const {
    _id,
    scholarship_name,
    university_name,
    university_image,
    university_country,
    university_city,
    university_world_rank,
    subject_category,
    scholarship_category,
    degree,
    tuition_fees,
    application_fees,
    service_charge,
    application_deadline,
    post_date,
    posted_user_email,
  } = scholarship;

  // handleDelete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/scholarship/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Scholarship has been deleted.",
                icon: "success",
              });
              // Update cache
              queryClient.setQueryData(["scholarships"], (oldData) =>
                oldData?.filter((scholarship) => scholarship._id !== id)
              );
            }
          })
          .catch((err) => Swal.fire("Error", err.message, "error"));
      }
    });
  };
  return (
    <tr className="border-b border-white">
      {/* Serial Number */}
      <th className="px-4 py-3 text-center text-white">{index + 1}</th>

      {/* University Image */}
      <td className="px-4 py-3">
        <img
          src={university_image}
          alt="University"
          className="min-w-[80px] max-w-[80px] h-16 rounded-lg object-cover border-2 p-1 border-primary shadow-sm"
        />
      </td>

      {/* Scholarship Info */}
      <td className="px-4 py-3 font-medium text-white">{scholarship_name}</td>
      <td className="px-4 py-3 text-white">{university_name}</td>
      <td className="px-4 py-3 text-white">{subject_category}</td>
      <td className="px-4 py-3">{degree}</td>
      <td className="px-4 py-3 text-white font-semibold">
        ${application_fees}
      </td>

      {/* Action Buttons */}
      <td className="px-4 py-3">
        <div className="flex items-center gap-2 whitespace-nowrap">
          {/* Details Button */}
          <Link to={`/dashboard/scholarship2/${_id}`}>
            <button className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-sm text-sm transition cursor-pointer">
              <FaInfoCircle className="text-base" />
              Details
            </button>
          </Link>

          {/* Edit Button */}
          <ManageScholarshipModal scholarship={scholarship} />

          {/* Delete Button */}
          <button
            onClick={() => handleDelete(_id)}
            className="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-sm text-sm transition cursor-pointer"
          >
            <MdDelete className="text-base" />
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ManageScholarTable;
