import React from "react";
import Modal from "./Modal";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router";
import { FaInfoCircle } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQueryClient } from "@tanstack/react-query";
import ApplicationUpdateModal from "./ApplicationUpdateModal";

const MyApplicationTable = ({ application, index }) => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const {
    _id,
    university_name,
    university_address,
    subject_category,
    applying_degree,
    application_fees,
    service_charge,
    photo,
  } = application;

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
          .delete(`/myApplication/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your application has been deleted.",
                icon: "success",
              });
              // Update cache
              queryClient.setQueryData(["myApplications"], (oldData) =>
                oldData?.filter((application) => application._id !== id)
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
          src={photo}
          alt=""
        />
      </td>
      <td>{university_name}</td>
      <td>{university_address}</td>
      <td>Feedback</td>
      <td>{subject_category}</td>
      <td>{applying_degree}</td>
      <td>{application_fees}</td>
      <td>{service_charge}</td>
      <td>Status</td>

      <td>
        <div className="flex items-center gap-3">
          {/* Details Button */}
          <Link to={`/dashboard/myApplication/${_id}`}>
            <button className="bg-green-600 p-2 rounded-sm text-white btn border-0">
              <FaInfoCircle className="text-xl" />
            </button>
          </Link>

          {/* Edit Button */}
          <ApplicationUpdateModal
            application={application}
          ></ApplicationUpdateModal>

          {/* Cancel Button */}
          <button
            onClick={() => handleDelete(_id)}
            className="bg-red-500 p-2 rounded-sm text-white btn border-0"
          >
            <MdDelete className="text-xl" />
          </button>

          {/* Review Button */}
          <Modal application={application}></Modal>
        </div>
      </td>
    </tr>
  );
};

export default MyApplicationTable;
