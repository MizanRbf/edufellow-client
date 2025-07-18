import React, { useState } from "react";
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

  const [sortOption, setSortOption] = useState("");

  // Sorted Applications
  const sortedApplications = [...allAppliedScholarships];

  if (sortOption === "appliedDateLatest") {
    sortedApplications.sort(
      (a, b) => new Date(b.appliedDate) - new Date(a.appliedDate)
    );
  } else if (sortOption === "appliedDateOldest") {
    sortedApplications.sort(
      (a, b) => new Date(a.appliedDate) - new Date(b.appliedDate)
    );
  } else if (sortOption === "deadlineSoonest") {
    sortedApplications.sort(
      (a, b) =>
        new Date(a.scholarshipDeadline) - new Date(b.scholarshipDeadline)
    );
  } else if (sortOption === "deadlineLatest") {
    sortedApplications.sort(
      (a, b) =>
        new Date(b.scholarshipDeadline) - new Date(a.scholarshipDeadline)
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
          <select
            onChange={(e) => setSortOption(e.target.value)}
            className="select select-bordered w-full max-w-xs"
            value={sortOption}
          >
            <option value="">Sort/Filter By</option>
            <option value="appliedDateLatest">Applied Date (Latest)</option>
            <option value="appliedDateOldest">Applied Date (Oldest)</option>
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
