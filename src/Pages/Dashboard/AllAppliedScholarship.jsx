import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Loader from "../../Shared/Loader";
import Applicant from "../../Components/AppliedScholarships/Applicant";

const AllAppliedScholarship = () => {
  // Get Applied Applicants
  const {
    data: allAppliedScholarships,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["allAppliedScholarships"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/applicants");
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
      <h1>Manage Applications</h1>
      <table className="table">
        {/* head */}

        <thead
          className={`text-lg ${allAppliedScholarships.length < 1 && "hidden"}`}
        >
          <tr className="text-primary">
            <th>No.</th>
            <th>Image</th>
            <th>University Name</th>
            <th>Scholarship Category</th>
            <th>Subject Category</th>
            <th>Feedback</th>
            <th>Application Status</th>
          </tr>
        </thead>

        <tbody>
          {allAppliedScholarships.map((applicant, index) => (
            <Applicant
              key={applicant._id}
              applicant={applicant}
              index={index}
            ></Applicant>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllAppliedScholarship;
