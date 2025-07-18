import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loader from "../../Shared/Loader";
import UserCard from "../../Components/ManageUsers/UserCard";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: users,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/user");
      return res.data;
    },
  });
  if (isLoading) {
    return <Loader></Loader>;
  }
  if (isError) {
    alert(error.message);
  }
  return (
    <div className="pr-4 overflow-x-auto">
      <h1 className="mb-6">Manage Users</h1>
      {/* Blank Page */}
      {users.length === 0 && (
        <EmptyState
          message="No users found!"
          buttonText="Go Back"
          redirectPath={-1}
        ></EmptyState>
      )}
      <table className="table">
        {/* head */}

        <thead className={`text-lg ${users.length < 1 && "hidden"}`}>
          <tr className="text-primary">
            <th>No.</th>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role:</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {users?.map((user, index) => (
            <UserCard key={user._id} user={user} index={index}></UserCard>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
