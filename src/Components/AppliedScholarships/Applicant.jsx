import React from "react";
import { FaCommentDots } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Swal from "sweetalert2";
import { useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Applicant = ({ applicant, index }) => {
  const queryClient = useQueryClient();
  const axiosSecure = useAxiosSecure();
  const { university_name, scholarship_category, subject_category, photo } =
    applicant;

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
          .delete(`/applicant/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your application has been deleted.",
                icon: "success",
              });
              // Update cache
              queryClient.setQueryData(["allAppliedScholarships"], (oldData) =>
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
      <td>{scholarship_category}</td>
      <td>{subject_category}</td>
      <td>{}</td>
      <td>{}</td>
      <td>
        <div className="flex items-center gap-3">
          {/* Details Button */}
          {/* <Link to={`/dashboard/scholarship2/${_id}`}> */}
          <button className="btn btn-outline btn-info flex items-center gap-2 text-info hover:text-white">
            <AiOutlineInfoCircle size={20} />
            Details
          </button>
          {/* </Link> */}

          {/* Feedback Button */}
          <button className="btn btn-outline flex items-center gap-2 text-primary">
            <FaCommentDots className="text-xl" />
            Feedback
          </button>
          {/* Delete Button */}
          <button
            onClick={() => handleDelete(applicant?._id)}
            className="btn btn-outline btn-error flex hover:bg-red-600 hover:text-white items-center gap-2"
          >
            <MdDelete size={20} />
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Applicant;
