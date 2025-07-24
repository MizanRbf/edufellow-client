import React from "react";
import Swal from "sweetalert2";

import { useQueryClient } from "@tanstack/react-query";
import { MdDelete } from "react-icons/md";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const DeleteRejectedButton = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const handleDeleteRejected = async () => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "All rejected applicants will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete all!",
    });

    if (confirm.isConfirmed) {
      try {
        const res = await axiosSecure.delete("/applicants/rejected");
        if (res.data.deletedCount > 0) {
          Swal.fire(
            "Deleted!",
            `${res.data.deletedCount} rejected applicants deleted.`,
            "success"
          );
          queryClient.invalidateQueries(["manageAppliedApplications"]);
        } else {
          Swal.fire(
            "No Rejected Found",
            "There are no rejected applicants.",
            "info"
          );
        }
      } catch (err) {
        console.error(err);
        Swal.fire("Error", "Failed to delete applicants.", "error");
      }
    }
  };

  return (
    <button
      onClick={handleDeleteRejected}
      className="btn btn-outline btn-error flex items-center gap-2"
    >
      <MdDelete size={20} />
      Delete All Rejected Applicants
    </button>
  );
};

export default DeleteRejectedButton;
