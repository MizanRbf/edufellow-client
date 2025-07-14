import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQueryClient } from "@tanstack/react-query";

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
              queryClient.setQueryData(["allScholarships"], (oldData) =>
                oldData?.filter((scholarship) => scholarship._id !== id)
              );
            }
          })
          .catch((err) => Swal.fire("Error", err.message, "error"));
      }
    });
  };
  return (
    <tr className="border-2 border-slate-200">
      <th>{index + 1}</th>
      <td>
        <img
          className="rounded-xl md:max-w-20 md:h-20 min-w-30 h-30 border-2 p-1 border-primary"
          src={university_image}
          alt=""
        />
      </td>
      <td>{scholarship_name}</td>
      <td>{university_name}</td>
      <td>{subject_category}</td>
      <td>{degree}</td>
      <td>{application_fees}</td>
      <td>
        <div className="flex items-center gap-3">
          {/* Details Button */}
          <Link
          //  to={`/dashboard/myApplication/${_id}`}
          >
            <button className="bg-green-600 p-2 rounded-sm text-white btn border-0">
              <FaInfoCircle className="text-xl" />
            </button>
          </Link>

          {/* Edit Button */}
          <Link
          //  to={`/dashboard/updateMyApplication/${_id}`}
          >
            <button className="bg-blue-700 p-2 rounded-sm text-white btn border-0">
              <MdEdit className="text-xl" />
            </button>
          </Link>

          {/* Cancel Button */}
          <button
            onClick={() => handleDelete(_id)}
            className="bg-red-500 p-2 rounded-sm text-white btn border-0"
          >
            <MdDelete className="text-xl" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ManageScholarTable;
