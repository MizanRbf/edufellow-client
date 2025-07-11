import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import Loader from "../../Shared/Loader";
import MyApplicationTable from "../../Components/MyApplications/MyApplicationTable";

const MyApplication = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // Get My Application
  const email = user.email;
  const {
    data: myApplications,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["myApplications"],
    queryFn: async () => {
      const res = await axiosSecure("/applicants", { email });
      return res.data;
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }
  if (isError) {
    console.log(error.message);
  }

  return (
    <div>
      <h1>My Applications</h1>
      <table className="table">
        {/* head */}

        <thead className={`text-lg ${myApplications.length < 1 && "hidden"}`}>
          <tr className="text-primary">
            <th>No.</th>
            <th>Image</th>
            <th>University Name</th>
            <th>Scholarship Category</th>
            <th>Subject Category</th>
          </tr>
        </thead>

        <tbody>
          {myApplications.map((application, index) => (
            <MyApplicationTable
              key={application._id}
              application={application}
              index={index}
            ></MyApplicationTable>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyApplication;
