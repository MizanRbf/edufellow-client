import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loader from "../../Shared/Loader";
import ManageAppAppCard from "../../Components/ManageAppliedApplication/ManageAppAppCard";

const ManageAppliedApplication = () => {
  const axiosSecure = useAxiosSecure();
  // Get Applied Applicants
  const {
    data: manageAppliedApplications,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["manageAppliedApplications"],
    queryFn: async () => {
      const res = await axiosSecure.get("/applicants");
      return res.data;
    },
  });

  if (isPending) {
    return <Loader></Loader>;
  }
  if (isError) {
    console.log(error.message);
  }
  return (
    <div>
      <h1>Manage Applied Application</h1>
      <table className="table">
        {/* head */}

        <thead
          className={`text-lg ${
            manageAppliedApplications.length < 1 && "hidden"
          }`}
        >
          <tr className="text-primary">
            <th>No.</th>
            <th>Image</th>
            <th>University Name</th>
            <th>Scholarship Category</th>
            <th>Subject Category</th>
          </tr>
        </thead>

        <tbody>
          {manageAppliedApplications.map((manageApplicant, index) => (
            <ManageAppAppCard
              manageApplicant={manageApplicant}
              index={index}
            ></ManageAppAppCard>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAppliedApplication;
