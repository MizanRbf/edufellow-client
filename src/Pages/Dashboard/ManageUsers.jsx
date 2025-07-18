import React, { useState } from "react";

import Loader from "../../Shared/Loader";
import UserCard from "../../Components/ManageUsers/UserCard";
import EmptyState from "../../Shared/EmptyState";
import useUsers from "../../Hooks/useUsers";

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
    <div className="pr-4 overflow-x-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">Manage Users</h1>

        {/* Filter Dropdown */}
        <div>
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
      </div>

      {/* No Users Found Message */}
      {filteredUsers.length === 0 ? (
        <EmptyState
          message="No users found!"
          buttonText="Go Back"
          redirectPath={-1}
        />
      ) : (
        <table className="table">
          <thead className="text-lg">
            <tr className="text-primary">
              <th>No.</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <UserCard key={user._id} user={user} index={index} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageUsers;
