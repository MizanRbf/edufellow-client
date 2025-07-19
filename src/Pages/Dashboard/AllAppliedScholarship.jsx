import React, { useState } from "react";
import Loader from "../../Shared/Loader";
import Applicant from "../../Components/AppliedScholarships/Applicant";
import useApplications from "../../Hooks/useApplications";
import EmptyState from "../../Shared/EmptyState";
import DeleteRejectedButton from "../../Shared/DeleteRejectedButton";

const AllAppliedScholarship = () => {
  // Get Applied Applicants
  const {
    applications: allAppliedScholarships,
    isPending,
    isError,
    error,
  } = useApplications();

  const [sortOption, setSortOption] = useState("");

  // Sorted Applications
  const sortedApplications = [...allAppliedScholarships];

  if (sortOption === "applied_dateLatest") {
    sortedApplications.sort(
      (a, b) => new Date(b.applied_date) - new Date(a.applied_date)
    );
  } else if (sortOption === "applied_dateOldest") {
    sortedApplications.sort(
      (a, b) => new Date(a.applied_date) - new Date(b.applied_date)
    );
  } else if (sortOption === "deadlineSoonest") {
    sortedApplications.sort(
      (a, b) =>
        new Date(a.scholarship_deadline) - new Date(b.scholarship_deadline)
    );
  } else if (sortOption === "deadlineLatest") {
    sortedApplications.sort(
      (a, b) =>
        new Date(b.scholarship_deadline) - new Date(a.scholarship_deadline)
    );
  }

  if (isPending) {
    return <Loader></Loader>;
  }
  if (isError) {
    console.log(error.message);
  }
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1>Manage Applications</h1>
        <div className="flex justify-center mb-4">
          <DeleteRejectedButton />
          <select
            onChange={(e) => setSortOption(e.target.value)}
            className="select select-bordered w-full max-w-xs"
            value={sortOption}
          >
            <option value="">Sort/Filter By</option>
            <option value="applied_dateLatest">Applied Date (Latest)</option>
            <option value="applied_dateOldest">Applied Date (Oldest)</option>
            <option value="deadlineSoonest">
              Scholarship Deadline (Soonest)
            </option>
            <option value="deadlineLatest">
              Scholarship Deadline (Latest)
            </option>
          </select>
        </div>
      </div>

      {/* Blank Page */}
      {sortedApplications.length === 0 && (
        <EmptyState
          message="No Applied Scholarship found!"
          buttonText="Go Back"
          redirectPath={-1}
        ></EmptyState>
      )}
      <table className="table">
        {/* head */}

        <thead
          className={`text-lg ${sortedApplications.length < 1 && "hidden"}`}
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
          {sortedApplications.map((applicant, index) => (
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
