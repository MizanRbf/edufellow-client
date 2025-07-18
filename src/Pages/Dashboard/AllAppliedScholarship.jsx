import React from "react";
import Loader from "../../Shared/Loader";
import Applicant from "../../Components/AppliedScholarships/Applicant";
import useApplications from "../../Hooks/useApplications";
import EmptyState from "../../Shared/EmptyState";

const AllAppliedScholarship = () => {
  // Get Applied Applicants
  const {
    applications: allAppliedScholarships,
    isPending,
    isError,
    error,
  } = useApplications();

  if (isPending) {
    return <Loader></Loader>;
  }
  if (isError) {
    console.log(error.message);
  }
  return (
    <div>
      <h1>Manage Applications</h1>
      {/* Blank Page */}
      {allAppliedScholarships.length === 0 && (
        <EmptyState
          message="No Applied Scholarship found!"
          buttonText="Go Back"
          redirectPath={-1}
        ></EmptyState>
      )}
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
