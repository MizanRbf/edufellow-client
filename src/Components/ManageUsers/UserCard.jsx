import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const UserCard = ({ user, index }) => {
  const { name, email, role, photo } = user;
  const queryClient = useQueryClient();
  const axiosSecure = useAxiosSecure();

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
          .delete(`/user/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "user deleted successfully!",
                icon: "success",
              });
              // Update cache
              queryClient.setQueryData(["users"], (oldData) =>
                oldData?.filter((user) => user._id !== id)
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
      <td>{name}</td>
      <td>{email}</td>
      <td>{role}</td>
      <td>
        <div className="flex items-center gap-3">
          {/* Delete Button */}
          <button
            onClick={() => handleDelete(user?._id)}
            className="btn btn-outline btn-error flex items-center gap-2 hover:text-white hover:bg-red-500"
          >
            <MdDelete size={20} />
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UserCard;
