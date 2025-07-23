import { useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const UserCard = ({ user, index }) => {
  const { name, email, role, photo, _id } = user;
  const queryClient = useQueryClient();
  const axiosSecure = useAxiosSecure();
  const [selectedRole, setSelectedRole] = useState(role);

  // Role change handler
  const handleRoleChange = async (e) => {
    const newRole = e.target.value;

    if (newRole === role) return;

    Swal.fire({
      title: "Change Role?",
      text: `Change role to ${newRole}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, change it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.patch(`/user/role/${_id}`, {
            role: newRole,
          });
          if (res.data.modifiedCount > 0) {
            setSelectedRole(newRole);
            Swal.fire("Success!", "Role updated successfully.", "success");
            queryClient.invalidateQueries(["users"]);
          } else {
            Swal.fire("Info", "No change detected.", "info");
          }
        } catch (error) {
          Swal.fire("Error", error.message, "error");
        }
      }
    });
  };

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
    <tr className="border-b border-gray-200 hover:bg-gray-50 transition duration-200">
      {/* Index Number */}
      <th className="px-4 py-3 text-gray-600 text-center">{index + 1}</th>

      {/* Profile Image */}
      <td className="px-4 py-3">
        <img
          className="rounded-xl w-16 h-16 object-cover border-2 p-1 border-primary shadow-sm"
          src={photo}
          alt="User"
        />
      </td>

      {/* Name */}
      <td className="px-4 py-3 text-gray-800 font-medium">{name}</td>

      {/* Email */}
      <td className="px-4 py-3 text-gray-600">{email}</td>

      {/* Role Dropdown */}
      <td className="px-4 py-3">
        <select
          value={selectedRole}
          onChange={handleRoleChange}
          className="select select-bordered select-sm w-full bg-white shadow-sm text-gray-700"
        >
          <option value="user">User</option>
          <option value="moderator">Moderator</option>
          <option value="admin">Admin</option>
        </select>
      </td>

      {/* Delete Button */}
      <td className="px-4 py-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleDelete(user?._id)}
            className="flex items-center gap-2 text-red-600 hover:text-white hover:bg-red-500 border border-red-500 px-3 py-1.5 rounded-md text-sm transition duration-200"
          >
            <MdDelete size={18} />
            <span>Delete</span>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UserCard;
