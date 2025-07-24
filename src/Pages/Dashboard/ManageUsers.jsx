import React, { useState } from "react";

import Loader from "../../Shared/Loader";
import UserCard from "../../Components/ManageUsers/UserCard";
import EmptyState from "../../Shared/EmptyState";
import useUsers from "../../Hooks/useUsers";
import { Helmet } from "react-helmet-async";

const ManageUsers = () => {
  const [selectedRole, setSelectedRole] = useState("all");
  const { users = [], isLoading, isError, error } = useUsers();

  if (isLoading) return <Loader />;
  if (isError) return <p className="text-red-500">Error: {error.message}</p>;

  // Filter users by role if selectedRole is not "all"
  const filteredUsers =
    selectedRole === "all"
      ? users
      : users.filter((user) => user.role === selectedRole);

  return (
    <div>
      <Helmet>
        <title>Manage Users || Edufellow</title>
      </Helmet>

      {/* Title */}
      <div className="flex justify-center mt-5 md:mt-10 mb-6">
        <div className="inline-block transform -skew-x-12 bg-gradient-to-r from-cyan-800 to-cyan-950 px-8 py-4 shadow-lg rounded-md">
          <h1 className="transform skew-x-12 text-white text-3xl font-bold uppercase tracking-wide">
            Manage Users
          </h1>
        </div>
      </div>

      {/* Filter Dropdown */}
      <div className="mb-8">
        <select
          className="select select-bordered select-sm border-primary"
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="all">All Roles</option>
          <option value="admin">Admin</option>
          <option value="moderator">Moderator</option>
          <option value="user">User</option>
        </select>
      </div>

      <div className="pr-4 overflow-x-auto">
        {/* No Users Found Message */}
        {filteredUsers.length === 0 ? (
          <EmptyState
            message="No users found!"
            buttonText="Go Back"
            redirectPath={-1}
          />
        ) : (
          <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
            <table className="min-w-full table-auto bg-white">
              {/* Table Head */}
              <thead className="bg-primary/10 text-base text-primary uppercase tracking-wide">
                <tr>
                  <th className="px-4 py-3 text-left">No.</th>
                  <th className="px-4 py-3 text-left">Image</th>
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-left">Email</th>
                  <th className="px-4 py-3 text-left">Role</th>
                  <th className="px-4 py-3 text-left">Delete</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                {filteredUsers.map((user, index) => (
                  <UserCard key={user._id} user={user} index={index} />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageUsers;
